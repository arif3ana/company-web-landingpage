import React from "react";
import {Box, Grid, Stack, Typography, useTheme} from "@mui/material";
import {MainHeading, SecondHeading, Picture, Paragraf} from "./atom/index";
import {ExcavatorBigIcon} from "../assets";

const Expertiso = () => {
  const theme = useTheme();
  const boxBorder = {
    width: {xs: "60vw", sm: "50vw", md: "30vw"},
    height: {xs: "60vw", sm: "50vw", md: "30vw"},
    bottom: "55%",
    left: {xs: "12%"},
    transform: "rotate(30deg)",
    border: "10px solid",
    borderColor: theme.palette.primary.main,
    zIndex: "-1",
  };

  const gridStyle = {   
    textAlign: "center"
  }

  return (
    <Stack
      sx={{
        paddingX: {xs: 2, sm: 5},
        paddingY: {xs: 8, sm: 15},
        flexDirection: "row",
        flexWrap: {xs: "wrap", md: "nowrap"},
        justifyContent: {xs: "flex-start", md: "center"},
        gap: 5
      }}>
      <Box sx={{width: {xs: "100%", md: "50%"}}}>
        <Picture image={ExcavatorBigIcon} className={"expertiso-image"}/>
        {/* <Box sx={boxBorder}></Box> */}
      </Box>
      <Stack sx={{width: {xs: "100%", md: "50%"}}}>
        <MainHeading content={"Expertiso"} />
        <SecondHeading content={"Why You Should Choose Us"} />
        <Paragraf
          theme={theme}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque. "
          }
        />
        <Grid container spacing={2} columns={16} paddingTop={3}>
          <Grid item xs={8} sx={gridStyle} >
            <Typography
              variant='h4'
              color={theme.palette.primary.main}
              fontWeight={"bold"}
              sx={{fontSize: {xs: "10vw", sm: "8vw", md: "4vw"}}}>
              320+
            </Typography>
            <Paragraf theme={theme} content={"Project Completed"} />
          </Grid>
          <Grid item xs={8} sx={gridStyle}>
            <Typography
              variant='h4'
              color={theme.palette.primary.main}
              fontWeight={"bold"}
              sx={{fontSize: {xs: "10vw", sm: "8vw", md: "4vw"}}}>
              732+
            </Typography>
            <Paragraf theme={theme} content={"Unique Customers"} />
          </Grid>
          <Grid item xs={8} sx={gridStyle} >
            <Typography
              variant='h4'
              color={theme.palette.primary.main}
              fontWeight={"bold"}
              sx={{fontSize: {xs: "10vw", sm: "8vw", md: "4vw"}}}>
              50+
            </Typography>
            <Paragraf theme={theme} content={"Equipment Fleet"} />
          </Grid>
          <Grid item xs={8} sx={gridStyle}>
            <Typography
              variant='h4'
              color={theme.palette.primary.main}
              fontWeight={"bold"}
              sx={{fontSize: {xs: "10vw", sm: "8vw", md: "4vw"}}}>
              32+
            </Typography>
            <Paragraf theme={theme} content={"Branch Location"} />
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Expertiso;
