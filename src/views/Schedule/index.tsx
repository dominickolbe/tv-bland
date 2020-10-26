import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useTitle } from "react-use";
import { FullScreenLoader } from "../../components/FullScreenLoader";
import { ScheduleList } from "../../components/ScheduleList";
import { ScheduleType } from "../../models";
import { ApiController } from "../../utils/ApiController";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(4),
  },
}));

export const Schedule = () => {
  const classes = useStyles();
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [schedule, setSchedule] = useState<ScheduleType>([]);

  const getSchedule = async () => {
    setLoading(true);
    const data = await ApiController.get.schedule();
    if (data.ok) setSchedule(data.val);
    setLoading(false);
  };

  useEffect(() => {
    getSchedule();
  }, []);

  // Update page title
  useTitle("Schedule");

  if (loading) return <FullScreenLoader />;

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography component="div" variant="h2">
            <Box>TV Show and web series database.</Box>
            <Box>
              Create personalised schedules. Episode guide, cast, crew and
              character information.
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component="div" variant="h2" gutterBottom>
            <Box fontWeight="fontWeightBold">Last Added Shows</Box>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ScheduleList
            schedule={schedule}
            onClickCard={(id) => history.push(`/tvshows/${id}`)}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
