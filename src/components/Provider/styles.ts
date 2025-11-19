import { globalCss, styled } from "../../stoop.config";

export const ProviderStyled = styled("main", {
  position: "relative",
});

export const ToastStyled = styled("div", {
  "&:hover": {
    opacity: "$default",
  },
  backdropFilter: "blur(8px)",
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

export const providerReset = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    marginBlock: 0,
    padding: 0,
    paddingBlock: 0,
  },

  "*:focus": {
    outline: "$yellow",
  },

  "::selection": {
    backgroundColor: "$text",
    color: "$background",
  },

  "@import":
    "url('https://fonts.googleapis.com/css2?family=Archivo:wght@600&family=DM+Sans:wght@400;600&display=swap')",

  "a, a:visited, a:active, a:hover": {
    color: "inherit",
    textDecoration: "none",
    WebkitTapHighlightColor: "transparent",
  },

  body: {
    "[data-theme='dark'] &": {
      colorScheme: "dark",
    },

    backgroundColor: "$background",
    color: "$text",
    fontFamily: "$default",
    fontFeatureSettings: '"zero" 1, "tnum" 1, "calt" 1, "liga" 1, "case" 1',
    fontOpticalSizing: "auto",
    fontSize: "$default",
    fontWeight: 400,
    height: "100%",
    letterSpacing: "0.015em",
    lineHeight: "$default",
    margin: 0,
    minHeight: "100vh",
    MozOsxFontSmoothing: "grayscale",
    overflowX: "hidden",
    padding: 0,
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
  },

  "button, input, textarea, select": {
    "&:disabled": {
      cursor: "not-allowed",
      opacity: "$light",
    },
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: "inherit",
  },

  "h1, h2, h3, h4, h5, h6": {
    fontFeatureSettings: '"zero" 1, "tnum" 1, "calt" 1, "liga" 1, "case" 1',
    fontWeight: 600,
    lineHeight: "$small",
    margin: 0,
    textRendering: "optimizeLegibility",
  },

  html: {
    boxSizing: "border-box",
    fontSize: "100%",
    height: "100%",
    margin: 0,
    marginBlock: 0,
    padding: 0,
    paddingBlock: 0,
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
    lineHeight: "$default",
    margin: 0,
  },

  reduceMotion: {
    "*:not([data-allow-motion])": {
      animation: "none !important",
      scrollBehavior: "auto !important",
      transition: "none !important",
    },
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

// Export the globalCss function, but DON'T call it here
// It will be called in Provider/index.tsx before React renders

export default ProviderStyled;
