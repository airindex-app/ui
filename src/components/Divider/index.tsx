import type { JSX } from "react";

import { type IDivider } from "../../index";
import { DividerStyled } from "./styles";

export default function Divider({ bottom, css, top, ...rest }: IDivider): JSX.Element {
  return (
    <DividerStyled
      aria-orientation="horizontal"
      css={{
        ...(top && {
          marginTop: `$${top}`,
        }),
        ...(bottom && {
          marginBottom: `$${bottom}`,
        }),
        ...css,
      }}
      role="separator"
      {...rest}
    />
  );
}

Divider.displayName = "Divider";
