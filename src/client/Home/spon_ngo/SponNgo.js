import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "0 10vw 10vh 10vw"
  },
  image_bucket: {
    padding: theme.spacing(2),
    textAlign: "center",
    verticalAlign: "middle"
  },
  image: {
    width: "8vw",
    verticalAlign: "middle",
    "@media(min-width:350px) and (max-width:500px)": {
      width: "25vw"
    },
    "@media(min-width:500px) and (max-width:605px)": {
      width: "11.5vw"
    }
  },
  header: {
    textAlign: "center",
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "4rem",
    color: "#000",
    letterSpacing: "-.03rem",
    fontWeight: "600",
    lineHeight: "1.2",
    margin: "15vh 0 15vh 0",
    "@media(min-width:350px) and (max-width:605px)": {
      fontSize: "44px",
      fontWeight: 525,
      letterSpacing: 0
    },
    "@media(min-width:350px) and (max-width:420px)": {
      fontSize: "46px",
      fontWeight: 500,
      letterSpacing: 0
    },
    "@media (max-width:320px)": {
      fontSize: "30px",
      fontWeight: 450,
      letterSpacing: 0
    }
  }
}));

export default function SponNgo() {
  const classes = useStyles();

  const SponArray = [
    "arrow-min",
    "cn-min",
    "eduxlabs-min",
    "foodwalas-min",
    "gmrgroups-min",
    "hackerearth-min",
    "pizzahut-min",
    "pnb-min",
    "townscript-min",
    "vanheusen-min",
    "zulip-min"
  ];

  const NgoArray = [
    "akshayapatra-min",
    "barefoot-min",
    "cure-min",
    "grf-min",
    "Karma Konnect-min",
    "katha-min",
    "khalsa aid-01-min",
    "lakshyam-min",
    "pjf-m-min",
    "savethechildren-min",
    "shakshigo-min",
    "teachforindia-min",
    "vision_india_found-min",
    "womenite-min"
  ];

  const SponImages = SponArray.map(image => {
    return (
      <Grid
        alignItems="center"
        justify="center"
        item
        xs={6}
        sm={2}
        key={image}
        container
      >
        <div className={classes.image_bucket}>
          <Fade bottom>
            <img
              src={`/Images/spons_compressed/${image}.jpg`}
              alt=""
              className={classes.image}
            />
          </Fade>
        </div>
      </Grid>
    );
  });

  const NgoImages = NgoArray.map(image => {
    return (
      <Grid
        alignItems="center"
        justify="center"
        item
        xs={6}
        sm={2}
        key={image}
        container
      >
        <div className={classes.image_bucket}>
          <Fade bottom>
            <img
              src={`/Images/ngo_compressed/${image}.jpg`}
              alt=""
              className={classes.image}
            />
          </Fade>
        </div>
      </Grid>
    );
  });

  return (
    <div className={classes.root}>
      <Fade bottom>
        <h2 className={classes.header}>Our Previous Sponsors</h2>
        <Grid container spacing={3} justify="center">
          {SponImages}
        </Grid>
      </Fade>
      <Fade bottom>
        <h2 className={classes.header}>Our Previous NGO Partners</h2>
        <Grid container spacing={3} justify="center">
          {NgoImages}
        </Grid>
      </Fade>
    </div>
  );
}
