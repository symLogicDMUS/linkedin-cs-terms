import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';
import {useMediaQuery} from "@mui/material";
import {useTheme} from "@emotion/react";

export default function ResponsiveDateRangePicker() {
    const [value, setValue] = React.useState([null, null]);

    const theme = useTheme()

    const sm = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack
                spacing={4}
                padding={4}
                direction={{ xs: 'column', sm: 'row' }}
            >
                <TextField sx={{flex: 1, minWidth: '40%',}} label={"search term"} autoFocus defaultValue={"2+ years experience"}/>
                {sm ? (
                    <MobileDateRangePicker
                        startText="Start"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(startProps, endProps) => (
                            <React.Fragment>
                                <TextField {...startProps} />
                                <Box sx={{ mx: 2 }}> to </Box>
                                <TextField {...endProps} />
                            </React.Fragment>
                        )}
                    />
                ) : (
                    <DesktopDateRangePicker
                        startText="Start"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(startProps, endProps) => (
                            <React.Fragment>
                                <TextField {...startProps} />
                                <Box sx={{ mx: 2 }}> to </Box>
                                <TextField {...endProps} />
                            </React.Fragment>
                        )}
                    />
                )}
            </Stack>
        </LocalizationProvider>
    );
}
