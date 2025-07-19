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
  fontWeight: 600,
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
        padding: "$smallest $small",

        phone: {
          minHeight: "$smallest",
        },
      },
    },
    theme: {
      default: {
        "&:not(:disabled):hover": {
          backgroundColor: "$surfaceHover",
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
          opacity: "$default",
        },
        backgroundColor: "$text",
        borderColor: "$text",
        color: "$background",
      },
      yellow: {
        "&:not(:disabled):hover": {
          opacity: "$default",
        },
        backgroundColor: "$yellow",
        borderColor: "$yellow",
        color: "$text",
        darkOnly: {
          color: "$background",
        },
      },
    },
  },

  verticalAlign: "middle",
  whiteSpace: "nowrap",
  width: "fit-content",
});

export const ButtonIconStyled = styled("span", {
  display: "inline-flex",
  justifyContent: "center",
  variants: {
    align: {
      left: {
        marginRight: "$small",
      },
      right: {
        marginLeft: "$small",
      },
      smallLeft: {
        marginRight: "$smaller",
      },
      smallRight: {
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
