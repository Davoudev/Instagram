// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: {
      fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif ",
      lineHeight: 1.5,
      fontWeight: 400,
      colorScheme: "light dark",
      color: " rgba(255, 255, 255, 0.87)",
      backgroundColor: "#242424",
    },
  },
  colors: {
    transparent: "transparent",
    primary: {
      100: "#171D38",
      backgroundHover: "#163963",
    },
    secondary: {
      100: "#ffff",
    },
    border: {
      100: "rgba(129 , 196 , 221 , 0.24 )",
    },
  },
  fontSizes: {
    title: "5rem",
    subtitle: "2rem",
  },
  letterSpacings: {},
  breakpoints: {
    mobile: "320px",
    tablet: "768px",
    labtop: "1024px",
    desktop: "1440px",
  },
});

export default theme;
