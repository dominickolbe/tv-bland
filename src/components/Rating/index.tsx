import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import RatingMui from "@material-ui/lab/Rating";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
}));

export const Rating = (props: {
  value: number | null | undefined;
  withText: boolean;
}) => {
  const classes = useStyles();
  const rating = props.value != null ? props.value / 2 : null;
  return (
    <div className={classes.root}>
      <RatingMui value={rating} precision={0.5} size="small" readOnly />
      {props.withText && (
        <Typography component="div" variant="body1">
          <Box ml={2} fontWeight="fontWeightBold">
            {rating ? rating.toFixed(1) : "-"} / 5
          </Box>
        </Typography>
      )}
    </div>
  );
};
