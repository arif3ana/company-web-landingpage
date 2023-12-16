import React from "react";
import {ThemeProvider, createTheme} from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutUs, Contact, Home, ServicesPage } from "./pages";

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/aboutus",
      element: <AboutUs />
    },
    {
      path: "/services",
      element: <ServicesPage />
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ])

  return (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
  )
}

export default App;
