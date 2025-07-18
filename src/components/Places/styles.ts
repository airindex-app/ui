import { fadeIn, fadeOut, styled } from "../../stitches.config";

export const PlacesStyled = styled("div", {
  display: "block",
  position: "relative",
  width: "100%",
});

export const PlacesDropdownStyled = styled("div", {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  backgroundColor: "$surface",
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

export const PlacesItemStyled = styled("div", {
  "&:hover": {
    backgroundColor: "$surfaceHover",
  },
  cursor: "pointer",
  margin: "$smallest $smaller",
  padding: "$smaller $small",
  transition: "$default",
});

export const PlacesEmptyStyled = styled("div", {
  color: "$text",
  fontSize: "$small",
  opacity: "$light",
  padding: "$medium",
  textAlign: "center",
});

export default PlacesStyled;
