import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SpeakerCard from "./SpeakerCard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "60%",
    margin: "10vh auto"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  image: {
    width: "auto",
    backgroundSize: "cover"
  }
}));

export default function Speakers() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <SpeakerCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <SpeakerCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <SpeakerCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <SpeakerCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <SpeakerCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <SpeakerCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <SpeakerCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <SpeakerCard />
        </Grid>
      </Grid>
    </div>
  );
}
