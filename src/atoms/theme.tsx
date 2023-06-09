import { createTheme } from "@shopify/restyle";
import { Platform } from "react-native";

const globalPallete = {};

export const FONT = {
  //   PrimaryExtraLight: "TitilliumWeb-ExtraLight", // 200
  //   PrimaryLight: "TitilliumWeb-Light", // 300
  Primary: "space-mono", // 400
  //   PrimarySemiBold: "TitilliumWeb-SemiBold", // 600
  //   PrimaryBold: "TitilliumWeb-Bold", // 700
  //   PrimaryHeavy: "TitilliumWeb-Black", // 900
};

export const theme = createTheme({
  backgroundColor: "#ffffff",
  colors: {
    background: "#121212",
    white: "#FFFFFF",
    primary: "#4CA771",
    lightGreen: "#C1E7BB",
    veryLightGreen: "#EAF9E7",
    lightGreenText: "#C0E2BA",
    backgroundGreen: "#DEF4DB",
    lightText: "#272727",
    lightBlueBg: "#E4F3FF",
    lightGreyText: "#33404F",
    greyText: "#9AADC7",
    darkBlueText: "#023373",
    black: "#000000",
    darkHeading: "#9AADC7",
    darkBlueHeading: "#033373",
    shadowLight: "#474747",
    red: "#FF6134",
    borderGrey: "#DADADA",
    lightYellow: "#FFF1C3",
    yellow: "#F79321",
    lightBlack: "#333333",
    blue: "#BFE3FF",
    lightGreenBackground: "#E9F3ED",
    lightBlueBackground: "#CCE3F5",
    blueTopTabLabelBg: "#D3E9F4",
    lightGrey: "#999999",
    border: "#E6E6E6",
    disabled: "#E6E6E6",
    lightBlue: "#E9F5FF",
    lightGreenDropDown: "#D8F3D4",
    snowy: "#F1F1F1",
    grey: "#7C7C7C",
    lightBlueBorder: "#D6EAFB",
    lightRed: "#FFEDED",
    lightGreenQuestionBg: "#F6FAF7",
    orange: "#FEAF00",
    ultraLightGreen: "#F6FAF6",
    conservativeTextColor: "#1EA614",
    conservativeBackgroundColor: "#E8F6E7",
    moderatelyConservativeTextColor: "#9FCC00",
    moderatelyConservativeBackgroundColor: "#F5FAE5",
    balancedTextColor: "#FEAF00",
    balancedBackgroundColor: "#FFF8E5",
    aggressiveTextColor: "#FE2A00",
    aggressiveBackgroundColor: "#FFEAE5",
    moderatelyAggressiveTextColor: "#FF8800",
    moderatelyAggressiveBackgroundColor: "#FFF3E5",
    inputGrey: "#F5F5F5",
    orangeText: "#F79321",
    ziRed: "#EC1F26",
    ziYellow: "#F79321",
    ziGreen: "#4CA771",
    sendFundsBoxColor: "#FFEAE6",
    buyFundsBoxColor: "#E9F6E8",
    ...globalPallete,
  },
  spacing: {
    // new
    s0: 0,
    s2: 2,
    s4: 4,
    s3: 3,
    s6: 6,
    s7: 7,
    s8: 8,
    s10: 10,
    backButtonPadding: 10,
    s12: 10,
    s14: 14,
    s16: 16,
    s18: 18,
    s20: 20,
    s24: 24,
    s28: 28,
    s30: 30,
    s32: 32,
    s34: 34,
    s36: 36,
    s38: 38,
    s48: 48,
    s40: 40,
    s54: 54,
    s75: 75,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  breakpoints: {},
  textVariants: {
    // new
    regular10: {
      fontSize: 10,
      fontFamily: FONT.Primary,
      color: "white",
    },
    regular24: {
      fontSize: 24,
      fontFamily: FONT.Primary,
      color: "white",
    },
    regular10Lightblack: {
      fontSize: 10,
      fontFamily: FONT.Primary,
      color: "lightBlack",
    },
    regular12Lightblack: {
      fontSize: 12,
      fontFamily: FONT.Primary,
      color: "lightBlack",
    },
    regular12: {
      fontSize: 12,
      fontFamily: FONT.Primary,
      color: "white",
    },
    regular12LightBlack: {
      fontSize: 12,
      fontFamily: FONT.Primary,
      color: "lightBlack",
    },
    regular12Grey: {
      fontSize: 12,
      fontFamily: FONT.Primary,
      color: "grey",
    },
    regular14: {
      fontSize: 14,
      fontFamily: FONT.Primary,
      color: "white",
    },
    regular14LightBlack: {
      fontSize: 14,
      fontFamily: FONT.Primary,
      color: "lightBlack",
    },
    regular14LightGrey: {
      fontSize: 14,
      fontFamily: FONT.Primary,
      color: "lightGrey",
    },
    normal: {
      fontSize: 15,
      fontFamily: FONT.Primary,
      color: "white",
    },
    regular16: {
      fontSize: 16,
      fontFamily: FONT.Primary,
      color: "white",
    },
    regular16LightBlack: {
      fontSize: 16,
      fontFamily: FONT.Primary,
      color: "lightBlack",
    },
    regular18: {
      fontSize: 18,
      fontFamily: FONT.Primary,
      color: "white",
    },
  },
  cardVariants: {
    default: {
      shadowOpacity: 0.2,
      backgroundColor: "background",
      shadowColor: "shadowLight",
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 8,
      borderRadius: 6,
      elevation: 5,
    },
    light: {
      shadowOpacity: 0.1,
      backgroundColor: "background",
      shadowColor: "shadowLight",
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 2,
      borderRadius: 3,
      elevation: 2,
    },
    dark: {
      shadowOpacity: 0.5,
      backgroundColor: "background",
      shadowColor: "shadowLight",
      shadowOffset: { width: 2, height: 2 },
      shadowRadius: 5,
      borderRadius: 6,
      elevation: 2,
    },
    optimizedDark: {
      shadowOpacity: 0.5,
      backgroundColor: "background",
      shadowColor: Platform.select({
        android: "black",
        ios: "black",
      }),
      shadowOffset: { width: 2, height: 2 },
      shadowRadius: 5,
      borderRadius: 6,
      elevation: 20,
    },
    optimizedLight: {
      shadowOpacity: 0.04,
      shadowColor: Platform.select({
        android: "black",
        ios: "black",
      }),
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 4,
      borderRadius: 8,
      elevation: 10,
    },
    optimizedLightBlue: {
      shadowOpacity: 1,
      backgroundColor: "background",
      shadowColor: Platform.select({
        android: "primaryDark",
        ios: "blueLightBackground",
      }),
      shadowOffset: { width: 0, height: 8 },
      shadowRadius: 20,
      borderRadius: 10,
      elevation: 20,
    },
    whiteWithBorder: {
      borderColor: "border",
      borderWidth: 1,
      borderRadius: 8,
      padding: "s16",
    },
  },
});

export type Theme = typeof theme;

export const lightTheme: Theme = {
  ...theme,
};
