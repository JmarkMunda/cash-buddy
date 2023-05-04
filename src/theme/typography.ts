import { getFontSize } from "../utils/utils";

const typography = {
  letterSpacings: {
    xs: "-0.05em",
    sm: "-0.025em",
    md: 0,
    lg: "0.025em",
    xl: "0.05em",
    "2xl": "0.1em",
  },
  lineHeights: {
    "2xs": "1em",
    xs: "1.125em",
    sm: "1.25em",
    md: "1.375em",
    lg: "1.5em",
    xl: "1.75em",
    "2xl": "2em",
    "3xl": "2.5em",
    "4xl": "3em",
    "5xl": "4em",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
    extraBlack: 950,
  },
  fonts: {
    heading: undefined,
    body: undefined,
    mono: undefined,
  },
  fontSizes: {
    "2xs": getFontSize(10),
    xs: getFontSize(12),
    sm: getFontSize(14),
    md: getFontSize(16),
    lg: getFontSize(18),
    xl: getFontSize(20),
    "2xl": getFontSize(24),
    "3xl": getFontSize(30),
    "4xl": getFontSize(36),
    "5xl": getFontSize(48),
    "6xl": getFontSize(60),
    "7xl": getFontSize(72),
    "8xl": getFontSize(96),
    "9xl": getFontSize(128),
  },
};

export type ITypography = typeof typography;
export type IFontSize = keyof typeof typography.fontSizes;
export type ILetterSpacing = keyof typeof typography.letterSpacings;
export type ILineHeight = keyof typeof typography.lineHeights;
export type IFontWeight = keyof typeof typography.fontWeights;

export interface IFont {
  heading?: string;
  body?: string;
  mono?: string;
}

export default typography;
