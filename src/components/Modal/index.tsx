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
  ModalStyled,
  ModalTriggerStyled,
} from "./styles";

export default function Modal({
  children,
  css,
  disabled,
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
      <ModalTriggerStyled
        css={triggerCSS}
        onClick={(e: MouseEvent): void => {
          e.stopPropagation();
          handleClick();
        }}>
        {trigger}
      </ModalTriggerStyled>

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
              small={small}>
              <ModalHeaderStyled>
                <Text as="h6" bottom="none" id={titleId}>
                  {title}
                </Text>
                <Button
                  icon={<Icon radix={<CrossCircledIcon />} />}
                  small
                  theme="minimal"
                  onClick={() => modal.handleClose()}>
                  Close
                </Button>
              </ModalHeaderStyled>

              <ModalContentStyled>
                {typeof children === "function" ? children(modal.handleClose) : children}
              </ModalContentStyled>
            </ModalGroupStyled>
          </ModalOverlayStyled>,
          document.body,
        )}
    </ModalStyled>
  );
}

Modal.displayName = "Modal";
