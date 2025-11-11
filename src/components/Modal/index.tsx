import { useId, type JSX, type MouseEvent } from "react";
import { createPortal } from "react-dom";

import { CrossCircledIcon } from "../../icons";
import {
  Button,
  Text,
  useEventListener,
  useOutsideClick,
  useModal,
  Icon,
  type IModal,
} from "../../index";
import {
  ModalOverlayStyled,
  ModalGroupStyled,
  ModalHeaderStyled,
  ModalContentStyled,
  ModalFooterStyled,
  ModalStyled,
  ModalTriggerStyled,
} from "./styles";

export default function Modal({
  children,
  css,
  disabled,
  footer,
  small,
  title,
  trigger,
  triggerCSS,
  wrapperCSS,
}: IModal): JSX.Element {
  const titleId = useId();
  const modal = useModal();

  function handleClick(): void {
    if (disabled) return;
    modal.handleClick();
  }

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      modal.handleClose();
    }
  });

  useOutsideClick(modal.modalRef, () => modal.handleClose());

  return (
    <ModalStyled css={wrapperCSS}>
      {trigger ? (
        <ModalTriggerStyled
          css={triggerCSS}
          onClick={(e: MouseEvent): void => {
            e.stopPropagation();
            handleClick();
          }}>
          {trigger}
        </ModalTriggerStyled>
      ) : (
        "Missing trigger"
      )}

      {modal.isMounted &&
        createPortal(
          <ModalOverlayStyled animation={modal.isOpen}>
            <ModalGroupStyled
              ref={modal.modalRef}
              animation={modal.isOpen}
              aria-labelledby={titleId}
              aria-modal="true"
              css={css}
              role="dialog"
              small={small ?? false}>
              <ModalHeaderStyled>
                <Text as="h6" bottom="none" id={titleId}>
                  {title}
                </Text>
                <Button
                  icon={<Icon radix={<CrossCircledIcon />} />}
                  small
                  onClick={() => modal.handleClose()}>
                  Close
                </Button>
              </ModalHeaderStyled>

              <ModalContentStyled>
                {typeof children === "function" ? children(modal.handleClose) : children}
              </ModalContentStyled>

              {footer && <ModalFooterStyled>{footer}</ModalFooterStyled>}
            </ModalGroupStyled>
          </ModalOverlayStyled>,
          document.body,
        )}
    </ModalStyled>
  );
}

Modal.displayName = "Modal";
