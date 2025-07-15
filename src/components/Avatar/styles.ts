import { styled } from "../../stitches.config";
import { ImageStyled } from "../Image/styles";

export const AvatarStyled = styled("div", {
  [`& ${ImageStyled}`]: {
    height: "100%",
    img: {
      objectFit: "cover !important",
    },
    width: "100%",
  },
  alignSelf: "center",
  border: "1px solid $border",
  display: "inline-flex",
  height: "100%",
  justifyContent: "center",
  span: {
    alignItems: "center",
    color: "$text",
    display: "flex",
    fontFamily: "$default",
    fontSize: "$small",
    fontWeight: 600,
    justifyContent: "center",
    overflow: "hidden",
    textTransform: "uppercase",
  },

  variants: {
    theme: {
      default: {
        backgroundColor: "$surface",
      },
      yellow: {
        backgroundColor: "$yellow",
      },
    },
  },

  verticalAlign: "middle",
});
