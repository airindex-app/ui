import type { JSX } from "react";

import { type IView } from "../../index";
import { darkTheme } from "../../stitches.config";
import { ViewStyled, ViewContainerStyled } from "./styles";

export default function View({
  app,
  as,
  bottom,
  children,
  container,
  css,
  id,
  inverted,
  top,
}: IView): JSX.Element {
  return (
    <ViewStyled
      as={as}
      className={inverted ? darkTheme.className : ""}
      css={{
        ...(top && {
          marginTop: 0,
          paddingTop: `$${top}`,
        }),
        ...(bottom && {
          marginBottom: 0,
          paddingBottom: `$${bottom}`,
        }),
        ...css,
      }}
      id={id ? `view-${id}` : undefined}
      inverted={inverted}>
      <ViewContainerStyled app={app} container={container}>
        {children}
      </ViewContainerStyled>
    </ViewStyled>
  );
}

View.displayName = "View";
