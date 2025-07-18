import type { JSX } from "react";

import { type ILoading } from "../../index";
import { LoadingStyled } from "./styles";

export default function Loading({ css, width }: ILoading): JSX.Element {
  return <LoadingStyled css={{ width, ...css }} />;
}
