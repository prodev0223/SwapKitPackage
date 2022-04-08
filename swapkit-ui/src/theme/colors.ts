import { Colors } from "./types";

export const baseColors = {
  failure: "#f95b78",
  primary: "#FEBF32",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#5F97FF",
  success: "#febf32",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#FEBF32",
  background: "#08060B",
  backgroundDisabled: "#222531",
  backgroundAlt: "#17171A",
  backgroundAlt2: "rgba(39, 38, 44, 0.7)",
  cardBorder: "#1a1b21",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#141416",
  invertedContrast: "#222b3c",
  input: "#1d1e26",
  inputSecondary: "#131418",
  primaryDark: "#0098A1",
  tertiary: "#222531",
  text: "#F4EEFF",
  textDisabled: "#4C516B",
  textSubtle: "#ABAFC4",
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #17171a 0%,#222431 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #17171a 0%, #17171a 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  }
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#FEBF32",
  background: "#08060B",
  backgroundDisabled: "#222531",
  backgroundAlt: "#17171A",
  backgroundAlt2: "rgba(39, 38, 44, 0.7)",
  cardBorder: "#1a1b21",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#141416",
  invertedContrast: "#222b3c",
  input: "#1d1e26",
  inputSecondary: "#131418",
  primaryDark: "#0098A1",
  tertiary: "#222531",
  text: "#F4EEFF",
  textDisabled: "#4C516B",
  textSubtle: "#ABAFC4",
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #17171a 0%,#222431 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #17171a 0%, #17171a 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  }
};