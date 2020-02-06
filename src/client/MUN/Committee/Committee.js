import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#e5e5e5",
    padding: "10rem 0 0 0",
    alignItem: "center",
    justifyContent: "center",
    "@media(min-width:1030px) and (max-width:1600px)": {
      padding: "2rem 0 2rem 0"
    },
    "@media (max-width:640px)": {
      padding: "5rem 0 5rem 0"
    },
    "@media (max-width:320px)": {
      padding: "2rem 0 2rem 0"
    }
  },
  header: {
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "4rem",
    color: "#000",
    letterSpacing: "-.03rem",
    marginBottom: "4rem",
    fontWeight: "600",
    lineHeight: "1.2",
    "@media(min-width:500px) and (max-width:605px)": {
      fontSize: "44px",
      fontWeight: 550,
      letterSpacing: 0,
      marginBottom: 0
    },
    "@media(min-width:350px) and (max-width:420px)": {
      fontSize: "32px"
    },
    "@media (max-width:320px)": {
      fontSize: "32px"
    },
    "@media (min-width: 1030px) and (max-width: 1600px)": {}
  },
  unepLogo: {
    margin: "4vh auto 4vh auto",
    height: "30vh",
    "@media (max-width:640px)": {
      height: "20vh",
      margin: "4vh auto 2vh auto"
    },
    "@media (min-width:1030px) and (max-width:1600px)": {
      height: "25vh"
    }
  },
  leadContent: {
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontWeight: "300",
    fontSize: "1.6rem",
    lineHeight: "1.538",
    marginBottom: "3.6rem",
    maxWidth: "70vw",
    color: "#000",
    margin: "1rem auto auto auto",
    "@media(min-width:1030px) and (max-width:1600px)": {
      marginBottom: "1.6rem",
      fontSize: "1.4rem"
    },
    "@media(min-width:500px) and (max-width:605px)": {
      fontSize: "22px",
      maxWidth: "90vw",
      marginBottom: "2.5rem"
    },
    "@media(min-width:400px) and (max-width:420px)": {
      fontSize: "20px",
      maxWidth: "85vw",
      marginBottom: "0.3%",
      fontWeight: 1.4,
      lineHeight: "1.2"
    },
    "@media(min-width:350px) and (max-width:380px)": {
      fontSize: "18.5px",
      maxWidth: "85vw",
      marginBottom: "0.3%",
      fontWeight: 1.4,
      lineHeight: "1.2"
    },
    "@media(min-width:385px) and (max-width:400px)": {
      fontSize: "20px",
      maxWidth: "85vw",
      marginBottom: "0.3%",
      fontWeight: 1.4,
      lineHeight: "1.3"
    },
    "@media (max-width:320px)": {
      fontSize: "17px",
      maxWidth: "85vw",
      marginBottom: "0.3%",
      fontWeight: 1.4,
      lineHeight: "1.2"
    }
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fade bottom>
        <label className={classes.header}>Committee</label>
        <div>
          <img
            src="/Images/mun/unep.png"
            alt="unep_logo"
            className={classes.unepLogo}
          />
        </div>
        <p className={classes.leadContent}>
          The United Nations Environment Programme is an United Nations agency
          that makes decisions and policies on global environmental issues
          around the world. They assess environmental trends on many levels of
          governance in order to influence nations to enact environmental
          policies that are sustainable. Overall, the UNEP seeks to create a
          sustainable future by addressing global environmental problems. Its
          activities are related to areas including climate change, ecosystem
          management, environmental governance, and resource efficiency; amongst
          other topics.
        </p>
      </Fade>
    </div>
  );
}
