/* eslint-disable react-hooks/exhaustive-deps */

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "react-use";
import { FullScreenLoader } from "../../components/FullScreenLoader";
import { FALLBACK_COVER_IMG } from "../../constants";
import { PeopleType } from "../../models";
import { ApiController } from "../../utils/ApiController";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(4),
  },
  divider: {
    [theme.breakpoints.up("sm")]: {
      marginBottom: 50,
    },
  },
  ratingContainer: {
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(4),
    },
  },
}));

export const People = () => {
  // @ts-ignore
  const { id } = useParams();
  const classes = useStyles();

  const abortCtrl = new AbortController();

  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState<PeopleType | null>(null);

  const getPeople = async () => {
    setLoading(true);
    setPeople(null);
    const response = await ApiController.get.people(id);
    if (abortCtrl.signal.aborted) return;
    if (response.ok) setPeople(response.val);

    setLoading(false);
  };

  useTitle(people ? people.name : "...");

  useEffect(() => {
    getPeople();
    return () => {
      // Cleaning up API request
      abortCtrl.abort();
    };
  }, [id]);

  if (loading) return <FullScreenLoader />;
  if (!people) return <div>Not found</div>;

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={5}>
                <img
                  src={
                    people.image && people.image.original
                      ? people.image.original.replace("http://", "https://")
                      : FALLBACK_COVER_IMG
                  }
                  alt={people.name}
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
                  <Typography component="div" variant="h1">
                    <Box>{people.name}</Box>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
