import { fadeIn, fadeOut, slideInUp, slideOutDown, styled } from "../../stitches.config";
import { TextStyled } from "../Text/styles";

export const DialogStyled = styled("div", {
  display: "inline-block",
  position: "relative",
  verticalAlign: "middle",
});

export const DialogTriggerStyled = styled("div", {
  cursor: "pointer",
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const DialogOverlayStyled = styled("div", {
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

export const DialogCoreStyled = styled("div", {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  backgroundColor: "$surface",
  bottom: 0,
  left: 0,
  maxHeight: "70vh",
  minHeight: "30vh",
  overflowX: "hidden",
  overflowY: "auto",
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

export const DialogHeaderStyled = styled("div", {
  [`& ${TextStyled}`]: {
    marginBottom: "0 !important",
    verticalAlign: "middle",
  },
  alignItems: "center",
  backgroundColor: "$surface",
  borderBottom: "1px solid $borderLight",
  display: "flex",
  justifyContent: "space-between",
  padding: "$medium",
  position: "sticky",
  top: 0,
  zIndex: "$special",
});

export const DialogContentStyled = styled("div", {
  margin: "0 auto",
  maxWidth: "600px",
  padding: "$large $medium",
  paddingBottom: "calc($medium + env(safe-area-inset-bottom))",
  width: "100%",
});
