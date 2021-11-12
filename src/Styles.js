import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  colors: {
    purple: {
      1: "#8615DF",
      2: "#4630AB",
      3: "#38085C",
      4: "#190429",
    },
    black: {
      1: "#111111",
      2: "#666665",
      3: "#9E9EAT",
      4: "#F5F5F5",
      5: "#9E9EA7",
    },
    success: "#25D970",
    error: "#DF1545",
    white: "#FFFFFF",
  },
  breakpoints: { mobile: 0, desktop: 769 },
});

export default theme;
