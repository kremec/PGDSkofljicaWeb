import {CssBaseline, ThemeProvider, createTheme, responsiveFontSizes} from "@mui/material";
import { Outlet } from "react-router";

const appTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#F4F4F4"
                },
            },
        },
    },
    palette: {
        mode: "light",
        primary: {
            main: "#000000",
        }
    },
    typography: {
        fontFamily: '"Raleway"'
    }
});

function App() {
    return (
        <ThemeProvider theme={responsiveFontSizes(appTheme)}>
            <CssBaseline />
            <Outlet />
        </ThemeProvider>
    );
}

export default App;
