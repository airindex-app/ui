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
    background: "#f3f3f1",
    border: "rgba(160, 160, 155, 0.4)",
    borderLight: "rgba(160, 160, 155, 0.2)",
    glass: "rgba(255, 255, 255, 0.8)",
    overlay: "rgba(0, 0, 0, 0.25)",
    surface: "#FFFFFF",
    surfaceHover: "rgba(160, 160, 155, 0.2)",
    surfaceLight: "rgba(160, 160, 155, 0.1)",
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
    h1: "clamp(2rem, 1.6rem + 0.8vw, 2.4rem)",
    h2: "clamp(1.75rem, 1.4rem + 0.7vw, 2.2rem)",
    h3: "clamp(1.5rem, 1.2rem + 0.6vw, 2rem)",
    h4: "clamp(1.375rem, 1.1rem + 0.5vw, 1.6rem)",
    h5: "clamp(1.25rem, 1rem + 0.4vw, 1.4rem)",
    h6: "clamp(1.125rem, 0.95rem + 0.3vw, 1.2rem)",
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
    default: "all 0.420s ease",
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
    glass: "rgba(0, 0, 0, 0.6)",
    overlay: "rgba(255, 255, 255, 0.1)",
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
    // Dynamic viewport utilities with modern fallback
    dynamicViewport: (config: TDynamicViewportConfig): Record<string, unknown> => {
      const { property, value, unit } = config;

      // Determine axis for feature query based on unit
      const isHeight =
        unit.endsWith("vh") || unit.endsWith("dvh") || unit.endsWith("svh") || unit.endsWith("lvh");
      const featureProp = isHeight ? "height" : "width";
      const dynamicViewportUnit = isHeight ? "dvh" : "dvw";
      const classicUnit = isHeight ? "vh" : "vw";

      return {
        // Classic viewport units as fallback
        [property]: `${value}${classicUnit}`,
        // Use dynamic viewport when supported (updates as UI chrome changes)
        [`@supports (${featureProp}: 100${dynamicViewportUnit})`]: {
          [property]: `${value}${dynamicViewportUnit}`,
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
    reduceMotion: (value: unknown): Record<string, unknown> => ({
      "@media (prefers-reduced-motion: reduce)": value,
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
    transform: "scale(0.95)",
  },
  to: {
    opacity: 1,
    transform: "scale(1)",
  },
});

export const slideOutScale = keyframes({
  from: {
    opacity: 1,
    transform: "scale(1)",
  },
  to: {
    opacity: 0,
    transform: "scale(0.95)",
  },
});

// Bottom slide animations (for mobile modal)
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

// Sidebar slide animations (from right)
export const slideInRight = keyframes({
  from: {
    transform: "translateX(100%)",
  },
  to: {
    transform: "translateX(0)",
  },
});

export const slideOutRight = keyframes({
  from: {
    transform: "translateX(0)",
  },
  to: {
    transform: "translateX(100%)",
  },
});

export const pulse = keyframes({
  // scale and opacity from 0.7 to 1.3 back to 1
  "0%": {
    opacity: 1,
    transform: "scale(1)",
  },
  "50%": {
    opacity: 0.75,
    transform: "scale(1.3)",
  },
  "100%": {
    opacity: 1,
    transform: "scale(1)",
  },
});

// Subtle vertical fade+lift used for small surfaces like popovers, lists
export const fadeInUp = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(4px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const fadeOutDown = keyframes({
  from: {
    opacity: 1,
    transform: "translateY(0)",
  },
  to: {
    opacity: 0,
    transform: "translateY(4px)",
  },
});
