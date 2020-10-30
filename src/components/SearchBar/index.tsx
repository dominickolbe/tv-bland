import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export const SearchBar = (props: {
  query: string;
  onChangeQuery: (value: string) => void;
  onSubmit: () => void;
}) => {
  const classes = useStyles();
  const { query, onChangeQuery, onSubmit } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper className={classes.searchBar}>
          <IconButton className={classes.iconButton} onClick={() => onSubmit()}>
            <SearchIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Search"
            value={query}
            onChange={(e) => onChangeQuery(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && onSubmit()}
            autoComplete="on"
          />
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton
            className={classes.iconButton}
            onClick={() => onChangeQuery("")}
          >
            <ClearIcon />
          </IconButton>
        </Paper>
      </Grid>
    </Grid>
  );
};
