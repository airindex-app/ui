import { styled } from "../../stitches.config";

export const FormStyled = styled("form", {
  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: "$light",
      },
    },
  },
  width: "100%",
});
