import { fadeIn, fadeOut, slideInUp, slideOutDown, styled } from "../../stitches.config";

export const DrawerStyled = styled("div", {
  display: "inline-block",
  position: "relative",
  verticalAlign: "middle",
});

export const DrawerTriggerStyled = styled("div", {
  cursor: "pointer",
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const DrawerOverlayStyled = styled("div", {
  backdropFilter: "blur(2px)",
  backgroundColor: "$overlay",
  inset: 0,
  position: "fixed",
  transition: "$default",
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} 0.2s ease-in-out`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${fadeIn} 0.2s ease-in-out`,
        animationFillMode: "forwards",
      },
    },
  },
  zIndex: "$modal",
});

export const DrawerCoreStyled = styled("div", {
  backgroundColor: "$background",
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  left: 0,
  maxHeight: "70vh",
  minHeight: "30vh",
  phone: {
    maxHeight: "90vh",
    minHeight: "50vh",
  },
  position: "fixed",
  right: 0,
  transition: "$default",
  variants: {
    animation: {
      false: {
        animation: `${slideOutDown} 0.2s ease-in-out`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${slideInUp} 0.2s ease-in-out`,
        animationFillMode: "forwards",
      },
    },
  },
  width: "100%",
});

export const DrawerHeaderStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$background",
  borderBottom: "1px solid $borderLight",
  display: "flex",
  flexShrink: 0,
  justifyContent: "space-between",
  padding: "$medium",
});

export const DrawerContentStyled = styled("div", {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  flex: 1,
  margin: "0 auto",
  maxWidth: "600px",
  overflowX: "hidden",
  overflowY: "auto",
  padding: "$large $medium",
  paddingBottom: "calc($medium + env(safe-area-inset-bottom))",
  width: "100%",
});
