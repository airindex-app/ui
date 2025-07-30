import { type JSX } from "react";

import type { IIcon } from "../../types/components";

import useMountSSR from "../../hooks/useMountSSR";
import { IconStyled } from "./styles";

export default function Icon({
  css,
  forceColor,
  forceSize = 21,
  inline,
  radix,
}: IIcon): JSX.Element {
  const isMounted = useMountSSR();

  if (!isMounted || !radix) return <> </>;

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
      {radix}
    </IconStyled>
  );
}
