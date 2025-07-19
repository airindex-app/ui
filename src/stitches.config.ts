/* eslint-disable perfectionist/sort-objects */
import { createStitches, createTheme, defaultThemeMap } from "@stitches/react";

import type {
  TBreakpointsConfig,
  TSpacingConfig,
  TThemeConfig,
  TDynamicViewportConfig,
  TStitchesUtils,
  TBreakpointName,
} from "./types/stitches";

export const breakpoints: TBreakpointsConfig = {
  desktop: "@media only screen and (max-width: 2200px)",
  desktopX: "@media only screen and (min-width: 1401px) and (max-width: 2200px)",
  laptop: "@media only screen and (max-width: 1400px)",
  laptopX: "@media only screen and (min-width: 1101px) and (max-width: 1400px)",
  phone: "@media only screen and (max-width: 800px)",
  phoneX: "@media only screen and (min-width: 376px) and (max-width: 800px)",
  special: {
    micro: "@media only screen and (max-width: 375px)",
    print: "@media print",
    retina:
      "@media only screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 2dppx)",
  },
  tablet: "@media only screen and (max-width: 1100px)",
  tabletX: "@media only screen and (min-width: 801px) and (max-width: 1100px)",
  wide: "@media only screen and (min-width: 2201px)",
};

export const spacings: TSpacingConfig = {
  auto: "auto",
  large: "40px",
  larger: "60px",
  largest: "100px",
  medium: "20px",
  none: "0px",
  small: "10px",
  smaller: "5px",
  smallest: "2.5px",
};

const defaultTheme: TThemeConfig = {
  colors: {
    background: "#f6f6f4",
    border: "rgba(160, 160, 155, 0.35)",
    borderLight: "rgba(160, 160, 155, 0.15)",
    overlay: "rgba(15, 8, 18, 0.2)",
    surface: "#FFFFFF",
    surfaceHover: "rgba(160, 160, 155, 0.16)",
    surfaceLight: "rgba(160, 160, 155, 0.08)",
    text: "#141415",
    yellow: "#ffcd1a",
    yellowLight: "#FFE792",
  },
  fonts: {
    default: "DM Sans, apple-system, sans-serif",
    heading: "Archivo, apple-system, sans-serif",
  },
  fontSizes: {
    default: "clamp(0.9375rem, 0.875rem + 0.5vw, 1.125rem)",
    h1: "clamp(2rem, 1.75rem + 1vw, 2.75rem)",
    h2: "clamp(1.75rem, 1.5rem + 0.75vw, 2.25rem)",
    h3: "clamp(1.5rem, 1.25rem + 0.75vw, 2rem)",
    h4: "clamp(1.375rem, 1.25rem + 0.5vw, 1.625rem)",
    h5: "clamp(1.25rem, 1.125rem + 0.5vw, 1.375rem)",
    h6: "clamp(1.125rem, 1.0625rem + 0.25vw, 1.25rem)",
    micro: "clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)",
    small: "clamp(0.875rem, 0.8125rem + 0.3125vw, 1rem)",
  },
  lineHeights: {
    default: "1.5",
    small: "1.2",
  },
  opacities: {
    default: 0.75,
    light: 0.55,
  },

  sizes: spacings,
  space: spacings,
  transitions: {
    default: "all 0.35s ease",
  },
  zIndices: {
    menu: 999,
    modal: 997,
    popover: 996,
    select: 995,
    special: 100,
    table: 100,
    toast: 998,
  },
};

const darkThemeConfig: Partial<TThemeConfig> = {
  colors: {
    background: "#0f0f0f",
    border: "rgba(255, 255, 255, 0.2)",
    borderLight: "rgba(255, 255, 255, 0.1)",
    overlay: "rgba(0, 0, 0, 0.7)",
    surface: "#222222",
    surfaceHover: "rgba(255, 255, 255, 0.2)",
    surfaceLight: "rgba(255, 255, 255, 0.1)",
    text: "#FFFFFF",
    yellow: "#ffcd1a",
    yellowLight: "#64521E",
  },
};

