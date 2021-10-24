import React, { useMemo, useReducer } from "react";
import { appDefaultState } from "./appDefaultState";
import MyAppBar from "./Components/MyAppBar/MyAppBar";
import TabPanel from "./Components/MyAppBar/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";
import AppContext from "./AppContext";
import reducer from "./App.red";
import "./App.scss";
import Box from "@mui/material/Box";
import Compare from "./Components/Compare/Compare";

function App() {
    const [state, dispatch] = useReducer(reducer, appDefaultState);

    const appContextValue = useMemo(
        () => ({ state, dispatch }),
        [state, dispatch]
    );

    const theme = useMemo(() => {
        if (state.isDarkMode) {
            document.body.className = "scrollbars-dark";
            return createTheme(darkTheme);
        } else {
            document.body.className = "scrollbars-light";
            return createTheme(lightTheme);
        }
    }, [appContextValue.state.isDarkMode]);

    const [tabValue, setTabValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppContext.Provider value={appContextValue}>
                <Box sx={{height: 800}}>
                    <Compare />
                </Box>
                {/*<MyAppBar tabValue={tabValue} handleChange={handleChange} />*/}
                {/*<TabPanel value={tabValue} index={0}>*/}
                {/*    History /!*<Timeline />*!/*/}
                {/*</TabPanel>*/}
                {/*<TabPanel value={tabValue} index={1}>*/}
                {/*    Compare /!*<Compare />*!/*/}
                {/*</TabPanel>*/}
            </AppContext.Provider>
        </ThemeProvider>
    );
}

export default App;
