/* eslint-disable react-hooks/exhaustive-deps */

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "react-use";
import { FullScreenLoader } from "../../components/FullScreenLoader";
import { Rating } from "../../components/Rating";
import { StarringList } from "../../components/StarringList";
import { TvShowInfoWrapper } from "../../components/TvShowInfoWrapper";
import { TvShowNotFound } from "../../components/TvShowNotFound";
import { FALLBACK_COVER_IMG } from "../../constants";
import { TvShowType } from "../../models";
import { ApiController } from "../../utils/ApiController";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(4),
  },
  spacing: {
    [theme.breakpoints.up("sm")]: {
      marginBottom: 25,
    },
  },
  ratingContainer: {
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(4),
    },
  },
}));

export const TvShow = () => {
  // @ts-ignore
  const { id } = useParams();
  const classes = useStyles();

  const abortCtrl = new AbortController();

  const [loading, setLoading] = useState(true);
  const [tvshow, setTvshow] = useState<TvShowType | null>(null);

  const getTvShow = async () => {
    setLoading(true);
    setTvshow(null);
    const response = await ApiController.get.tvshow(id);
    if (abortCtrl.signal.aborted) return;
    if (response.ok) setTvshow(response.val);

    setLoading(false);
  };

  // Update page title
  useTitle(tvshow ? tvshow.name : "...");

  useEffect(() => {
    getTvShow();
    return () => {
      // Cleaning up API request
      abortCtrl.abort();
    };
  }, [id]);

  if (loading) return <FullScreenLoader />;
  if (!tvshow) return <TvShowNotFound />;

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.spacing}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={5}>
                <img
                  src={
                    tvshow.image && tvshow.image.original
                      ? tvshow.image.original.replace("http://", "https://")
                      : FALLBACK_COVER_IMG
                  }
                  alt={tvshow.name}
                  width="100%"
                  style={{
                    display: "block",
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className={classes.ratingContainer}>
                    <Rating value={tvshow.rating?.average} withText={true} />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Typography component="div" variant="h1">
                    <Box>{tvshow.name}</Box>
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="div"
                  >
                    <p
                      dangerouslySetInnerHTML={{
                        __html: tvshow.summary ?? "",
                      }}
                    />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12}>
          <TvShowInfoWrapper tvshow={tvshow} />
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <Divider />
        </Grid>

        <Grid item xs={12}>
          <StarringList cast={tvshow._embedded?.cast ?? []} />
        </Grid>
      </Grid>
    </Container>
  );
};