// Create stitches instance first
export const { css, getCssText, globalCss, keyframes, styled, theme } = createStitches({
  theme: defaultTheme,
  themeMap: { ...defaultThemeMap, opacity: "opacities" },
  utils: {
    // Theme utilities
    darkOnly: (value: unknown): Record<string, unknown> => ({
      // eslint-disable-next-line no-use-before-define
      [`.${darkTheme} &`]: value,
    }),
    lightOnly: (value: unknown): Record<string, unknown> => ({
      "@media (prefers-color-scheme: light)": value,
    }),
    wide: (value: unknown): Record<string, unknown> => ({
      [breakpoints.wide]: value,
    }),
    desktop: (value: unknown): Record<string, unknown> => ({
      [breakpoints.desktop]: value,
    }),
    desktopX: (value: unknown): Record<string, unknown> => ({
      [breakpoints.desktopX]: value,
    }),
    laptop: (value: unknown): Record<string, unknown> => ({
      [breakpoints.laptop]: value,
    }),
    laptopX: (value: unknown): Record<string, unknown> => ({
      [breakpoints.laptopX]: value,
    }),
    tablet: (value: unknown): Record<string, unknown> => ({
      [breakpoints.tablet]: value,
    }),
    tabletX: (value: unknown): Record<string, unknown> => ({
      [breakpoints.tabletX]: value,
    }),
    phone: (value: unknown): Record<string, unknown> => ({
      [breakpoints.phone]: value,
    }),
    phoneX: (value: unknown): Record<string, unknown> => ({
      [breakpoints.phoneX]: value,
    }),
    // Dynamic viewport utilities with fallback
    dynamicViewport: (config: TDynamicViewportConfig): Record<string, unknown> => {
      const { property, value, unit } = config;
      const dynamicUnit = unit.replace("v", "dv") as "dvh" | "dvw" | "dvi" | "dvb";

      // Convert camelCase to kebab-case for @supports query
      const kebabProperty = property.replace(/([A-Z])/g, "-$1").toLowerCase();

      return {
        [property]: `${value}${unit}`,
        [`@supports (${kebabProperty}: 100${dynamicUnit})`]: {
          [property]: `${value}${dynamicUnit}`,
        },
      };
    },
    // Special breakpoints
    micro: (value: unknown): Record<string, unknown> => ({
      [breakpoints.special.micro]: value,
    }),
    retina: (value: unknown): Record<string, unknown> => ({
      [breakpoints.special.retina]: value,
    }),
    print: (value: unknown): Record<string, unknown> => ({
      [breakpoints.special.print]: value,
    }),
    // Visibility utilities
    hidden: (value: TBreakpointName): Record<string, unknown> => ({
      [breakpoints[value]]: {
        display: "none !important",
      },
    }),
    hiddenInline: (value: TBreakpointName): Record<string, unknown> => ({
      [breakpoints[value]]: {
        display: "none !important",
      },
      display: "inline-block !important",
    }),
    hiddenSpecial: (value: "micro" | "retina" | "print"): Record<string, unknown> => ({
      [breakpoints.special[value]]: {
        display: "none !important",
      },
    }),
    visible: (value: TBreakpointName): Record<string, unknown> => ({
      [breakpoints[value]]: {
        display: "block !important",
      },
      display: "none",
    }),
    visibleInline: (value: TBreakpointName): Record<string, unknown> => ({
      [breakpoints[value]]: {
        display: "inline-block !important",
      },
      display: "none",
    }),
    visibleSpecial: (value: "micro" | "retina" | "print"): Record<string, unknown> => ({
      [breakpoints.special[value]]: {
        display: "block !important",
      },
      display: "none",
    }),
  } satisfies TStitchesUtils,
});

// Create dark theme after stitches instance
export const darkTheme = createTheme(darkThemeConfig);

// Export keyframes with proper return types
export const fadeIn = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

export const fadeOut = keyframes({
  "0%": {
    opacity: 1,
  },
  "100%": {
    opacity: 0,
  },
});

// Modal/Menu animations
export const slideInScale = keyframes({
  from: {
    opacity: 0,
    transform: "translate(-50%, -50%) scale(0.95)",
  },
  to: {
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)",
  },
});

export const slideOutScale = keyframes({
  from: {
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)",
  },
  to: {
    opacity: 0,
    transform: "translate(-50%, -50%) scale(0.95)",
  },
});

// Drawer slide animations
export const slideInUp = keyframes({
  from: {
    transform: "translateY(100%)",
  },
  to: {
    transform: "translateY(0)",
  },
});

export const slideOutDown = keyframes({
  from: {
    transform: "translateY(0)",
  },
  to: {
    transform: "translateY(100%)",
  },
});
