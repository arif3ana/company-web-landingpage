import {Typography, useTheme} from "@mui/material";
import React from "react";

const MainHeading = ({content}) => {
  const theme = useTheme();
  return (
    <Typography
      variant='h4'
      color={theme.palette.primary.main}
      fontWeight={"bold"}
      sx={{fontSize: {xs: "5vw", sm: "4vw", md: "2.5vw", lg: "3vw"}}}>
      {content}
    </Typography>
  );
};

export default MainHeading;
