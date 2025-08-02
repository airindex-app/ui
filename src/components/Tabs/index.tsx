import { useState, useEffect, useRef, type JSX } from "react";

import { useEventListener, type ITabs } from "../../index";
import { TabStyled, TabsStyled } from "./styles";

export default function Tabs({ css, initial, onSelection, options, small }: ITabs): JSX.Element {
  const tabsRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<string>(initial || options[0].value);
  const [focused, setFocused] = useState<string>(initial || options[0]?.value || "");

  const hasOptions = options && options.length > 0;

  useEffect(() => {
    if (initial !== undefined) {
      setSelected(initial);
      setFocused(initial);
    }
  }, [initial]);

  function handleSelection(value: string): void {
    setSelected(value);
    if (onSelection) {
      onSelection(value);
    }
  }

  function handleTabClick(value: string): () => void {
    return () => handleSelection(value);
  }

  function handleKeyDown(event: KeyboardEvent): void {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      const index = options.findIndex((option) => option.value === focused);

      if (index > 0) {
        setFocused(options[index - 1].value);
      }
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      const index = options.findIndex((option) => option.value === focused);

      if (index < options.length - 1) {
        setFocused(options[index + 1].value);
      }
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleSelection(focused);
    }
  }

  function handleTabMouseOver(value: string): void {
    setFocused(value);
  }

  useEventListener("keydown", handleKeyDown, tabsRef);

  if (!hasOptions) {
    return <TabsStyled />;
  }

  return (
    <TabsStyled ref={tabsRef} css={css} tabIndex={-1}>
      {options.map((option) => (
        <TabStyled
          key={option.value}
          focused={option.value === focused}
          icon={option.icon}
          selected={selected === option.value}
          small={small}
          onClick={handleTabClick(option.value)}
          onMouseOver={() => handleTabMouseOver(option.value)}>
          {option.label}
        </TabStyled>
      ))}
    </TabsStyled>
  );
}
