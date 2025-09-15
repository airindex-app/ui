import { useId, type JSX } from "react";

import { CrossCircledIcon } from "../../icons";
import {
  Button,
  Text,
  useEventListener,
  useOutsideClick,
  useModal,
  Icon,
  Portal,
  type IDrawer,
} from "../../index";
import {
  DrawerContentStyled,
  DrawerCoreStyled,
  DrawerHeaderStyled,
  DrawerOverlayStyled,
  DrawerStyled,
  DrawerTriggerStyled,
} from "./styles";

export default function Drawer({
  children,
  css,
  disabled,
  portal = true,
  title,
  trigger,
  triggerCSS,
  wrapperCSS,
}: IDrawer): JSX.Element {
  const titleId = useId();
  const drawer = useModal();

  function handleClick(): void {
    if (!disabled) {
      drawer.handleClick();
    }
  }

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      drawer.handleClose();
    }
  });

  useOutsideClick(drawer.modalRef, () => {
    if (drawer.isOpen) {
      drawer.handleClose();
    }
  });

  return (
    <DrawerStyled css={wrapperCSS}>
      {trigger ? (
        <DrawerTriggerStyled
          css={triggerCSS}
          onClick={(e): void => {
            e.stopPropagation();
            handleClick();
          }}>
          {trigger}
        </DrawerTriggerStyled>
      ) : (
        "Missing trigger"
      )}

      {drawer.isMounted && (
        <Portal disabled={!portal}>
          <DrawerOverlayStyled
            animation={drawer.isOpen}
            css={{
              // Use JS viewport height for iOS dynamic toolbar fixes
              ...(drawer.viewportHeight && {
                height: `${drawer.viewportHeight}px`,
                minHeight: `${drawer.viewportHeight}px`,
              }),
            }}>
            <DrawerCoreStyled
              ref={drawer.modalRef}
              animation={drawer.isOpen}
              aria-labelledby={titleId}
              aria-modal="true"
              css={css}
              role="dialog">
              <DrawerHeaderStyled>
                <Text as="h6" bottom="none" id={titleId}>
                  {title}
                </Text>
                <Button
                  icon={<Icon radix={<CrossCircledIcon />} />}
                  small
                  onClick={() => drawer.handleClose()}>
                  Close
                </Button>
              </DrawerHeaderStyled>

              <DrawerContentStyled>
                {typeof children === "function" ? children(drawer.handleClose) : children}
              </DrawerContentStyled>
            </DrawerCoreStyled>
          </DrawerOverlayStyled>
        </Portal>
      )}
    </DrawerStyled>
  );
}

Drawer.displayName = "Drawer";
