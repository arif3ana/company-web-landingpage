import { Avatar, Typography } from "@mui/material";
import React from "react";

const AvatarImg = ({nameProfile, position}) => {
  return (
    <>
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
        {nameProfile}
      </Typography>
      <Typography
        sx={{
          fontSize: {xs: "4vw", sm: "2.5vw", md: "1.5vw"},
          textAlign: "center",
        }}
        color='text.secondary'
        gutterBottom>
        {position}
      </Typography>
    </>
  );
};

export default AvatarImg;
