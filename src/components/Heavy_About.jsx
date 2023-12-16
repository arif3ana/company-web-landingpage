import React from "react";
import {Box, Button, Grid, Stack, useTheme} from "@mui/material";
import {Paragraf, SecondHeading} from "./atom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CardPro from "./CardPro";
import {BullDozerIcon, DumpsterIcon, ExcavatorIcon} from "../assets";

const Heavy_About = () => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        paddingX: {xs: 2, sm: 5},
        paddingY: {xs: 8, sm: 15},
        flexDirection: "column",
        gap: 4,
      }}>
      <Box sx={{textAlign: "center", marginBottom: {xs: "1vw", sm:"1.5vw", md: "2vw"}}} >
        <SecondHeading content={"Many heavy equipment available"} />
        <Paragraf content={"There is a wide range of heavy equipment available in different sizes, which are ready to be used in all kinds of geographical conditions and according to your needs."} theme={theme} style={"center"}/>
      </Box>

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

export default Heavy_About;
