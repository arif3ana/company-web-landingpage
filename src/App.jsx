import React from "react";
import {
  Box,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import {About, Expertiso, Navbar, Services, SubAbout} from "./components";

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
    width: "100vw",
    background: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url('/src/assets/header.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={boxStyle}>
        <Navbar />
        <Stack
          height='80vh'
          justifyContent={"center"}
          sx={{paddingX: {xs: 4, sm: 10}}}>
          <Typography
            variant='h2'
            sx={{
              fontWeight: "bold",
              fontSize: {xs: "10vw", sm: "7vw", md: "6vw"},
            }}>
            High-Quality Heavy Equipment, Uncompromising Performance
          </Typography>
        </Stack>
      </Box>
      <About />
      <SubAbout />
      <Services />
      <Expertiso />
    </ThemeProvider>
  );
}

export default App;
