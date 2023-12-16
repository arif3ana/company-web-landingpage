import React from "react";
import {Stack, Typography, useTheme} from "@mui/material";
import {Detail_About, Footer, Heavy_About, Navbar, Oprator_About} from "../components";

function AboutUs() {
  const theme = useTheme();
  const boxStyle = {
    height: "100vh",
    background: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url('/src/assets/header.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingX: {xs: 4, sm: 10},
  };
  return (
    <>
      <Navbar />
      <Stack height='100vh' justifyContent={"center"} sx={boxStyle}>
        <Typography
          variant='h2'
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: {xs: "10vw", sm: "7vw", md: "6vw"},
            textAlign: "center"
          }}>
          About Us
        </Typography>
        <Typography
          variant='body1'
          gutterBottom
          textAlign={"center"}
          color={theme.palette.common.white}
          sx={{fontSize: {xs: "4.5vw", sm: "3vw", md: "2vw"}}}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non 
        </Typography>
      </Stack>
      <Detail_About />
      <Heavy_About />
      <Oprator_About />
      <Footer />
    </>
  );
}

export default AboutUs;
