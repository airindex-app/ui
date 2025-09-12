import { fadeIn, fadeOut, slideInScale, slideOutScale, styled } from "../../stitches.config";

const overlayBase = {
  backdropFilter: "blur(2px)",
  backgroundColor: "$overlay",
  dynamicViewport: { property: "height", unit: "vh", value: "100" },
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

const dialogContainerBase = {
  backgroundColor: "$background",
  dynamicViewport: { property: "maxHeight", unit: "vh", value: "80" },
  left: "50%",
  minHeight: "auto",
  phone: {
    dynamicViewport: { property: "maxHeight", unit: "vh", value: "85" },
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
