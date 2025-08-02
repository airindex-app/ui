import { useEffect, useRef, useState, type JSX } from "react";

import { CrossCircledIcon } from "../../icons";
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
  const [focused, setFocused] = useState("");

  const animationDuration = 200;
  const isMenuOpen = isOpen || isMounted;

  function handleClose(): void {
    setIsOpen(false);
    setFocused("");
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

  function handleKeyDown(event: KeyboardEvent): void {
    if (!isOpen) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const index = options.findIndex((option) => option.value === focused);

      if (index < options.length - 1) {
        setFocused(options[index + 1].value);
      }
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      const index = options.findIndex((option) => option.value === focused);

      if (index > 0) {
        setFocused(options[index - 1].value);
      }
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const index = options.findIndex((option) => option.value === focused);

      if (index >= 0) {
        handleSelection(options[index].value, options[index].label);
      }
    }
  }

  function handleItemMouseOver(value: string): void {
    setFocused(value);
  }

  useEffect(() => {
    if (isOpen && ref.current) {
      ref.current.focus();
    } else {
      setFocused("");
    }
  }, [isOpen]);

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }
  });

  useEventListener("keydown", handleKeyDown, ref);

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
            <MenuGroupStyled ref={ref} animation={isOpen} css={css} tabIndex={-1}>
              <MenuHeaderStyled>
                {logo && <div>{logo}</div>}
                <Button
                  icon={<Icon radix={<CrossCircledIcon />} />}
                  small
                  theme="minimal"
                  onClick={() => handleClose()}>
                  Close
                </Button>
              </MenuHeaderStyled>

              {options.map((option) => (
                <MenuItemStyled
                  key={option.value}
                  focused={option.value === focused}
                  selected={initial === option.value}
                  onClick={() => handleSelection(option.value, option.label)}
                  onMouseOver={() => handleItemMouseOver(option.value)}>
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

              {children && (
                <MenuContentStyled>
                  {typeof children === "function" ? children(handleClose) : children}
                </MenuContentStyled>
              )}
            </MenuGroupStyled>
          </MenuOverlayStyled>
        </Portal>
      )}
    </MenuStyled>
  );
}
