import { createTheme } from "@mui/material/styles";
import { amber, purple } from "@mui/material/colors";

export default function useTheme() {
    const theme = createTheme({
        palette: {
            primary: {
                //main: purple[500],
                // main: "#af5252",
                main: "#191919",
                // main: "#000",
            },
            secondary: {
                main: "hsla(0,0%,100%,.6)",
            },
        },
        typography: {
            allVariants: {
                //color: "hsla(0,0%,100%,.6)",
                color: "#191919",
            },
        },
    });

    return { theme };
}
