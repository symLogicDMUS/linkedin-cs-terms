import * as React from "react";
import { useContext } from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { a11yProps } from "./a11yProps";
import AppContext from "../../AppContext";
import { GitHub } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import TimelineIcon from "@mui/icons-material/Timeline";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import {AppBar, Button, IconButton, Paper, Stack, Tooltip} from "@mui/material";

export default function MyAppBar(props) {
    const { state, dispatch } = useContext(AppContext);

    const theme = useTheme();

    const { tabValue, handleChange } = props;
    return (
        <AppBar position={"static"}>
            <Paper
                sx={{
                    height: 48,
                    width: "100vw",
                    borderRadius: 0,
                    borderBottom: 1,
                    borderColor: "divider",
                    background: "inherit",
                }}
            >
                <Stack direction={"row"} sx={{ height: "100%" }}>
                    <Button
                        sx={{
                            height: "100%",
                            marginTop: "auto",
                            marginBottom: "auto",
                            marginRight: "auto",
                            marginLeft: 0.6,
                        }}
                    >
                        <img
                            src={"/Images/title.svg"}
                            style={{
                                height: "60%",
                            }}
                            alt="title"
                        />
                    </Button>
                    <Tooltip title={"Toggle light/dark theme"}>
                        <IconButton
                            onClick={() =>
                                dispatch({
                                    type: "update-theme",
                                    isDarkMode: !state.isDarkMode,
                                })
                            }
                            sx={{ height: 48, width: 48 }}
                        >
                            {state.isDarkMode ? (
                                <Brightness7Icon />
                            ) : (
                                <Brightness4Icon />
                            )}
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={"Author's GitHub"}>
                        <IconButton
                            sx={{ height: 48, width: 48, marginRight: 3 }}
                            onClick={() => window.location.href = "https://github.com/symLogicDMUS"}
                        >
                            <GitHub />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Paper>
            <Tabs
                value={tabValue}
                variant="fullWidth"
                textColor="inherit"
                indicatorColor="secondary"
                onChange={handleChange}
            >
                <Tab
                    label="TIMELINE"
                    icon={<TimelineIcon />}
                    {...a11yProps(0)}
                />
                <Tab
                    label="COMPARE"
                    icon={<EqualizerIcon />}
                    {...a11yProps(1)}
                />
            </Tabs>
        </AppBar>
    );
}
