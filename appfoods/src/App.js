import Router from "./routes/Router";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./constants/theme";
import StyledGlobal from "./styledGlobal/StyledGlobal";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledGlobal/>
      <Router />
    </ThemeProvider>
  );
}

export default App;
