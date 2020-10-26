import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  },
  title: {
    cursor: "pointer",
  },
}));

export const PageHeader = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Typography
            component="div"
            variant="h2"
            onClick={() => history.push(`/`)}
            className={classes.title}
          >
            <Box fontWeight="fontWeightBold">TV Bland</Box>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
