const palette = {
  skyBlue: "#A8D0E6",
  navyBlue: "#374785",

  brightOrange: "#F76C6C",

  lightGray: "#EEE2DC",
  darkGray: "#A9A9A9",
  white: "#F3F0EE",

  red: "#D64161FF",
  green: "#435E55FF",
};

export const theme = {
  colors: {
    primary: palette.skyBlue,
    secondary: palette.navyBlue,

    highlight: palette.brightOrange,

    white: palette.white,
    gray: palette.lightGray,
    dimmed: palette.darkGray,

    good: palette.green,
    bad: palette.red,
  },

  spacing: {
    xs: 2,
    sm: 4,
    md: 16,
    lg: 36,
    xl: 72,
  },

  fontSize: {
    xs: 6,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 28,
    xxl: 48,
  },

  dim: {
    barHeight: 44,
    buttonHeight: 32,
    buttonWidth: 100,
  },
};
