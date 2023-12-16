import React from "react";
import {
  Box,
  Stack,
  Typography,
} from "@mui/material";
import {
  About,
  Expertiso,
  Feedback,
  Footer,
  HeadFeedback,
  Navbar,
  Services,
  SubAbout,
} from "../components";

function Home() {
  const boxStyle = {
    height: "100vh",
    background: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url('/src/assets/header.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingX: {xs: 4, sm: 10},
  };

  const SecondTagline = {
    height: "60vh",
    width: "100%",
    background: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url('/src/assets/BgTagline.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <Navbar />
      <Stack height='100vh' justifyContent={"center"} sx={boxStyle}>
        <Typography
          variant='h2'
          sx={{
            fontWeight: "bold",
            fontSize: {xs: "10vw", sm: "7vw", md: "6vw"},
          }}>
          High-Quality Heavy Equipment, Uncompromising Performance
        </Typography>
      </Stack>
      <About />
      <SubAbout />
      <Services />
      <Expertiso />
      <Box sx={SecondTagline} display={"flex"} alignItems={"center"}>
        <Typography
          variant='h2'
          sx={{
            fontWeight: "bold",
            fontSize: {xs: "10vw", sm: "7vw", md: "6vw"},
            textAlign: "center",
          }}>
          Only The Brave Can Unravel Earth’s Treasures
        </Typography>
      </Box>
      <HeadFeedback />
      <Feedback />
      <Footer />
    </>
  );
}

export default Home;