import type { JSX } from "react";

import { Loading, Icon, type IButton } from "../../index";
import { ButtonIconStyled, ButtonLoadingStyled, ButtonStyled } from "./styles";

export default function Button({
  block,
  children,
  css,
  disabled,
  external,
  icon,
  iconPosition,
  inline,
  loading,
  onClick,
  small,
  theme,
  ...rest
}: IButton): JSX.Element {
  const isDisabled = disabled || loading;
  const showLeftIcon = icon && (iconPosition === "left" || !iconPosition) && !external;
  const showRightIcon = icon && iconPosition === "right" && !external;

  return (
    <ButtonStyled
      block={block}
      css={{
        ...(inline && {
          alignSelf: "center",
          marginRight: inline === "auto" ? "auto" : `$${inline}`,
          verticalAlign: "middle",
        }),
        ...css,
      }}
      disabled={isDisabled}
      loading={loading}
      small={small}
      theme={theme || "default"}
      onClick={!isDisabled ? onClick : undefined}
      {...rest}>
      {loading && (
        <ButtonLoadingStyled>
          <Loading />
        </ButtonLoadingStyled>
      )}

      {showLeftIcon && (
        <ButtonIconStyled align={small ? "smallLeft" : "left"}>{icon}</ButtonIconStyled>
      )}

      {children}

      {showRightIcon && (
        <ButtonIconStyled align={small ? "smallRight" : "right"}>{icon}</ButtonIconStyled>
      )}

      {external && (
        <ButtonIconStyled align={small ? "smallRight" : "right"}>
          <Icon system="ArrowUpRightIcon" />
        </ButtonIconStyled>
      )}
    </ButtonStyled>
  );
}
