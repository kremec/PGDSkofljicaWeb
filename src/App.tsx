import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
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
            main: "#E85A4F",
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline />
            <Outlet />
        </ThemeProvider>
    );
}

export default App;
