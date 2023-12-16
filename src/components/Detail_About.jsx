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
import {Fleet} from "../assets";
const Detail_About = () => {
  const theme = useTheme();
  const listCentang = [
    "Rent and manage equipment",
    "View accurate rates",
    "Full statis faction guaranteed",
  ];

  return (
    <Stack
      sx={{
        paddingX: {xs: 2, sm: 5},
        paddingTop: 5,
        flexDirection: "row",
        flexWrap: {xs: "wrap", md: "nowrap"},
        gap: 2,
      }}>
      <Stack sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <SecondHeading content={"About Company"} />
        <Paragraf
          theme={theme}
          content={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sit inventore harum dolores."
          }
        />
        <Paragraf
          theme={theme}
          content={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sit inventore harum dolores."
          }
        />
      </Stack>
        <Picture image={Fleet} className={"Detail_About-image"} />
    </Stack>
  );
};

export default Detail_About;
