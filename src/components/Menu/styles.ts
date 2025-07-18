import { fadeIn, fadeOut, slideInScale, slideOutScale, styled } from "../../stitches.config";

// Shared base for overlay components (Menu/Modal/Drawer)
const overlayBase = {
  backdropFilter: "blur(2px)",
  backgroundColor: "$overlay",
  inset: 0,
  position: "fixed",
  transition: "$default",
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} 200ms ease-in-out`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${fadeIn} 200ms ease-in-out`,
        animationFillMode: "forwards",
      },
    },
  },
} as const;

// Shared base for dialog-style containers
const dialogContainerBase = {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  backgroundColor: "$surface",
  left: "50%",
  maxHeight: "80vh",
  minHeight: "auto",
  overflowX: "hidden",
  overflowY: "auto",
  phone: {
    maxHeight: "90vh",
    width: "95%",
  },
  position: "fixed",
  top: "50%",
  transform: "translate(-50%, -50%)",
  variants: {
    animation: {
      false: {
        animation: `${slideOutScale} 200ms ease-out`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${slideInScale} 200ms ease-out`,
        animationFillMode: "forwards",
      },
    },
  },
  width: "90%",
} as const;

export const MenuStyled = styled("div", {
  display: "inline-flex",
  height: "100%",
  verticalAlign: "middle",
});

export const MenuTriggerStyled = styled("div", {
  cursor: "pointer",
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const MenuOverlayStyled = styled("div", {
  ...overlayBase,
  zIndex: "$menu",
});

export const MenuGroupStyled = styled("div", {
  ...dialogContainerBase,
  maxWidth: "420px",
  padding: "$small",
});

export const MenuItemStyled = styled("div", {
  "&:hover": {
    backgroundColor: "$surfaceHover",
  },
  "&:not(:last-child)": {
    borderBottom: "1px solid $borderLight",
  },
  alignItems: "center",
  color: "$text",
  cursor: "pointer",
  display: "flex",
  fontSize: "$default",
  justifyContent: "space-between",
  margin: "$smallest $smaller",
  padding: "$smaller $small",
  textAlign: "left",
  transition: "$default",
  userSelect: "none",
  variants: {
    selected: {
      true: {
        backgroundColor: "$surface",
        fontFamily: "$default",
        fontWeight: 600,
      },
    },
  },
});

export const MenuItemContentStyled = styled("div", {
  alignItems: "center",
  display: "flex",
  gap: "$small",
  justifyContent: "space-between",
  width: "100%",
});

export const MenuItemIconStyled = styled("div", {
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

export const MenuContentStyled = styled("div", {
  borderTop: "1px solid $border",
  display: "block",
  padding: "$medium",
});

export const MenuHeaderStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$surface",
  borderBottom: "1px solid $border",
  display: "flex",
  fontFamily: "$default",
  fontWeight: 600,
  justifyContent: "space-between",
  margin: "-$small -$small $small -$small",
  padding: "$medium",
});

export default MenuStyled;
