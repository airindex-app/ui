import type { JSX } from "react";

import { type ILoading } from "../../index";
import { LoadingStyled } from "./styles";

export default function Loading({ css, width }: ILoading): JSX.Element {
  return (
    <LoadingStyled
      aria-live="polite"
      css={{
        ...(width ? { height: width, width } : {}),
        ...css,
      }}
      role="status"
    />
  );
}

Loading.displayName = "Loading";
