import { useEffect, useRef, useState, type JSX } from "react";

import {
  Input,
  Loading,
  Text,
  useBreakpoints,
  useEventListener,
  useOutsideClick,
  useFloatingUI,
  useWindowDimensions,
  type ISelect,
} from "../../index";
import {
  SelectStyled,
  SelectTriggerStyled,
  SelectGroupStyled,
  SelectItemStyled,
  SelectFilterStyled,
  SelectEmptyStyled,
  SelectLabelStyled,
  SelectIconStyled,
} from "./styles";

export default function Select({
  css,
  disabled,
  filter,
  height,
  initial,
  label,
  last,
  loading,
  onSelection,
  options,
  trigger,
  triggerCSS,
  width,
  wrapperCSS,
}: ISelect): JSX.Element {
  const { contentRef, handleClick, handleClose, isMounted, isOpen, triggerRef } = useFloatingUI();
  const { isPhone } = useBreakpoints();
  const { height: windowHeight } = useWindowDimensions();
  const optionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState("");
  const [selected, setSelected] = useState<string>(initial || "");

  const shouldShowFilter = options.length > 8 || filter;
  const filteredOptions = options
    ? options.filter((option) => {
        if (search) {
          return option.label.toLowerCase().includes(search.toLowerCase());
        }

        return option;
      })
    : [];

  useEffect(() => {
    if (!isOpen) {
      setSearch("");
      setFocused("");
    } else if (shouldShowFilter) {
      // If there's a filter, it will get focus naturally - no action needed
    } else if (contentRef.current) {
      // Focus the dropdown container when there's no filter
      contentRef.current.focus();
    }
  }, [isOpen, shouldShowFilter]);

  useEffect(() => {
    if (initial !== undefined) {
      setSelected(initial);
    }
  }, [initial]);

  function handleSelection(value: string, label: string): void {
    setSelected(value);
    if (onSelection) {
      onSelection(value, label);
    }
    handleClose();
  }

  function handleKeyDown(event: KeyboardEvent): void {
    if (isPhone || !isOpen) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const index = filteredOptions.findIndex((option) => option.value === focused);

      if (index < filteredOptions.length - 1) {
        const nextValue = filteredOptions[index + 1].value;

        setFocused(nextValue);

        optionRefs.current[nextValue]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      const index = filteredOptions.findIndex((option) => option.value === focused);

      if (index > 0) {
        const prevValue = filteredOptions[index - 1].value;

        setFocused(prevValue);

        optionRefs.current[prevValue]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const index = filteredOptions.findIndex((option) => option.value === focused);

      if (index >= 0) {
        handleSelection(filteredOptions[index].value, filteredOptions[index].label);
      }
    }
  }

  function handleEscapeKey(event: KeyboardEvent): void {
    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }
  }

  function handleItemMouseOver(value: string): void {
    if (!isPhone) {
      setFocused(value);
    }
  }

  useOutsideClick(contentRef, () => handleClose());
  useEventListener("keydown", handleEscapeKey);
  useEventListener("keydown", handleKeyDown, contentRef);

  return (
    <SelectStyled css={wrapperCSS}>
      <SelectTriggerStyled
        ref={triggerRef}
        css={triggerCSS}
        onClick={(e): void => {
          e.stopPropagation();
          if (!disabled) {
            handleClick();
          }
        }}>
        {trigger}
      </SelectTriggerStyled>
      {isMounted && (
        <SelectGroupStyled
          ref={contentRef}
          animation={isOpen}
          css={{
            height: height || "auto",
            maxHeight: windowHeight < 700 ? "50vh" : "70vh",
            maxWidth: width || "500px",
            minWidth: width || filter ? "200px" : "125px",
            phone: {
              maxWidth: "100%",
            },
            width: width || "auto",
            ...css,
          }}
          tabIndex={-1}>
          {label && (
            <SelectLabelStyled>
              <Text as="h6">{label}</Text>
            </SelectLabelStyled>
          )}
          {shouldShowFilter && (
            <SelectFilterStyled>
              <Input
                disabled={!options}
                name="select-filter"
                placeholder="Type to search..."
                submitValid={(): boolean => search.length > 0}
                value={search}
                onChange={(event): void => setSearch(event.target.value)}
              />
            </SelectFilterStyled>
          )}
          {loading ? (
            <Loading />
          ) : filteredOptions && filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <SelectItemStyled
                key={option.value}
                ref={(el) => {
                  optionRefs.current[option.value] = el;
                }}
                focused={option.value === focused && !isPhone}
                last={last && !search}
                selected={option.value === selected}
                onClick={() => handleSelection(option.value, option.label)}
                onMouseOver={() => handleItemMouseOver(option.value)}>
                {option.icon && option.iconPosition === "left" && (
                  <SelectIconStyled align="left">{option.icon}</SelectIconStyled>
                )}
                {option.label}
                {option.icon && option.iconPosition !== "left" && (
                  <SelectIconStyled align="right">{option.icon}</SelectIconStyled>
                )}
              </SelectItemStyled>
            ))
          ) : (
            <SelectEmptyStyled>No matching options</SelectEmptyStyled>
          )}
        </SelectGroupStyled>
      )}
    </SelectStyled>
  );
}
