import { useRef, useState, type JSX } from "react";

import { CrossCircledIcon } from "../../icons";
import {
  Button,
  Text,
  useEventListener,
  useOutsideClick,
  useScrollLock,
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
  forceHeight,
  portal = true,
  title,
  trigger,
  triggerCSS,
  wrapperCSS,
}: IDrawer): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 200);
  }

  function handleOpen(): void {
    setIsOpen(true);
    setIsMounted(true);
  }

  function handleClick(): void {
    if (isOpen || isMounted) {
      setIsOpen(false);
      setIsMounted(false);
    } else {
      handleOpen();
    }
  }

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }
  });

  useScrollLock(isMounted);

  useOutsideClick(ref, () => {
    if (isOpen) {
      handleClose();
    }
  });

  return (
    <DrawerStyled css={wrapperCSS}>
      {trigger ? (
        <DrawerTriggerStyled
          css={triggerCSS}
          onClick={(e): void => {
            e.stopPropagation();
            if (!disabled) {
              handleClick();
            }
          }}>
          {trigger}
        </DrawerTriggerStyled>
      ) : (
        "Missing trigger"
      )}

      {isMounted && (
        <Portal disabled={!portal}>
          <DrawerOverlayStyled animation={isOpen}>
            <DrawerCoreStyled
              ref={ref}
              animation={isOpen}
              css={{
                ...css,
                ...(forceHeight && {
                  maxHeight: `${forceHeight}vh`,
                  minHeight: `${forceHeight}vh`,
                }),
              }}>
              <DrawerHeaderStyled>
                <Text as="h6" bottom="none">
                  {title}
                </Text>
                <Button
                  icon={<Icon radix={<CrossCircledIcon />} />}
                  small
                  onClick={() => handleClose()}>
                  Close
                </Button>
              </DrawerHeaderStyled>

              <DrawerContentStyled>
                {typeof children === "function" ? children(handleClose) : children}
              </DrawerContentStyled>
            </DrawerCoreStyled>
          </DrawerOverlayStyled>
        </Portal>
      )}
    </DrawerStyled>
  );
}
