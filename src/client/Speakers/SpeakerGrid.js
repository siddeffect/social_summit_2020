import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SpeakerCard from "./SpeakerCard";
import speakerData from "./SpeakerData";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "60%",
    margin: "15vh auto",
    textAlign: "center"
  },
  line: {
    position: "relative",
    background: "#46A651",
    width: "100px",
    height: "4px",
    marginTop: "8px",
    marginBottom: "20px",
    display: "block"
  },
  header: {
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "3rem",
    textTransform: "uppercase",
    color: "#000",
    letterSpacing: "-.03rem",
    fontWeight: "600",
    lineHeight: "1.2",
    marginBottom: "2vh",
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

export default function Speakers() {
  const classes = useStyles();
  const SpeakerGridList = speakerData.map(data => (
    <Grid item xs={12} md={4} key={data.name}>
      <SpeakerCard
        name={data.name}
        designation={data.designation}
        shortDesignation={data.shortDesignation}
        photoRoute={data.photoRoute}
        socialHandleLink={data.socialHandleLink}
        route={data.route}
      />
    </Grid>
  ));
  return (
    <div className={classes.root}>
      <h1 className={classes.header}>Speakers</h1>
      <hr className={classes.line} />
      <Grid container justify="center" spacing={3}>
        {SpeakerGridList}
      </Grid>
    </div>
  );
}
