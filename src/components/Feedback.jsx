import React from "react";
import {Avatar, Box, Grid, Stack, Typography, useTheme} from "@mui/material";
import CardPro from "./CardPro";

const Feedback = () => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        paddingX: {xs: 2, sm: 5},
        paddingY: {xs: 8, sm: 15},
      }}>
      <Grid container spacing={2} sx={{justifyContent: "center"}}>
        <Grid item md>
          <Box>
            <CardPro
              theme={theme}
              style={true}
              headingContent={"''"}
              bodyContent={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque. "
              }
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                bottom: {xs: "8vw", sm: "5vw", md: "4vw"},
              }}>
             <Avatar
                sx={{
                  width: {xs: "20vw", sm: "10vw", md: "8vw"},
                  height: {xs: "20vw", sm: "10vw", md: "8vw"},
                }}
                alt='Reviewer Prorent'
                src='A'
              />
              <Typography
                sx={{
                  fontSize: {xs: "4vw", sm: "2.5vw", md: "1.5vw"},
                  textAlign: "center",
                  fontWeight: "bold",
                }}
                color='text.secondary'
                gutterBottom>
                Jhon Due
              </Typography>
              <Typography
                sx={{
                  fontSize: {xs: "4vw", sm: "2.5vw", md: "1.5vw"},
                  textAlign: "center",
                }}
                color='text.secondary'
                gutterBottom>
                Contructor
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md>
          <Box>
            <CardPro
              theme={theme}
              style={true}
              headingContent={"''"}
              bodyContent={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque. "
              }
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                bottom: {xs: "8vw", sm: "5vw", md: "4vw"},
              }}>
              <Avatar
                sx={{
                  width: {xs: "20vw", sm: "10vw", md: "8vw"},
                  height: {xs: "20vw", sm: "10vw", md: "8vw"},
                }}
                alt='Reviewer Prorent'
                src='A'
              />
              <Typography
                sx={{
                  fontSize: {xs: "4vw", sm: "2.5vw", md: "1.5vw"},
                  textAlign: "center",
                  fontWeight: "bold",
                }}
                color='text.secondary'
                gutterBottom>
                Andy Orson
              </Typography>
              <Typography
                sx={{
                  fontSize: {xs: "4vw", sm: "2.5vw", md: "1.5vw"},
                  textAlign: "center",
                }}
                color='text.secondary'
                gutterBottom>
                Contructor
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md>
          <Box>
            <CardPro
              theme={theme}
              style={true}
              headingContent={"''"}
              bodyContent={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque. "
              }
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                bottom: {xs: "8vw", sm: "5vw", md: "4vw"},
              }}>
              <Avatar
                sx={{
                  width: {xs: "20vw", sm: "10vw", md: "8vw"},
                  height: {xs: "20vw", sm: "10vw", md: "8vw"},
                }}
                alt='Reviewer Prorent'
                src='A'
              />
              <Typography
                sx={{
                  fontSize: {xs: "4vw", sm: "2.5vw", md: "1.5vw"},
                  textAlign: "center",
                  fontWeight: "bold",
                }}
                color='text.secondary'
                gutterBottom>
                Tim Joseph
              </Typography>
              <Typography
                sx={{
                  fontSize: {xs: "4vw", sm: "2.5vw", md: "1.5vw"},
                  textAlign: "center",
                }}
                color='text.secondary'
                gutterBottom>
                Contructor
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Feedback;
