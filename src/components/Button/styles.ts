import { styled } from "../../stitches.config";

export const ButtonStyled = styled("button", {
  "&:active": {
    outline: 0,
  },

  "&:disabled": {
    cursor: "not-allowed",
    opacity: "$light",
  },

  alignContent: "center",
  alignItems: "center",
  appearance: "none",
  backgroundColor: "$surface",
  border: "1px solid $border",
  color: "$text",
  cursor: "pointer",
  display: "inline-flex",
  fontFamily: "$default",
  fontSize: "$default",
  fontWeight: "bold",
  justifyContent: "center",
  letterSpacing: "-0.02em",
  lineHeight: "$default",
  margin: 0,
  minHeight: "$small",
  outline: 0,
  padding: "$smallest $small",
  phone: {
    minHeight: "$smaller",
    padding: "$smallest $small",
  },
  position: "relative",
  textOverflow: "ellipsis",

  transition: "$default",

  variants: {
    block: {
      true: {
        display: "block",
        width: "100%",
      },
    },
    loading: {
      true: {
        cursor: "wait",
        opacity: "$light",
      },
    },
    small: {
      true: {
        fontSize: "$small",
        lineHeight: "$small",
        minHeight: "$smaller",

        phone: {
          minHeight: "$smallest",
        },
      },
    },
    theme: {
      default: {
        "&:not(:disabled):hover": {
          backgroundColor: "$surfaceHover",
          borderColor: "$border",
        },
      },
      minimal: {
        "&:not(:disabled):hover": {
          backgroundColor: "$surfaceHover",
          borderColor: "$border",
        },
        backgroundColor: "transparent",
        borderColor: "transparent",
      },
      solid: {
        "&:not(:disabled):hover": {
          backgroundColor: "$text",
          borderColor: "$text",
          opacity: "$default",
        },
        backgroundColor: "$text",
        borderColor: "$text",
        color: "$background",
      },
    },
  },

  verticalAlign: "middle",
  whiteSpace: "nowrap",
  width: "auto",
});

export const ButtonIconStyled = styled("span", {
  display: "inline-flex",
  justifyContent: "center",
  variants: {
    align: {
      left: {
        marginRight: "$smaller",
      },
      right: {
        marginLeft: "$smaller",
      },
    },
  },

  verticalAlign: "middle",
});

export const ButtonLoadingStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$surface",
  display: "flex",
  inset: 0,
  justifyContent: "center",
  position: "absolute",
  zIndex: 1,
});
