import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { Outlet } from "react-router";

export const appTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#F4F4F4",
        },
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#3c3b3b",
    },
  },
  typography: {
    fontFamily: "Raleway",
    htmlFontSize: 15,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1000,
      xl: 1500,
    },
  },
});

function App() {
  const theme = responsiveFontSizes(appTheme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
