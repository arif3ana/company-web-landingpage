import { Typography, useTheme } from "@mui/material";
import React from "react";

function Contact () {
    const theme = useTheme()
    return (
        <Typography variant="h1" color={theme.palette.common.black}>Hallo Contact</Typography>
    )
} 

export default Contact;