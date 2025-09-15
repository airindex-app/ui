import { fadeIn, fadeOut, slideInScale, slideOutScale, styled } from "../../stitches.config";

const overlayBase = {
  alignItems: "center",
  backdropFilter: "blur(2px)",
  backgroundColor: "$overlay",
  display: "flex",
  inset: 0,
  justifyContent: "center",
  overflow: "hidden",
  pointerEvents: "auto",
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

const dialogContainerBase = {
  backgroundColor: "$background",
  dynamicViewport: { property: "maxHeight", unit: "vh", value: "80" },
  maxWidth: "90%",
  minHeight: "auto",
  overflow: "hidden",
  phone: {
    dynamicViewport: { property: "maxHeight", unit: "vh", value: "90" },
    maxWidth: "95%",
  },
  position: "relative",
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
  width: "100%",
} as const;

export const ModalStyled = styled("div", {
  display: "inline-flex",
  height: "100%",
  verticalAlign: "middle",
});

export const ModalTriggerStyled = styled("div", {
  cursor: "pointer",
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const ModalOverlayStyled = styled("div", {
  ...overlayBase,
  zIndex: "$modal",
});

export const ModalGroupStyled = styled("div", {
  ...dialogContainerBase,
  display: "flex",
  flexDirection: "column",
  maxWidth: "600px",
  padding: 0,
  variants: {
    ...dialogContainerBase.variants,
    small: {
      true: {
        maxWidth: "280px",
      },
    },
  },
});

export const ModalHeaderStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$background",
  borderBottom: "1px solid $borderLight",
  display: "flex",
  flexShrink: 0,
  justifyContent: "space-between",
  padding: "$medium",
});

export const ModalContentStyled = styled("div", {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  flex: 1,
  overflowX: "hidden",
  overflowY: "auto",
  padding: "$medium",
});
