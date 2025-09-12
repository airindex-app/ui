import type { JSX } from "react";

import { Text, type IAvatar } from "../../index";
import { AvatarStyled } from "./styles";

export default function Avatar({
  css,
  fallback,
  image,
  theme = "default",
  width = 32,
}: IAvatar): JSX.Element {
  return (
    <AvatarStyled
      css={{
        height: width,
        maxHeight: width,
        maxWidth: width,
        minHeight: width,
        minWidth: width,
        width: width,
        ...css,
      }}
      theme={theme}>
      {image || <Text as="span">{fallback}</Text>}
    </AvatarStyled>
  );
}

Avatar.displayName = "Avatar";
