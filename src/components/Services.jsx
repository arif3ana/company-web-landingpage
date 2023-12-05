import React from "react";
import {Box, Button, Grid, Stack, useTheme} from "@mui/material";
import {MainHeading, Paragraf, SecondHeading} from "./atom";
import {ArrowRightAlt} from "@mui/icons-material";
import SecondCard from "./SecondCard";
import {Building, Mining, Property} from "../assets";

const Services = () => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        paddingX: {xs: 2, sm: 5},
        paddingY: {xs: 8, sm: 15},
        flexDirection: "column",
        gap: 4,
        bgcolor: theme.palette.secondary.main,
      }}>
      <Stack
        sx={{
          flexDirection: "row",
          flexWrap: {xs: "wrap", md: "nowrap"},
          justifyContent: {xs: "flex-start", md: "center"},
          gap: 2
        }}>
        <Box sx={{width: {xs: "100%", md: "50%"}}}>
          <MainHeading content={"Our Service"} />
          <SecondHeading content={"Our Specialty In This Industry"} />
          <Paragraf
            theme={theme}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque. "
            }
          />
        </Box>
        <Box
          sx={{
            width: {xs: "100%", md: "50%"},
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}>
          <Button
            variant='contained'
            endIcon={<ArrowRightAlt />}
            sx={{
              textTransform: "none",
              fontSize: {xs: "4.5vw", sm: "3vw", md: "2vw"},
            }}>
            View more
          </Button>
        </Box>
      </Stack>
      <Grid container spacing={2} sx={{justifyContent: "center"}}>
        <Grid item md>
          <SecondCard
            theme={theme}
            image={Mining}
            headingContent={"Industrial"}
            bodyContent={"Mining Contractor"}
          />
        </Grid>
        <Grid item md>
          <SecondCard
            theme={theme}
            image={Property}
            headingContent={"Construction"}
            bodyContent={"Property Demolition"}
          />
        </Grid>
        <Grid item md>
          <SecondCard
            theme={theme}
            image={Building}
            headingContent={"Infrastructure project"}
            bodyContent={"building construction"}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Services;
