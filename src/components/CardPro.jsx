import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  Rating,
  Box,
} from "@mui/material";
import {Paragraf} from "./atom";

const CardPro = ({theme, style, headingContent, bodyContent, image}) => {
  const FirstStyle = {
    maxWidth: 345,
    bgcolor: theme.palette.secondary.main,
    paddingY: "2.5vw",
    paddingX: "2vw",
  };
  const SecondStyle = {
    maxWidth: 345,
    bgcolor: "transparent",
    border: `5px solid ${theme.palette.secondary.main}`,
    borderBottom: `solid ${theme.palette.primary.main}`,
    borderRight: `solid ${theme.palette.primary.main}`,
    boxShadow: "none",
    paddingY: "2.5vw",
    paddingX: "2vw",
  };
  return (
    <Card sx={style ? SecondStyle : FirstStyle}>
      {image ? (
        <CardMedia
          component='img'
          alt='green iguana'
          loading='lazy'
          sx={{width: 150, paddingBottom: "2vw"}}
          image={image}
        />
      ) : null}
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          textAlign={style ? "center" : "start"}
          sx={{
            fontWeight: "bold",
            color: theme.palette.common.black,
            fontSize: {xs: "5.5vw", sm: "3.5vw", md: "2.3vw"},
          }}>
          {headingContent}
        </Typography>
        <Paragraf style={style} theme={theme} content={bodyContent} />

        {style ? (
          <Box textAlign={"center"} marginTop={3}>
            <Rating name="size-large" defaultValue={5} size="large"/>
          </Box>
        ) : null}
      </CardContent>
      {style ? null : (
      <CardActions>
        <Button
          variant='contained'
          sx={{
            textTransform: "none",
            fontSize: {xs: "4.5vw", sm: "3vw", md: "2vw"},
          }}>
          Learn More
        </Button>
      </CardActions>
      )}
    </Card>
  );
};

export default CardPro;
