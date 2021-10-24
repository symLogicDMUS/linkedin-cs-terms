import {useTheme} from "@emotion/react";
import {Typography} from "@mui/material";
import React, {useEffect, useState} from 'react';
import {vh, vw} from "../../helpers/measurements";
import ResponsiveDateRangePicker from "./ResponsiveDateRangePicker";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import {CustomTooltip} from "../Compare/CustomTooltip";

const data = [
    {
        name: '10.24.21',
        pv: 2400,
    },
    {
        name: '10.25.21',
        pv: 3000,
    },
    {
        name: '10.26.21',
        pv: 9800,
    },
    {
        name: '10.27.21',
        pv: 3908,
    },
    {
        name: '10.28.21',
        pv: 4800,
    },
    {
        name: '10.29.21',
        pv: 3800,
    },
    {
        name: '10.30.21',
        pv: 4300,
    },
];

export default function Timeline(props) {
    // const { csTerms } = props;

    const [dimensions, setDimensions] = useState({
        width: vw() * 0.95,
        height: vh() * 0.625,
    });

    useEffect(() => {
        function handleResize() {
            setDimensions({ width: vw() * 0.95, height: vh() * 0.625 });
        }
        window.addEventListener("resize", handleResize);
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const theme = useTheme();

    return (
        <>
            <LineChart
                data={data}
                width={dimensions.width}
                height={dimensions.height}
            >
                <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={
                        theme.palette.mode === "dark"
                            ? "rgba(255, 255, 255, 0.2)"
                            : "rgba(0, 0, 0, 0.2)"
                    }
                />
                <XAxis
                    dataKey="name"
                    tickMargin={16}
                    tick={{ fill: theme.palette.text.primary }}
                />
                <YAxis
                    tickMargin={16}
                    tick={{ fill: theme.palette.text.primary }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="pv" stroke={theme.palette.secondary.main} strokeWidth={2} />
            </LineChart>
            <ResponsiveDateRangePicker />
        </>
    );
}
