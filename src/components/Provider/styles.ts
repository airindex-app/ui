import { darkTheme, globalCss, styled, theme } from "../../stitches.config";

export const ProviderStyled = styled("main", {
  minHeight: "100vh",
  position: "relative",
});

export const ToastStyled = styled("div", {
  "&:hover": {
    opacity: "$default",
  },
  cursor: "pointer",
  marginBottom: "$small",
  maxWidth: "600px",
  padding: "$smaller $small",
  phone: {
    "&:last-child": {
      marginBottom: "$small",
    },
    margin: "0 auto",
    marginBottom: "0",
    marginTop: "$small",
    maxWidth: "90%",
    textAlign: "center",
  },
  pointerEvents: "all",
  width: "fit-content",
});

// Shared disabled state
const disabledStyles = {
  cursor: "not-allowed",
  opacity: theme.opacities.light,
} as const;

export const providerReset = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },

  "::selection": {
    backgroundColor: theme.colors.text,
    color: theme.colors.background,
  },

  "@import":
    "url('https://fonts.googleapis.com/css2?family=Archivo:wght@600&family=DM+Sans:wght@400;600&display=swap')",

  "a, a:visited, a:active, a:hover": {
    color: "inherit",
    textDecoration: "none",
    WebkitTapHighlightColor: "transparent",
  },

  body: {
    [`.${darkTheme}`]: {
      backgroundColor: "$background",
      color: "$text",
      colorScheme: "dark",
    },
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    fontFamily: theme.fonts.default,
    fontFeatureSettings: '"zero" 1, "tnum" 1, "calt" 1, "liga" 1, "case" 1',
    fontOpticalSizing: "auto",
    fontSize: theme.fontSizes.default,
    fontWeight: "normal",
    letterSpacing: "0.015em",
    lineHeight: theme.lineHeights.default,
    margin: 0,
    minHeight: "100vh",
    MozOsxFontSmoothing: "grayscale",
    overflowX: "hidden",
    padding: 0,
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
  },

  "button, input, textarea, select": {
    "&:disabled": disabledStyles,
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: "inherit",
  },

  "h1, h2, h3, h4, h5, h6": {
    fontFeatureSettings: '"zero" 1, "tnum" 1, "calt" 1, "liga" 1, "case" 1',
    fontWeight: "bold",
    lineHeight: theme.lineHeights.small,
    margin: 0,
    textRendering: "optimizeLegibility",
  },

  html: {
    fontSize: "100%",
    scrollBehavior: "smooth",
  },

  "img, svg": {
    display: "block",
    maxWidth: "100%",
  },

  "input, textarea, select": {
    cursor: "text",
  },

  p: {
    lineHeight: theme.lineHeights.default,
    margin: 0,
  },

  svg: {
    alignSelf: "center",
    verticalAlign: "middle",
  },

  "ul, ol": {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
});

export default ProviderStyled;
