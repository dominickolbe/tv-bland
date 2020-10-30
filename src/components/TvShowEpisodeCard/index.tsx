import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { FALLBACK_COVER_IMG } from "../../constants";
import { ScheduleItemType } from "../../models";
import { trimString } from "../../utils";
import { Rating } from "../Rating";

const useStyles = makeStyles(() => ({
  cover: {
    height: 250,
  },
  rating: {
    marginBottom: 15,
  },
}));

export const TvShowEpisodeCard = (props: {
  scheduleItem: ScheduleItemType;
  onClick: (id: number) => void;
}) => {
  const classes = useStyles();
  const { scheduleItem, onClick } = props;

  const getCover = () => {
    if (scheduleItem.image) {
      return scheduleItem.image.medium.replace("http://", "https://");
    }
    if (scheduleItem.show.image) {
      return scheduleItem.show.image.medium.replace("http://", "https://");
    }
    return FALLBACK_COVER_IMG;
  };

  return (
    <Card>
      <CardActionArea onClick={() => onClick(scheduleItem.show.id)}>
        <CardMedia
          className={classes.cover}
          image={getCover()}
          title={scheduleItem.show.name}
        />
      </CardActionArea>
      <CardContent>
        <div className={classes.rating}>
          <Rating value={scheduleItem.show.rating?.average} withText={false} />
        </div>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          <Box>{trimString(scheduleItem.show.name, 30)}</Box>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <Box>{trimString(scheduleItem.name, 50)}</Box>
        </Typography>
      </CardContent>
    </Card>
  );
};
