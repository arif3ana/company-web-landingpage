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
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import MainHeading from "./atom/MainHeading";
import SecondHeading from "./atom/SecondHeading";
import Picture from "./atom/Picture";
import excavator from "../assets/excavator.jpeg";
import bulldozer from "../assets/bulldozer.jpeg";

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
        right: {xs: "36%", sm: '42%', md: "18.5%"},
    }

  

  return (
    <Stack sx={{paddingX: {xs: 2, sm: 5}, paddingTop: 5, flexDirection: "row", flexWrap: {xs: "wrap", md: "nowrap"}, gap: 2}} >
      <Stack>
        <MainHeading content={"About Us"} />
        <SecondHeading content={"Working Through Dirt & Dust"} />
        <Typography
          variant='body1'
          color={theme.palette.text.primary}
          sx={{fontSize: {xs: "4.5vw", sm: "3vw", md: "2vw"}}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sit inventore harum dolores.
        </Typography>

        <List>
          {listCentang.map((content) => (
            <ListItem sx={{margin: 0}}>
              <ListItemIcon sx={{margin: 0, padding: 0 }}>
                <CheckRoundedIcon
                  style={{
                    color: theme.palette.primary.main,
                    fontSize: {xs: "medium", sm: "large", md: "large"}
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
            <Typography variant="body2" sx={{fontWeight: "bold", fontSize: {sm: "2.5vw", md: "1.5vw"}}}>Since</Typography>
            <Typography variant="h5" sx={{fontWeight: "bold", fontSize: {sm: "4vw", md: "2.5vw"}}}>2024</Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default About;
