import type { IconProps } from "@phosphor-icons/react";

import { cloneElement, ReactElement } from "react";

import type { IIcon } from "../../types/components";

import { IconStyled } from "./styles";

const STANDARD_WEIGHT = "regular";

export default function Icon({
  css,
  forceColor,
  forceSize = 21,
  inline,
  phosphor,
}: IIcon): ReactElement {
  return (
    <IconStyled
      css={{
        ...(inline && {
          marginRight: inline === "auto" ? "auto" : `$${inline}`,
        }),
        ...(forceColor && {
          svg: {
            color: `$${forceColor} !important`,
          },
        }),
        ...(forceSize && {
          svg: {
            height: `${forceSize}px`,
            width: `${forceSize}px`,
          },
        }),
        ...css,
      }}>
      {cloneElement(phosphor as ReactElement<IconProps>, { weight: STANDARD_WEIGHT })}
    </IconStyled>
  );
}
