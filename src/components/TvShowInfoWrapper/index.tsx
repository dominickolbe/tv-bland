import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { TvShowType } from "../../models";

export const TvShowInfoWrapper = (props: { tvshow: TvShowType }) => {
  const { tvshow } = props;

  return (
    <Grid container spacing={4}>
      <Grid item xs={6} sm={6} md={3}>
        <Typography component="div" variant="h3">
          <Box fontWeight="fontWeightMedium">Genres:</Box>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {tvshow.genres.length !== 0 ? tvshow.genres.join(", ") : "N/A"}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={6} md={3}>
        <Typography component="div" variant="h3">
          <Box fontWeight="fontWeightMedium">Type:</Box>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {tvshow.type || "N/A"}
        </Typography>
      </Grid>

      <Grid item xs={6} sm={6} md={3}>
        <Typography component="div" variant="h3">
          <Box fontWeight="fontWeightMedium">Language:</Box>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {tvshow.language || "N/A"}
        </Typography>
      </Grid>

      <Grid item xs={6} sm={6} md={3}>
        <Typography component="div" variant="h3">
          <Box fontWeight="fontWeightMedium">Status:</Box>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {tvshow.status}
        </Typography>
      </Grid>
    </Grid>
  );
};
