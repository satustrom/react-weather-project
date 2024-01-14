import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#CC5500",
    },
  },
  typography: {
    fontFamily: "Salsa",
    h1: {
      fontSize: "42px",
      "@media (min-width:600px)": {
        fontSize: "55px",
      },
    },
  },
});

export default theme;
