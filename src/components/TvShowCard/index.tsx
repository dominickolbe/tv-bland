import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { FALLBACK_COVER_IMG } from "../../constants";
import { TvShowType } from "../../models";
import { Rating } from "../Rating";

const useStyles = makeStyles((theme) => ({
  root: {},
  rating: {
    marginBottom: 15,
  },
  tvshowcover: {
    height: 250,
  },
}));

export const TvShowCard = (props: {
  tvshow: TvShowType;
  onClick: (id: number) => void;
}) => {
  const classes = useStyles();
  const { tvshow, onClick } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => onClick(tvshow.id)}>
        <CardMedia
          className={classes.tvshowcover}
          image={
            tvshow.image
              ? tvshow.image.medium.replace("http://", "https://")
              : FALLBACK_COVER_IMG
          }
          title={tvshow.name}
        />
      </CardActionArea>
      <CardContent>
        <div className={classes.rating}>
          <Rating value={tvshow.rating?.average} withText={false} />
        </div>
        <Typography variant="subtitle2" color="textSecondary" component="div">
          <Box fontWeight="fontWeightBold"> {tvshow.name}</Box>
        </Typography>
      </CardContent>
    </Card>
  );
};
