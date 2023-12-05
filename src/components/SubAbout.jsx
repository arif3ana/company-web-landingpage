import React from "react";
import {Box, Button, Grid, Stack, useTheme} from "@mui/material";
import {Paragraf, SecondHeading} from "./atom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CardPro from "./CardPro";
import {BullDozerIcon, DumpsterIcon, ExcavatorIcon} from "../assets";

const SubAbout = () => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        paddingX: {xs: 2, sm: 5},
        paddingY: {xs: 8, sm: 15},
        flexDirection: "column",
        gap: 4,
      }}>
      <Stack
        sx={{
          flexDirection: "row",
          flexWrap: {xs: "wrap", md: "nowrap"},
          justifyContent: {xs: "flex-start", md: "center"},
          width: "100%",
        }}>
        <Box sx={{width: {xs: "100%", md: "40vw"}}}>
          <SecondHeading content={"Quality Is Our Speciality"} />
        </Box>
        <Box sx={{width: {xs: "100%", md: "30vw"}}}>
          <Paragraf
            theme={theme}
            content={"Browse the largest fleet in the industry"}
          />
          <Button
            variant='text'
            endIcon={<ArrowRightAltIcon />}
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
          <CardPro
            theme={theme}
            image={BullDozerIcon}
            headingContent={"Bulldozer"}
            bodyContent={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque. "
            }
          />
        </Grid>
        <Grid item md>
          <CardPro
            theme={theme}
            image={ExcavatorIcon}
            headingContent={"Excavator"}
            bodyContent={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque. "
            }
          />
        </Grid>
        <Grid item md>
          <CardPro
            theme={theme}
            image={DumpsterIcon}
            headingContent={"Dumpster"}
            bodyContent={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque. "
            }
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default SubAbout;
