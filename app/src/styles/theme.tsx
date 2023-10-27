import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  textStyles: {
    h1: {
      fontSize: "44px",
      fontWeight: "700",
      fontFamily: "Roboto",
      lineHeight: "56px",
    },
    h2: {
      fontSize: "36px",
      fontWeight: "600",
      fontFamily: "Roboto",
      lineHeight: "45px",
    },
    h3: {
      fontSize: "32px",
      fontWeight: "500",
      fontFamily: "Roboto",
      lineHeight: "40px",
    },
    h4: {
      fontSize: "28px",
      fontWeight: "500",
      fontFamily: "Roboto",
      lineHeight: "35px",
    },
    h5: {
      fontSize: "24px",
      fontWeight: "500",
      fontFamily: "Roboto",
      lineHeight: "30px",
    },
    h6: {
      fontSize: "20px",
      fontWeight: "500",
      fontFamily: "Roboto",
      lineHeight: "25px",
    },
    h7: {
      fontSize: "16px",
      fontWeight: "500",
      fontFamily: "Roboto",
      lineHeight: "20px",
    },
    p:{
        fontFamily: "Roboto"
    }
  },
});
