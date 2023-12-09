import React from "react";
import {
  Box,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
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
} from "./components";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFC107",
      },
      secondary: {
        main: "#F8F8F8",
      },
      text: {
        primary: "#000000",
        secondary: "#0F2233",
      },
      common: {
        black: "#0F2233",
        white: "#FFFFFF",
      },
    },
  });

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
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
