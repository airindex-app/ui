import { styled } from "../../stitches.config";

const highlight = {
  borderRadius: "calc($small / 2)",
  padding: "calc($smallest / 2) $smaller",
};
const link = {
  "&:hover": {
    backgroundColor: "$default",

    borderRadius: "$small",

    darkModeSpec: {
      backgroundColor: "$border",
    },
  },

  borderBottom: "1px solid $border",
  cursor: "pointer",
  margin: 0,
  transition: "$default",
};

export const TextSizes = {
  a: {
    marginBottom: 0,
  },
  h1: {
    fontSize: "$h1",
    lineHeight: "$small",
    marginBottom: "$medium",
  },
  h2: {
    fontSize: "$h2",
    lineHeight: "$small",
    marginBottom: "$medium",
  },
  h3: {
    fontSize: "$h3",
    lineHeight: "$small",
    marginBottom: "$medium",
  },
  h4: {
    fontSize: "$h4",
    lineHeight: "$small",
    marginBottom: "$medium",
  },
  h5: {
    fontSize: "$h5",
    lineHeight: "$default",
    marginBottom: "$small",
  },
  h6: {
    fontSize: "$h6",
    lineHeight: "$default",
    marginBottom: "$small",
  },
  label: {
    color: "$accent",
    display: "block",
    fontSize: "$small",
    lineHeight: "$default",
    marginBottom: "$smaller",
  },
  li: {
    fontSize: "$default",
    lineHeight: "$default",
    marginBottom: "$smaller",
  },
  ol: {
    listStylePosition: "inside",
    marginBottom: 0,
    paddingLeft: "$small",
  },
  p: {
    fontFamily: "$default",
    fontSize: "$default",
    lineHeight: "$default",
    marginBottom: "$small",
  },
  small: {
    display: "block",
    fontSize: "$small",
    lineHeight: "$default",
    marginBottom: "$smaller",
  },
  span: {
    fontSize: "inherit",
    fontWeight: "inherit",
    lineHeight: "inherit",
  },
  strong: {
    fontSize: "inherit",
    fontWeight: "bold",
    lineHeight: "inherit",
  },
  ul: {
    listStylePosition: "inside",
    marginBottom: 0,
    paddingLeft: "$small",
  },
};

export const TextStyled = styled("div", {
  "&:last-child": {
    marginBottom: "0 !important",
  },

  variants: {
    accent: {
      true: {
        color: "$accent",
      },
    },
    highlight: {
      alternate: {
        ...highlight,
        backgroundColor: "$background",
      },
      blue: {
        ...highlight,
        backgroundColor: "$blueBackground",
      },
      default: {
        ...highlight,
        backgroundColor: "$default",
        darkModeSpec: {
          backgroundColor: "$defaultHover",
        },
      },
      green: {
        ...highlight,
        backgroundColor: "$greenBackground",
      },
      orange: {
        ...highlight,
        backgroundColor: "$orangeBackground",
      },
      purple: {
        ...highlight,
        backgroundColor: "$purpleBackground",
      },
      red: {
        ...highlight,
        backgroundColor: "$redBackground",
      },
    },
    inline: {
      false: {
        verticalAlign: "baseline !important",
      },
      true: {
        alignSelf: "center",
        display: "inline-flex !important",
        marginBottom: "0 !important",
        verticalAlign: "middle",
      },
    },
    link: {
      alternate: {
        ...link,
        "&:hover": {
          backgroundColor: "$defaultHover",
        },
      },
      blog: {
        ...link,
        borderColor: "$text",
      },
      default: {
        ...link,
      },
      minimal: {
        ...link,
        borderColor: "transparent",
      },
    },
    size: TextSizes,
  },

  verticalAlign: "baseline",
});

export default TextStyled;
