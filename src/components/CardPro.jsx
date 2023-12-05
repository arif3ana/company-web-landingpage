import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import React from "react";
import {Paragraf} from "./atom";

const CardPro = ({theme, headingContent, bodyContent, image}) => {
  return (
    <Card sx={{maxWidth: 345, bgcolor: theme.palette.secondary.main, paddingY: "2.5vw", paddingX: "2vw"}}>
      <CardMedia
        component='img'
        alt='green iguana'
        loading='lazy'
        sx={{width: 150, paddingBottom: "2vw"}}
        image={image}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          sx={{fontWeight: "bold", color: theme.palette.common.black, fontSize: {xs: "5.5vw", sm: "3.5vw", md: "2.3vw"}}}>
          {headingContent}
        </Typography>
        <Paragraf theme={theme} content={bodyContent} />
      </CardContent>
      <CardActions>
        <Button variant='contained' sx={{textTransform: "none", fontSize: {xs: "4.5vw", sm: "3vw", md: "2vw"}}}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardPro;
