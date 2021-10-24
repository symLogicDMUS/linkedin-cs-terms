import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CustomTooltip } from "./CustomTooltip";
import { useTheme } from "@emotion/react";
import { vh, vw } from "../../helpers/measurements";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import CustomizedAxisTick from "./CustomizedAxisTick";

export default function Compare(props) {
    const { data } = props;

    const [dimensions, setDimensions] = useState({
        width: vw() * 0.95,
        height: vh() * 0.65,
    });

    useEffect(() => {
        function handleResize() {
            setDimensions({ width: vw() * 0.95, height: vh() * 0.65 });
        }
        window.addEventListener("resize", handleResize);
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const theme = useTheme();

    return (
        <BarChart
            data={data}
            width={dimensions.width}
            height={dimensions.height}
            style={{ margin: "auto" }}
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
                tick={<CustomizedAxisTick />}
                tickFormatter={{ textOverflow: "ellipsis" }}
                tickMargin={12}
            />
            <YAxis
                dataKey="occurrences"
                tick={{ fill: theme.palette.text.primary }}
                tickMargin={12}
            />
            <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: theme.palette.secondary.main, opacity: 0.1 }}
            />
            <Bar
                maxBarSize={80}
                minBarSize={16}
                dataKey="occurrences"
                fill={theme.palette.secondary.main}
            />
        </BarChart>
    );
}

Compare.propTypes = {
    csTerms: PropTypes.array,
};
