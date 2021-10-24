import React from "react";
import { Text } from "recharts";
import { useTheme } from "@emotion/react";

export default function CustomizedAxisTick(props) {
    const { x, y, payload } = props;

    const theme = useTheme();

    return (
        <Text
            x={x}
            y={y}
            width={75}
            textAnchor="middle"
            verticalAnchor="start"
            fill={theme.palette.text.primary}
            style={{overflow: 'hidden'}}
        >
            {payload.value}
        </Text>
    );
}
