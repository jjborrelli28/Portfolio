import { createStitches, createTheme } from "@stitches/react";
import { globalStylesObject } from "./globalStylesObject";

export const BREAKPOINTS = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1400,
} as const;

export const MQ = {
  xs: `(min-width: ${BREAKPOINTS.xs}px)`,
  sm: `(min-width: ${BREAKPOINTS.sm}px)`,
  md: `(min-width: ${BREAKPOINTS.md}px)`,
  lg: `(min-width: ${BREAKPOINTS.lg}px)`,
  xl: `(min-width: ${BREAKPOINTS.xl}px)`,
} as const;

const media = {
  bp1: `${MQ.xs}`,
  bp2: `${MQ.sm}`,
  bp3: `${MQ.md}`,
  bp4: `${MQ.lg}`,
  bp5: `${MQ.xl}`,
};

const darkTheme = {
  bgPrimary: "#000000",
  bgSecondary: "#FFFFFF",
  bgGradientPrimary:
    "circle, #311847, #301236, #2a0f27, #220c1b, #190710, #190710, #190710, #190710, #220c1b, #2a0f27, #301236, #311847",
  bgHeader: "rgba(0,0,0,0.5)",
  bgSectionPrimary: "transparent",
  bgSectionSecondary: "rgba(0,0,0,0.5)",
  bgCard: "rgba(255,255,255,0.1)",
  fontPrimary: "#EEEEEE",
  fontPrimaryHover: "#FFFFFF",
  fontSecondary: "#A255E8",
  fontTertiary: "#DEBBF7",
  line: "#FF357A",
  white: "#EEEEEE",
  lightGray: "#555555",
  black: "#222222",
  success: "#28A745",
  warning: "#FFC107",
  error: "#DC3545",
  info: "#17A2B8",
};

const lightTheme = {
  bgPrimary: "#FFFFFF",
  bgSecondary: "#C6C6C6",
  bgGradientPrimary:
    "circle, #efddfb, #f0e4fd, #f3eafe, #f5f1ff, #f9f7ff, #f9f7ff, #f9f7ff, #f9f7ff, #f5f1ff, #f3eafe, #f0e4fd, #efddfb",
  bgHeader: "rgba(255,255,255,0.5)",
  bgSectionPrimary: "transparent",
  bgSectionSecondary: "rgba(255,255,255,0.5)",
  bgCard: "rgba(0,0,0,0.1)",
  fontPrimary: "#000000",
  fontPrimaryHover: "#222222",
  fontSecondary: "#7327B8",
  fontTertiary: "#9133E9",
  line: "#FF357A",
  white: "#EEEEEE",
  lightGray: "#AAAAAA",
  black: "#222222",
  success: "#28A745",
  warning: "#FFC107",
  error: "#DC3545",
  info: "#17A2B8",
};

const theme = {
  colors: lightTheme,
  shadows: lightTheme,
  fontFamilies: {
    main: "Raleway, sans-serif",
  },
  fontWeights: {
    1: "300",
    2: "400",
    3: "500",
    4: "600",
    5: "700",
  },
  fontSizes: {
    1: "0.5rem",
    2: "0.625rem",
    3: "0.75rem",
    4: "0.875rem",
    5: "1rem",
    6: "1.125rem",
    7: "1.25rem",
    8: "1.375rem",
    9: "1.5rem",
    10: "1.625rem",
    11: "1.75rem",
    12: "1.875rem",
    13: "2rem",
    14: "2.25rem",
    15: "2.5rem",
    16: "2.75rem",
    17: "3rem",
    18: "3.25rem",
    19: "3.5rem",
    20: "3.75rem",
    21: "4rem",
    22: "4.5rem",
    23: "5rem",
    24: "6rem",
  },
  sizes: {
    headerMobile: "93px",
    headerDesktop: "88px",
  },
};

export const { styled, css, keyframes, getCssText, globalCss } = createStitches(
  {
    media: media,
    theme: theme,
    utils: {
      // Abbreviated margin properties
      m: (value: string) => ({
        margin: value,
      }),
      mt: (value: string) => ({
        marginTop: value,
      }),
      mr: (value: string) => ({
        marginRight: value,
      }),
      mb: (value: string) => ({
        marginBottom: value,
      }),
      ml: (value: string) => ({
        marginLeft: value,
      }),
      mx: (value: string) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: string) => ({
        marginTop: value,
        marginBottom: value,
      }),

      // Abbreviated padding properties
      p: (value: string) => ({
        padding: value,
      }),
      pt: (value: string) => ({
        paddingTop: value,
      }),
      pr: (value: string) => ({
        paddingRight: value,
      }),
      pb: (value: string) => ({
        paddingBottom: value,
      }),
      pl: (value: string) => ({
        paddingLeft: value,
      }),
      px: (value: string) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: string) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      // Abbreviated heigth/width properties
      w: (value: string) => ({
        width: value,
      }),
      minw: (value: string) => ({
        minWidth: value,
      }),
      maxw: (value: string) => ({
        maxWidth: value,
      }),
      h: (value: string) => ({
        height: value,
      }),
      minh: (value: string) => ({
        minHeight: value,
      }),
      maxh: (value: string) => ({
        maxHeight: value,
      }),

      // Abbreviated border properties
      b: (value: string) => ({
        border: value,
      }),
      bt: (value: string) => ({
        borderTop: value,
      }),
      bb: (value: string) => ({
        borderBottom: value,
      }),
      bl: (value: string) => ({
        borderLeft: value,
      }),
      br: (value: string) => ({
        borderRight: value,
      }),
      bx: (value: string) => ({
        borderLeft: value,
        borderRight: value,
      }),
      by: (value: string) => ({
        borderTop: value,
        borderBottom: value,
      }),

      // Abbreviated border radius property
      bra: (value: string) => ({
        borderRadius: value,
      }),

      // A property to apply linear gradient
      linearGradient: (value: string) => ({
        backgroundImage: `linear-gradient(${value})`,
      }),

      // A property to apply radial gradient
      radialGradient: (value: string) => ({
        backgroundImage: `radial-gradient(${value})`,
      }),
    },
  }
);

export const darkThemeClass = createTheme({
  colors: darkTheme,
  shadows: darkTheme,
}).toString();

export const globalStyles = globalCss(globalStylesObject);
