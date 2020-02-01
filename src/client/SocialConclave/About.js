import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    backgroundColor: " #292a2b",
    padding: "5rem 0 5rem 0",
    alignItem: "center",
    justifyContent: "center",
    "@media(min-width:1030px) and (max-width:1600px)": {
      padding: "3.5rem 0 45px 0"
    },
    "@media (max-width:640px)": {
      padding: "2.5rem 0 3rem 0"
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
    "@media(min-width:1030px) and (max-width:1600px)": {
      marginBottom: "3rem"
    },
    "@media (max-width:640px)": {
      fontSize: "22px",
      maxWidth: "90vw",
      marginBottom: "2.5rem"
    }
  },
  blockquoteWrapper: {
    display: "flex",
    padding: "0 20px"
  },
  blockquote: {
    position: "relative",
    fontFamily: ["'Barlow Condensed'", "sans-serif"].join(","),
    maxWidth: "620px",
    margin: "80px auto",
    alignSelf: "center",
    "@media(max-width:600px)": {
      maxWidth: "320px",
      margin: "50px auto"
    }
  },
  blockquoteHeader: {
    fontFamily: ["'Abril Fatface'", " cursive"].join(","),
    position: "relative",
    color: "#46a651",
    fontSize: " 2.8rem",
    fontWeight: "normal",
    lineHeight: 1,
    margin: 0,
    border: "solid 2px",
    borderRadius: "20px",
    padding: "25px",
    "@media (max-width: 600px)": {
      fontSize: "1.5rem",
      lineHeight: 1,
      borderRadius: "12px"
    },
    ":after": {
      content: "",
      position: "absolute",
      border: "2px solid #46a651",
      borderRadius: "0 50px 0 0",
      width: "60px",
      height: "60px",
      bottom: "-62px",
      left: "50px",
      borderBottom: "none",
      borderLeft: "none",
      zIndex: "3"
    },
    ":before": {
      content: "",
      position: "absolute",
      width: "80px",
      border: "6px solid #292a2b",
      bottom: "-3px",
      left: "50px",
      zIndex: 2
    }
  },

  blockquoteQuoter: {
    position: "relative",
    color: "#ffffff",
    fontSize: "1.3rem",
    fontWeight: 400,
    lineHeight: 1.2,
    margin: 0,
    paddingTop: "15px",
    zIndex: 1,
    marginLeft: "400px",
    paddingLeft: "12px",
    ":first-letter": {
      marginLeft: "-12px"
    },
    "@media(max-width:600px)": {
      marginLeft: "100px"
    }
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <Fade>
      <div className={classes.root}>
        <Fade bottom>
          <div className={classes.blockquoteWrapper}>
            <div className={classes.blockquote}>
              <h1 className={classes.blockquoteHeader}>
                <span style={{ color: "#ffffff" }}>
                  Networking is not about just connecting people. It's about
                  connecting{" "}
                </span>
                people with people, people with ideas, and people with
                opportunities.{" "}
              </h1>
              <h4 className={classes.blockquoteQuoter}>-- Michele Jennae</h4>
            </div>
          </div>
          <p className={classes.leadContent}>
            Social Conclave, the flagship event of National Social Summit 2020
            is a pioneering platform to help people develop their skills and
            their ability to use their resources and those of community to
            resolve problems. Social workers, investors and innovators
            collaborate as a part of multi disciplinary teams understanding
            there are common threads between their partnerships.
          </p>
        </Fade>
        <Fade bottom></Fade>
      </div>
    </Fade>
  );
}
