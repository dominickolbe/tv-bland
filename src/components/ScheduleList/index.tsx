import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { ScheduleType } from "../../models";
import { TvShowEpisodeCard } from "../TvShowEpisodeCard";

const RESULTS_PER_PAGE_DEFAULT = 6;

const useStyles = makeStyles(() => ({
  showMore: {
    margin: "15px 0",
  },
}));

export const ScheduleList = (props: {
  schedule: ScheduleType;
  onClickCard: (id: number) => void;
}) => {
  const classes = useStyles();
  const { schedule, onClickCard } = props;

  const [resultsPerPage, setResultsPerPage] = useState(
    RESULTS_PER_PAGE_DEFAULT
  );

  return (
    <Grid container spacing={3}>
      {schedule.slice(0, resultsPerPage).map((item) => {
        return (
          <Grid item xs={6} sm={4} md={2} key={item.id}>
            <TvShowEpisodeCard scheduleItem={item} onClick={onClickCard} />
          </Grid>
        );
      })}
      {schedule.length !== 0 && resultsPerPage < schedule.length && (
        <Grid item xs={12} container justify="center">
          <Link
            component="button"
            variant="body2"
            onClick={() => setResultsPerPage(schedule.length)}
            className={classes.showMore}
          >
            Show more
          </Link>
        </Grid>
      )}
    </Grid>
  );
};
