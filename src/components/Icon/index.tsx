import { type JSX } from "react";

import type { IIcon } from "../../types/components";

import useMountSSR from "../../hooks/useMountSSR";
import { IconStyled } from "./styles";

export default function Icon({
  css,
  forceColor,
  forceSize = 21,
  inline,
  phosphor,
}: IIcon): JSX.Element {
  const isMounted = useMountSSR();

  if (!isMounted || !phosphor) return <> </>;

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
      {phosphor}
    </IconStyled>
  );
}
