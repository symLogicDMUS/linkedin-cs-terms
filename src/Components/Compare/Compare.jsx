import React from "react";
import PropTypes from "prop-types";
import {BarTooltip} from "./BarTooltip";
import {useTheme} from "@emotion/react";
import {Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis,} from "recharts";

const data = [
    {
        "name": "Page A",
        "occurrences": 2400
    },
    {
        "name": "Page B",
        "occurrences": 1398
    },
    {
        "name": "Page C",
        "occurrences": 9800
    },
    {
        "name": "Page D",
        "occurrences": 3908
    },
    {
        "name": "Page E",
        "occurrences": 4800
    },
    {
        "name": "Page F",
        "occurrences": 3800
    },
    {
        "name": "Page G",
        "occurrences": 4300
    },
    {
        "name": "Page H",
        "occurrences": 4300
    },
    {
        "name": "Page I",
        "occurrences": 7200
    },
    {
        "name": "Page J",
        "occurrences": 4000
    },
    {
        "name": "Page K",
        "occurrences": 6300
    },
    {
        "name": "Page L",
        "occurrences": 5334
    },
    {
        "name": "Page M",
        "occurrences": 5445
    },
    {
        "name": "Page N",
        "occurrences": 3999
    },
]

export default function Compare(props) {
    const {csTerms} = props;

    const theme = useTheme()

    return (
        <BarChart width={1200} height={800} data={data} style={{margin: '2rem'}}>
            <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.mode==="dark" ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'} />
            <XAxis dataKey="name" tick={{fill: theme.palette.text.primary, }} tickMargin={12} />
            <YAxis dataKey="occurrences" tick={{fill: theme.palette.text.primary, }} tickMargin={12} />
            <Tooltip content={<BarTooltip />} cursor={{fill: theme.palette.secondary.main, opacity: 0.1}} />
            <Bar dataKey="occurrences" fill={theme.palette.secondary.main} maxBarSize={80} minBarSize={16}/>
        </BarChart>
    )
}

Compare.propTypes = {
    csTerms: PropTypes.array,
}