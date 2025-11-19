import { styled } from "../../stoop.config";

export const FormStyled = styled(
  "form",
  {
    width: "100%",
  },
  {
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: "$light",
      },
    },
  },
);
