import {ArrowRightAlt} from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import React from "react";

const SecondCard = ({theme, headingContent, bodyContent, image}) => {
  return (
    <Card sx={{minWidth: 275, bgcolor: "transparent", boxShadow: "none"}}>
      <CardMedia
        component='img'
        alt='Portfolio Prorent Copyright'
        loading='lazy'
        sx={{
          height: "100%",
          width: "100%",
          aspectRatio: 6 / 4,
          paddingBottom: "1vw",
        }}
        image={image}
      />
      <CardContent>
        <Typography
          sx={{fontSize: {xs: "4vw", sm: "2.5vw", md: "1.5vw"}}}
          color='text.secondary'
          gutterBottom>
          {headingContent}
        </Typography>
        <Typography
          variant='h5'
          component='div'
          sx={{
            fontWeight: "bold",
            color: theme.palette.common.black,
            fontSize: {xs: "5.5vw", sm: "3.5vw", md: "2.3vw"},
          }}>
          {bodyContent}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          endIcon={<ArrowRightAlt />}
          sx={{
            fontSize: {xs: "4.5vw", sm: "3vw", md: "2vw"},
            textTransform: "none",
            fontWeight: "bold",
          }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default SecondCard;
