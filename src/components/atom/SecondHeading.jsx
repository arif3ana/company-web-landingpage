import {Typography, useTheme} from "@mui/material";
import React from "react";

const SecondHeading = ({content}) => {
  const theme = useTheme();
  return (
    <Typography
      variant='h3'
      color={theme.palette.common.black}
      fontWeight={"bold"}
      gutterBottom
      sx={{fontSize: {xs: "10vw", sm: "8vw", md: "5vw"}}}>
      {content}
    </Typography>
  );
};

export default SecondHeading;
