import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {MainHeading, SecondHeading, Picture, Paragraf} from "./atom/index";
import {bulldozer, excavator} from "../assets";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const About = () => {
  const theme = useTheme();
  const listCentang = [
    "Rent and manage equipment",
    "View accurate rates",
    "Full statis faction guaranteed",
  ];

  const circleStyle = {
    width: {xs: "25vw", sm: "15vw", md: "10vw"},
    height: {xs: "25vw", sm: "15vw", md: "10vw"},
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bgcolor: theme.palette.primary.main,
    right: {xs: "36%", sm: "42%", md: "19.5%"},
    top: {xs: "180%", sm: "182%", md: "120%"}
  };

  return (
    <Stack
      sx={{
        paddingX: {xs: 2, sm: 5},
        paddingTop: 5,
        flexDirection: "row",
        flexWrap: {xs: "wrap", md: "nowrap"},
        gap: 2,
      }}>
      <Stack>
        <MainHeading content={"About Us"} />
        <SecondHeading content={"Working Through Dirt & Dust"} />
        <Paragraf
          theme={theme}
          content={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sit inventore harum dolores."
          }
        />

        <List>
          {listCentang.map((content, index) => (
            <ListItem sx={{margin: 0}} key={index}>
              <ListItemIcon sx={{margin: 0, padding: 0}}>
                <CheckRoundedIcon
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: {xs: "8vw", sm: "4.5vw", md: "3.5vw"},
                    fontWeight: 700,
                  }}
                />
              </ListItemIcon>
              <Typography
                variant='body1'
                color={theme.palette.text.primary}
                sx={{fontSize: {xs: "4.5vw", sm: "3vw", md: "2vw"}, margin: 0}}>
                {content}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Stack>

      <Stack direction={"row"} spacing={1} width={{md: "80%"}}>
        <Picture image={excavator} className={"about-image"} />
        <Picture image={bulldozer} className={"about-image"} />
        <Box sx={circleStyle} flexDirection={"column"}>
          <Typography
            variant='body2'
            sx={{fontWeight: "bold", fontSize: {sm: "2.5vw", md: "1.5vw"}}}>
            Since
          </Typography>
          <Typography
            variant='h5'
            sx={{fontWeight: "bold", fontSize: {sm: "4vw", md: "2.5vw"}}}>
            2024
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default About;
