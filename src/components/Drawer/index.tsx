import { useId, useRef, useState, type JSX } from "react";

import { CrossCircledIcon } from "../../icons";
import {
  Button,
  Text,
  useEventListener,
  useOutsideClick,
  useScrollLock,
  Icon,
  Portal,
  useViewport,
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
  const { heightPx, supportsDynamicVH, supportsSmallVH } = useViewport();
  const ref = useRef<HTMLDivElement | null>(null);
  const titleId = useId();

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
              aria-labelledby={titleId}
              aria-modal="true"
              css={{
                ...css,
                ...(forceHeight &&
                  (!supportsDynamicVH && !supportsSmallVH
                    ? {
                        maxHeight: `${(forceHeight / 100) * heightPx}px`,
                        minHeight: `${(forceHeight / 100) * heightPx}px`,
                      }
                    : {
                        dynamicViewport: {
                          property: "maxHeight",
                          unit: "vh",
                          value: String(forceHeight),
                        },
                      })),
              }}
              role="dialog">
              <DrawerHeaderStyled>
                <Text as="h6" bottom="none" id={titleId}>
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

Drawer.displayName = "Drawer";
