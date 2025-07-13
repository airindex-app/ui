import type { JSX } from "react";

import { type ILoading } from "../../index";
import { LoadingStyled } from "./styles";

export default function Loading({ css }: Pick<ILoading, "css">): JSX.Element {
  return <LoadingStyled css={css} />;
}
