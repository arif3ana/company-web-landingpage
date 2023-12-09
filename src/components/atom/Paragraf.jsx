import { Typography } from "@mui/material";
import React from "react";

const Paragraf = ({theme, content, style}) => {
    return (
        <Typography
          variant='body1'
          gutterBottom
          textAlign={style ? "center" : "start"}
          color={theme.palette.text.primary}
          sx={{fontSize: {xs: "4.5vw", sm: "3vw", md: "2vw"}}}>
          {content}
        </Typography>
    )
}

export default Paragraf;