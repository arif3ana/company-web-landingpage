import {Avatar, Box, Grid, Stack, Typography, useTheme} from "@mui/material";
import React from "react";
import {Paragraf, SecondHeading} from "./atom";
import AvatarImg from "./AvatarImg";

const Oprator_About = () => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        paddingX: {xs: 2, sm: 5},
        paddingY: {xs: 8, sm: 15},
      }}>
      <Box sx={{textAlign: "center", marginBottom: 5}}>
        <SecondHeading content={"Meet Our Operator"} />
        <Paragraf content={"Our operators have gone through challenges and a series of tests to become reliable and professional heavy equipment operators, they have gone through mountains, seas and various other places"} theme={theme} style={"center"}/>
      </Box>
      <Grid container spacing={2} sx={{justifyContent: "center"}}>
        <Grid item md>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <AvatarImg
              nameProfile={"Jhon Due"}
              position={"Bulldozer Operator"}
            />
          </Box>
        </Grid>
        <Grid item md>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <AvatarImg
              nameProfile={"Jhon Due"}
              position={"Bulldozer Operator"}
            />
          </Box>
        </Grid>
        <Grid item md>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <AvatarImg
              nameProfile={"Jhon Due"}
              position={"Bulldozer Operator"}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} marginTop={5} sx={{justifyContent: "center"}}>
        <Grid item md>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <AvatarImg
              nameProfile={"Jhon Due"}
              position={"Bulldozer Operator"}
            />
          </Box>
        </Grid>
        <Grid item md>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <AvatarImg
              nameProfile={"Jhon Due"}
              position={"Bulldozer Operator"}
            />
          </Box>
        </Grid>
        <Grid item md>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <AvatarImg
              nameProfile={"Jhon Due"}
              position={"Bulldozer Operator"}
            />
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Oprator_About;
