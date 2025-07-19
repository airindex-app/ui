import { useRef, useState, type JSX } from "react";

import {
  Button,
  Portal,
  useEventListener,
  useOutsideClick,
  useScrollLock,
  Icon,
  type IMenu,
} from "../../index";
import {
  MenuGroupStyled,
  MenuItemStyled,
  MenuItemContentStyled,
  MenuItemIconStyled,
  MenuStyled,
  MenuTriggerStyled,
  MenuContentStyled,
  MenuHeaderStyled,
  MenuOverlayStyled,
} from "./styles";

export default function Menu({
  children,
  css,
  initial,
  logo,
  onSelection,
  options,
  trigger,
  triggerCSS,
  wrapperCSS,
}: IMenu): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const animationDuration = 200;
  const isMenuOpen = isOpen || isMounted;

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, animationDuration);
  }

  function handleOpen(): void {
    setIsOpen(true);
    setIsMounted(true);
  }

  function handleClick(): void {
    if (isMenuOpen) {
      setIsOpen(false);
      setIsMounted(false);
    } else {
      handleOpen();
    }
  }

  function handleSelection(value: string, label: string): void {
    if (onSelection) {
      onSelection(value, label);
    }
    handleClose();
  }

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }
  });

  useScrollLock(isMounted);
  useOutsideClick(ref, () => handleClose());

  return (
    <MenuStyled css={wrapperCSS}>
      <MenuTriggerStyled
        css={triggerCSS}
        onClick={(e): void => {
          e.stopPropagation();
          handleClick();
        }}>
        {trigger}
      </MenuTriggerStyled>

      {isMounted && (
        <Portal>
          <MenuOverlayStyled animation={isOpen}>
            <MenuGroupStyled ref={ref} animation={isOpen} css={css}>
              <MenuHeaderStyled>
                {logo && <div>{logo}</div>}
                <Button
                  icon={<Icon system="XCircleIcon" />}
                  small
                  theme="minimal"
                  onClick={() => handleClose()}>
                  Close
                </Button>
              </MenuHeaderStyled>

              {options.map((option) => (
                <MenuItemStyled
                  key={option.value}
                  selected={initial === option.value}
                  onClick={() => handleSelection(option.value, option.label)}>
                  <MenuItemContentStyled>
                    {option.icon && option.iconPosition === "left" && (
                      <MenuItemIconStyled align="left">{option.icon}</MenuItemIconStyled>
                    )}
                    {option.label}
                    {option.icon && option.iconPosition !== "left" && (
                      <MenuItemIconStyled align="right">{option.icon}</MenuItemIconStyled>
                    )}
                  </MenuItemContentStyled>
                </MenuItemStyled>
              ))}

              {children && <MenuContentStyled>{children}</MenuContentStyled>}
            </MenuGroupStyled>
          </MenuOverlayStyled>
        </Portal>
      )}
    </MenuStyled>
  );
}
