import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { TvShowType } from "../../models";

const useStyles = makeStyles(() => ({
  root: {},
  listItem: {
    paddingLeft: 0,
  },
  listItemTextPrimary: {
    flex: "initial",
    width: "33%",
    fontSize: "1rem",
  },
  listItemTextSecondary: {
    color: "#8C8C8C",
    flex: "initial",
  },
}));

export const ListItemRich = (props: { primary: string; secondary: string }) => {
  const classes = useStyles();
  return (
    <>
      <ListItem className={classes.listItem}>
        <ListItemText
          className={classes.listItemTextPrimary}
          primary={
            <Typography variant="body1" color="textPrimary" component="div">
              {props.primary}
            </Typography>
          }
        />
        <ListItemText
          className={classes.listItemTextSecondary}
          primary={
            <Typography variant="body2" color="textSecondary" component="div">
              {props.secondary}
            </Typography>
          }
        />
      </ListItem>
      <Divider component="li" />
    </>
  );
};

export const ShowInfoList = (props: { tvshow: TvShowType }) => {
  const classes = useStyles();
  const { tvshow } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography component="div" variant="h2" gutterBottom>
            <Box>Show Info</Box>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <List>
            <ListItemRich
              primary="Streamed on"
              secondary={tvshow.network?.name || "-"}
            />
            <ListItemRich
              primary="Schedule"
              secondary={
                tvshow.schedule && tvshow.schedule?.days.length !== 0
                  ? tvshow.schedule.days.join(", ")
                  : "-"
              }
            />
            <ListItemRich primary="Status" secondary={tvshow.status} />
            <ListItemRich
              primary="Genre"
              secondary={
                tvshow.genres.length !== 0 ? tvshow.genres.join(", ") : "-"
              }
            />
            <ListItemRich primary="Type" secondary={tvshow.type || "-"} />
            <ListItemRich
              primary="Language"
              secondary={tvshow.language || "-"}
            />
          </List>
        </Grid>
      </Grid>
    </div>
  );
};
