import { Typography, useTheme } from "@mui/material";
import React from "react";

function ServicesPage () {
    const theme = useTheme()
    return (
        <Typography variant="h1" color={theme.palette.common.black}>Hallo Services</Typography>
    )
} 

export default ServicesPage;