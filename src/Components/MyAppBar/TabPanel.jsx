import * as React from "react";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function TabPanel(props) {
    const { children, value, index, ...other } = props;

    const theme = useTheme();

    const lg = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: lg ? 3 : 0, pt: 3 }}>{children}</Box>
            )}
        </div>
    );
}
