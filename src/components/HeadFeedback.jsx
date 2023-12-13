import React from "react";
import {Box, LinearProgress, Stack, Typography, useTheme} from "@mui/material";
import {MainHeading, SecondHeading, Picture, Paragraf} from "./atom/index";
import {Stone} from "../assets";

const HeadFeedback = () => {
  const theme = useTheme();
  const BarPersent = [
    {
      persent: 75,
      label: "Contract Acquired",
    },
    {
      persent: 87,
      label: "Satisfied Customers",
    },
  ];

  const circleStyle = {
    width: {xs: "27vw", sm: "19vw", md: "12vw"},
    height: {xs: "27vw", sm: "19vw", md: "12vw"},
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bgcolor: theme.palette.primary.main,
    right: {xs: "36%", sm: "42%", md: "18.5%"},
    bottom: {xs: "-822%", sm: "-1005%", md: "-575%"},
  };

  return (
    <Stack
      sx={{
        paddingX: {xs: 2, sm: 5},
        paddingTop: {xs: 5, md: 10},
        flexDirection: "row",
        flexWrap: {xs: "wrap", md: "nowrap"},
      }}>
      <Stack>
        <MainHeading content={"Mining Contract"} />
        <SecondHeading content={"Prospecting For Good Result"} />
        <Paragraf
          theme={theme}
          content={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sit inventore harum dolores."
          }
        />
        <Stack direction={"column"} spacing={3} marginTop={3}>
          {BarPersent.map((bar, index) => (
            <Box key={index}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography
                  variant='body1'
                  color={theme.palette.text.primary}
                  sx={{
                    fontSize: {xs: "4.5vw", sm: "3vw", md: "2vw"},
                    fontWeight: "Bold",
                  }}>
                  {bar.label}
                </Typography>
                <Typography
                  variant='body1'
                  color={theme.palette.text.primary}
                  sx={{
                    fontSize: {xs: "4.5vw", sm: "3vw", md: "2vw"},
                    fontWeight: "Bold",
                  }}>
                  {bar.persent}%
                </Typography>
              </Box>
              <LinearProgress variant='determinate' value={bar.persent} />
            </Box>
          ))}
        </Stack>
      </Stack>

      <Stack direction={"row"} spacing={1} width={{md: "80%"}}>
        <Picture image={Stone} className={"HeadFeedback-image"} />
        <Box sx={circleStyle} flexDirection={"column"} zIndex={99999}>
          <Typography
            variant='h5'
            sx={{fontWeight: "bold", fontSize: {xs: "6.5vw", sm: "4.5vw", md: "2.5vw"}}}>
            110+
          </Typography>
          <Typography
            variant='body2'
            sx={{fontWeight: "bold", fontSize: {xs: "3.5vw", sm: "2.5vw", md: "1.5vw"}}}>
            Project Done
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default HeadFeedback;
