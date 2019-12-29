import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: "85vh",
    textAlign: "center",
    backgroundColor: "#00a650",
    padding: "5rem 0 0 0",
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
  memberImg: {
    margin: "1rem auto auto auto",
    height: "30vh",
    borderRadius: "12px",
    marginBottom: "4vh"
  },
  board: {
    padding: "4vh 10vw 0 10vw",
    fontFamily: ["'ibm plex serif'", "serif"].join(",")
  },
  bio: {
    color: "#fff",
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "1.5rem"
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fade bottom>
        <label className={classes.header}>Executive Board.</label>
        <div className={classes.board}>
          <Grid container justify="center" spacing={10}>
            <Grid item xs={12} md={6}>
              <img
                src="/Images/mun/ananya.jpg"
                alt="sample"
                className={classes.memberImg}
              />
              <div className={classes.bio}>
                Shivam Bhandari, is a Fashion Technology student currently in
                his 3rd year from National Institute of Fashion Technology,
                Kangra. He has participated in various MUNs in different
                capacities. He is an active member of Delhi NCR MUN circuit
                since 2014. Despite being from a non-political background, he
                has a huge drift towards Indian and international politics.
                Shivam has a great experience of conducting MUNs and has served
                on boards of many such conferences.
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src="/Images/mun/shivam.jpg"
                alt="sample"
                className={classes.memberImg}
              />
              <div className={classes.bio}>
                Shivam Bhandari, is a Fashion Technology student currently in
                his 3rd year from National Institute of Fashion Technology,
                Kangra. He has participated in various MUNs in different
                capacities. He is an active member of Delhi NCR MUN circuit
                since 2014. Despite being from a non-political background, he
                has a huge drift towards Indian and international politics.
                Shivam has a great experience of conducting MUNs and has served
                on boards of many such conferences.
              </div>
            </Grid>
          </Grid>
        </div>
      </Fade>
    </div>
  );
}
