import { createTheme } from "@material-ui/core/styles";
import { Lipstick, Greyish, Black  } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: Lipstick,
      contrastText: "white",
    },
    text:{
        primary: Greyish
    }
  },
});

export default theme
