import type { JSX } from "react";

import { Image, Text, type IAvatar } from "../../index";
import { AvatarStyled } from "./styles";

const getTheme = (): "yellow" => {
  // Always return yellow for colored avatars
  return "yellow";
};

export default function Avatar({
  alt,
  colors,
  css,
  fallback,
  round = false,
  src,
  width = 32,
}: IAvatar): JSX.Element {
  const theme = colors ? getTheme() : "default";

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
      round={round}
      theme={theme}>
      {src ? (
        <Image alt={alt || fallback} fill fillFit="cover" sizes={`${width}px`} src={src} />
      ) : (
        <Text as="span">{fallback}</Text>
      )}
    </AvatarStyled>
  );
}
