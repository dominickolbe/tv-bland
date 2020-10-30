import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FALLBACK_COVER_IMG } from "../../constants";
import { CastType } from "../../models";

const RESULTS_PER_PAGE_DEFAULT = 4;

const useStyles = makeStyles(() => ({
  root: {},
  listItem: {},
  showMore: {
    margin: "15px 0",
  },
}));

export const ListItemStarring = (props: { cast: CastType }) => {
  const classes = useStyles();
  const {
    cast: { character, person },
  } = props;
  const history = useHistory();

  return (
    <>
      <ListItem
        className={classes.listItem}
        button
        onClick={() => history.push(`/people/${person.id}`)}
      >
        <ListItemAvatar>
          <Avatar
            alt={person.name}
            src={
              character.image && character.image.medium
                ? character.image.medium.replace("http://", "https://")
                : FALLBACK_COVER_IMG
            }
          />
        </ListItemAvatar>
        <ListItemText primary={character.name} secondary={person.name} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export const StarringList = (props: { cast: CastType[] }) => {
  const classes = useStyles();
  const { cast } = props;

  const [resultsPerPage, setResultsPerPage] = useState(
    RESULTS_PER_PAGE_DEFAULT
  );

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography component="div" variant="h2" gutterBottom>
            <Box>Starring</Box>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <List>
            {cast.slice(0, resultsPerPage).map((value, index) => (
              <ListItemStarring key={index} cast={value} />
            ))}
          </List>
          {cast.length === 0 && (
            <p>Unfortunately, there is no data currently available.</p>
          )}
          {cast.length !== 0 && resultsPerPage < cast.length && (
            <Grid item xs={12} container justify="center">
              <Link
                component="button"
                variant="body2"
                onClick={() => setResultsPerPage(cast.length)}
                className={classes.showMore}
              >
                Show more
              </Link>
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
};
