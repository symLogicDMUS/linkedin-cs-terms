import {useTheme} from "@emotion/react";
import {lighten, Paper, Typography} from "@mui/material";
import React from "react";

export const BarTooltip = ({active, payload, label}) => {
    const theme = useTheme()
    if (active && payload && payload.length) {
        return (
            <Paper sx={{padding: '0.25rem'}}>
                <Typography>{`${label} : ${payload[0].value}`}</Typography>
            </Paper>
        );
    } else {
        return null;
    }
};