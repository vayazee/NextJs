import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Router from "./router/Router";
import useTheme from "./hooks/useTheme";

const App = () => {
    let { theme } = useTheme();
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <div className="App">
                        <ResponsiveAppBar />
                        <Router />
                    </div>
                </BrowserRouter>
            </ThemeProvider>
        </RecoilRoot>
    );
};

export default App;
