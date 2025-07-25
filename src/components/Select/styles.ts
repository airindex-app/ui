import { fadeIn, fadeOut, styled } from "../../stitches.config";

// Shared base for sticky elements in select
const stickyBase = {
  backgroundColor: "$background",
  position: "sticky",
  top: 0,
  zIndex: "$select",
} as const;

export const SelectStyled = styled("div", {
  display: "inline-block",
  position: "relative",
  verticalAlign: "middle",
});

export const SelectTriggerStyled = styled("div", {
  cursor: "pointer",
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const SelectGroupStyled = styled("div", {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  backgroundColor: "$background",
  border: "1px solid $border",
  lineBreak: "auto",
  overflowY: "auto",
  padding: "$smallest $smaller",
  pointerEvents: "auto",
  textAlign: "left !important",
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} 200ms ease-out`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${fadeIn} 200ms ease-out`,
        animationFillMode: "forwards",
      },
    },
  },
  width: "100%",
  zIndex: "$select",
});

export const SelectFilterStyled = styled("div", {
  ...stickyBase,
  padding: "$small",
});

export const SelectItemStyled = styled("div", {
  "&:hover": {
    backgroundColor: "$surfaceHover",
  },
  alignItems: "center",
  backgroundColor: "$surface",
  color: "$text",
  cursor: "pointer",
  display: "flex",
  fontSize: "$default",
  gap: "$small",
  justifyContent: "space-between",
  margin: "$smaller",
  padding: "$smaller $small",
  textAlign: "left",
  transition: "$default",
  userSelect: "none",

  variants: {
    focused: {
      true: {
        backgroundColor: "$surfaceHover",
      },
    },
    last: {
      true: {
        borderTop: "1px solid $border",
        marginTop: "$small",
        paddingTop: "$small",
      },
    },
    selected: {
      true: {
        backgroundColor: "$surface",
        color: "$text",
        fontFamily: "$default",
        fontWeight: 600,
      },
    },
  },
});

export const SelectEmptyStyled = styled("div", {
  color: "$text",
  fontSize: "$small",
  opacity: "$light",
  padding: "$medium",
  textAlign: "center",
});

export const SelectLabelStyled = styled("div", {
  ...stickyBase,
  borderBottom: "1px solid $border",
  fontFamily: "$default",
  fontWeight: 600,
  padding: "$smaller $small $smallest $small",
});

export const SelectIconStyled = styled("div", {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  variants: {
    align: {
      left: {
        order: -1,
      },
      right: {
        order: 1,
      },
    },
  },
});

export default SelectStyled;
