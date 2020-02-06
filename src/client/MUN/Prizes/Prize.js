import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  root: {
    height: "24vh",
    textAlign: "center",
    backgroundColor: "#1A1A1A",
    padding: "1rem 0 1rem 0",
    alignItem: "center",
    justifyContent: "center",
    "@media (min-width:390px) and (max-width:600px)": {
      height: "15vh"
    },
    "@media (min-width:320px) and (max-width:365px)": {
      height: "17.5vh"
    },
    "@media (min-width:1030px) and (max-width:1600px)": {
      height: "28vh"
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
    "@media (max-width:605px)": {
      fontSize: "32px",
      fontWeight: 550,
      letterSpacing: 0,
      marginBottom: 0
    },
    "@media (min-width:1030px) and (max-width:1600px)": {
      fontSize: "3rem"
    }
  },
  downloadRuleBook: {
    marginTop: "2rem",
    "@media (max-width:640px)": {
      marginTop: "0.5rem"
    }
  },
  prizeText: {
    verticalAlign: "middle",
    color: "#eaeaea",
    fontSize: "4em",
    fontFamily: ["'Roboto'", "sans-serif"].join(","),
    "@media (max-width:640px)": {
      fontSize: "1rem"
    },
    "@media (min-width:1030px) and (max-width:1600px)": {
      fontSize: "3rem"
    }
  },
  downloadIcon: {
    verticalAlign: "middle",
    width: "5rem",
    margin: "auto 1rem auto auto",
    "@media (max-width:640px)": {
      width: "2rem"
    }
  }
}));

export default function Prize() {
  const classes = useStyles();

  return (
    <Fade bottom>
      <div className={classes.root}>
        <label className={classes.header}>Prize Worth</label>
        <div className={classes.downloadRuleBook}>
          <img
            src="/Images/icons/trophy.svg"
            alt="download_icon"
            className={classes.downloadIcon}
          />
          <span className={classes.prizeText}>30,000 ₹</span>
        </div>
      </div>
    </Fade>
  );
}
