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
    1: "0.5rem", // 8px
    2: "0.625rem", // 10px
    3: "0.75rem", // 12px
    4: "0.875rem", // 14px
    5: "1rem", // 16px
    6: "1.125rem", // 18px
    7: "1.25rem", // 20px
    8: "1.375rem", // 22px
    9: "1.5rem", // 24px
    10: "1.625rem", // 26px
    11: "1.75rem", // 28px
    12: "1.875rem", // 30px
    13: "2rem", // 32px
    14: "2.25rem", // 36px
    15: "2.5rem", // 40px
    16: "2.75rem", // 44px
    17: "3rem", // 48px
    18: "3.25rem", // 52px
    19: "3.5rem", // 56px
    20: "3.75rem", // 60px
    21: "4rem", // 64px
    22: "4.5rem", // 72px
    23: "5rem", // 80px
    24: "6rem", // 96px
  },
  lineHeights: {
    1: "10px",
    2: "12px",
    3: "16px",
    4: "18px",
    5: "20px",
    6: "22px",
    7: "24px",
    8: "28px",
    9: "30px",
    10: "32px",
    11: "34px",
    12: "36px",
    13: "40px",
    14: "44px",
    15: "48px",
    16: "54px",
    17: "58px",
    18: "64px",
    19: "68px",
    20: "72px",
    21: "78px",
    22: "88px",
    23: "96px",
    24: "116px",
  },
  sizes: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    13: "3.5rem",
    14: "4rem",
    15: "4.5rem",
    16: "5rem",
    17: "6rem",
    quarter: "25%",
    half: "50%",
    threeQuarters: "75%",
    full: "100%",
    headerMobile: "93px",
    headerDesktop: "88px",
  },
  space: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    13: "3.5rem",
    14: "4rem",
    15: "4.5rem",
    16: "5rem",
    17: "6rem",
    quarter: "25%",
    half: "50%",
    threeQuarters: "75%",
    full: "100%",
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
