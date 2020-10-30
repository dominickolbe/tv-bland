import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(4),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(6),
    },
  },
  title: {
    cursor: "pointer",
  },
}));

export const PageHeader = (props: { onClickToggleTheme: () => void }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container alignItems="center">
        <Grid item xs={6} md={6}>
          <Typography
            component="div"
            variant="h2"
            onClick={() => history.push(`/`)}
            className={classes.title}
          >
            <Box fontWeight="fontWeightBold">TV Bland</Box>
          </Typography>
        </Grid>
        <Grid container item xs={6} md={6} justify="flex-end">
          <IconButton
            color="primary"
            onClick={() => props.onClickToggleTheme()}
          >
            <Brightness4Icon />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};
