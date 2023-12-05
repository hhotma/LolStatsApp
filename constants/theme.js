const COLORS = {
  background: "#151722",
  lighter: "#434168",
  gray: "#B6BBC4",
  lightWhite: "#F0ECE5",
  win: "#256986",
  lose: "#A23C3C",
  mythic: "#D68814"
};

const FONT = {
  black: "Inter-Black",
  bold: "Inter-Bold",
  extraBold: "Inter-ExtraBold",
  extraLight: "Inter-ExtraLight",
  light: "Inter-Light",
  medium: "Inter-Medium",
  regular: "Inter-Regular",
  semiBold: "Inter-SemiBold",
  thin: "Inter-Thin"
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
