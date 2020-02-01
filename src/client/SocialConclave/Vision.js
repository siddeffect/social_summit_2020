import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    backgroundColor: "#00a650",
    padding: "10rem 0 10rem 0",
    alignItem: "center",
    justifyContent: "center",
    "@media(min-width:1360px) and (max-width:1450px)": {
      padding: "3.5rem 0 45px 0"
    },
    "@media(min-width:500px) and (max-width:605px)": {
      padding: "7rem 0 5.5rem 0"
    },
    "@media(min-width:400px) and (max-width:420px)": {
      padding: "5rem 0 9rem 0"
    },
    "@media(min-width:365px) and (max-width:380px)": {
      padding: "4rem 0 4.5rem 0"
    },
    "@media(min-width:385px) and (max-width:400px)": {
      padding: "4rem 0 4.5rem 0"
    },
    "@media(min-width:350px) and (max-width:360px)": {
      padding: "2.5rem 0 3rem 0"
    },
    "@media (max-width:320px)": {
      padding: "2.5rem 0 3rem 0"
    }
  },
  header: {
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "4rem",
    color: "#fff",
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
    }
  },
  leadContent: {
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontWeight: "300",
    fontSize: "1.6rem",
    lineHeight: "1.538",
    marginBottom: "3.6rem",
    maxWidth: "70vw",
    color: "rgba(255,255,255,.7)",
    margin: "1rem auto auto auto",
    "@media(min-width:1360px) and (max-width:1400px)": {
      marginBottom: "1.6rem"
    },
    "@media(min-width:1400px) and (max-width:1460px)": {
      marginBottom: "3rem"
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
    <Fade>
      <div className={classes.root}>
        <Fade bottom>
          <label className={classes.header}>Our Vision</label>
          <p className={classes.leadContent}>
            We aspire to develop an ecosystem of Organizations (NGOs), Companies
            (Investors) and College Students, in order to achieve a common goal.
            The agenda includes making students acquainted with the
            methodologies adopted by the NGOs for social work followed by
            understanding their aim and work process and succouring them with
            resources which will, in turn, help the companies to find suitable
            organizations for promising investments. We aim to build a healthy,
            symbiotic relationship for a long, beneficial and smooth functioning
            of all three institutions.
          </p>
        </Fade>
      </div>
    </Fade>
  );
}
