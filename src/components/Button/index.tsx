import { forwardRef, type JSX } from "react";

import { ArrowTopRightIcon } from "../../icons";
import { Loading, Icon, type IButton } from "../../index";
import { ButtonIconStyled, ButtonLoadingStyled, ButtonStyled, NewDotStyled } from "./styles";

const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      block,
      children,
      css,
      disabled,
      external,
      icon,
      iconPosition,
      inline,
      loading,
      new: isNew,
      onClick,
      small,
      theme,
      ...rest
    },
    ref,
  ): JSX.Element => {
    const isDisabled = disabled || loading;
    const showLeftIcon = icon && (iconPosition === "left" || !iconPosition) && !external;
    const showRightIcon = icon && iconPosition === "right" && !external;

    return (
      <ButtonStyled
        ref={ref}
        aria-busy={loading || undefined}
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
        type="button"
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
            <Icon radix={<ArrowTopRightIcon />} />
          </ButtonIconStyled>
        )}

        {isNew && <NewDotStyled theme={theme || "default"} />}
      </ButtonStyled>
    );
  },
);

Button.displayName = "Button";

export default Button;
