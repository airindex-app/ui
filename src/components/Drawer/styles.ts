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
  alignItems: "flex-end",
  backdropFilter: "blur(2px)",
  backgroundColor: "$overlay",
  display: "flex",
  dynamicViewport: { property: "height", unit: "vh", value: "100" },
  inset: 0,
  justifyContent: "center",
  overflow: "hidden",
  pointerEvents: "auto",
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
  display: "flex",
  dynamicViewport: { property: "maxHeight", unit: "vh", value: "70" },
  flexDirection: "column",
  minHeight: "30vh",
  overflow: "hidden",
  phone: {
    dynamicViewport: { property: "maxHeight", unit: "vh", value: "90" },
    minHeight: "50vh",
  },
  position: "relative",
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
