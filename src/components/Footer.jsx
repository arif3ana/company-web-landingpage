import React from "react";
import {Box, Grid, Typography, useTheme} from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const style = {
    minHeight: "60vh",
    background: `linear-gradient(rgba(15, 34, 51, 0.85), rgba(15, 34, 51, 0.85)), url('/src/assets/Footer.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    paddingX: 5,
    paddingY: 5,
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Box component={"footer"} sx={style} boxSizing={"border-box"}>
      <Grid container gap={{xs: "2vw"}} spacing={2}>
        <Grid item md={4}>
          <Typography
            variant='body1'
            gutterBottom
            sx={{fontSize: {xs: "4vw", sm: "3vw", md: "2vw"}}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi.
          </Typography>
        </Grid>
        <Grid item md>
          <Box>
            <Typography
              variant='body1'
              gutterBottom
              fontWeight={"bold"}
              sx={{fontSize: {xs: "4vw", sm: "3vw", md: "2vw"}}}>
              Company
            </Typography>
            <Typography
              variant='body1'
              gutterBottom
              sx={{fontSize: {xs: "4vw", sm: "3vw", md: "2vw"}}}>
              Home
            </Typography>
            <Typography
              variant='body1'
              gutterBottom
              sx={{fontSize: {xs: "4vw", sm: "3vw", md: "2vw"}}}>
              About
            </Typography>
            <Typography
              variant='body1'
              gutterBottom
              sx={{fontSize: {xs: "4vw", sm: "3vw", md: "2vw"}}}>
              Service
            </Typography>
            <Typography
              variant='body1'
              gutterBottom
              sx={{fontSize: {xs: "4vw", sm: "3vw", md: "2vw"}}}>
              Contact
            </Typography>
          </Box>
        </Grid>
        <Grid item md>
          <Typography
            variant='body1'
            gutterBottom
            fontWeight={"bold"}
            sx={{fontSize: {xs: "4vw", sm: "3vw", md: "2vw"}}}>
            Further Link
          </Typography>
          <Typography
            variant='body1'
            gutterBottom
            sx={{fontSize: {xs: "4vw", sm: "3vw", md: "2vw"}}}>
            Term & Condition
          </Typography>
          <Typography
            variant='body1'
            gutterBottom
            sx={{fontSize: {xs: "4vw", sm: "3vw", md: "2vw"}}}>
            Reqruitment
          </Typography>
        </Grid>
        <Grid item md>
          <Typography
            variant='body1'
            gutterBottom
            fontWeight={"bold"}
            sx={{fontSize: {xs: "4vw", sm: "3vw", md: "2vw"}}}>
            Get In Touch
          </Typography>
          <Typography
            variant='body1'
            gutterBottom
            sx={{fontSize: {xs: "4vw", sm: "3vw", md: "2vw"}}}>
            West java, Indonesia
          </Typography>
          <Typography
            variant='body1'
            gutterBottom
            sx={{fontSize: {xs: "4vw", sm: "3vw", md: "2vw"}}}>
            +6285673459221
          </Typography>
          <Typography
            variant='body1'
            gutterBottom
            sx={{fontSize: {xs: "4vw", sm: "3vw", md: "2vw"}}}>
            berat@gmail.com
          </Typography>
        </Grid>
      </Grid>
      <Grid container height={{xs: "20vw", sm: "15vw"}} alignItems={"flex-end"}>
        <Grid item md={12} sm={12} xs={12} textAlign={"center"}>
          <Typography
            variant='body1'
            gutterBottom
            sx={{fontSize: {xs: "4vw", sm: "3vw", md: "2vw"}, mt: 2}}>
            Copyright 2023 - developed by arif triana
          </Typography>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Footer;
