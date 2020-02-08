import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#00a650",
    padding: "5rem 0 0 0",
    alignItem: "center",
    justifyContent: "center",
    "@media (min-width:1030px) and (max-width:1600px)": {
      height: "100vh"
    },
    "@media (max-width:640px)": {
      padding: "4vh 0 0 0 ",
      height: "120vh"
    },
    "@media (max-width:380px)": {
      padding: "4vh 0 0 0 ",
      height: "130vh"
    },
    "@media (max-width:320px)": {
      padding: "4vh 0 0 0 ",
      height: "155vh"
    }
  },
  header: {
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "4rem",
    color: "#fff",
    letterSpacing: "-.03rem",
    fontWeight: "600",
    lineHeight: "1.2",
    "@media (max-width:640px)": {
      fontSize: "2rem"
    },
    "@media (min-width:500px) and (max-width:605px)": {
      fontSize: "3rem",
      lineHeight: "1.5"
    }
  },
  memberImg: {
    margin: "1rem auto auto auto",
    height: "30vh",
    borderRadius: "12px",
    marginBottom: "1vh",
    "@media (max-width:640px)": {
      height: "15vh"
    },
    "@media (min-width:1030px) and (max-width:1600px)": {
      height: "20vh",
      borderRadius: "8px"
    }
  },
  board: {
    padding: "4vh 15vw 0 15vw",
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    "@media (max-width:640px)": {
      padding: "0 5vw 0 5vw"
    }
  },
  bio: {
    marginTop: "4vh",
    color: "#fff",
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "1.5rem",
    "@media (min-width:1030px) and (max-width:1600px)": {
      fontSize: "1.3rem"
    },
    "@media (max-width:500px)": {
      fontSize: "1rem",
      marginTop: "2vh"
    },
    "@media (min-width:500px) and (max-width:605px)": {
      fontSize: "1.5rem"
    }
  },
  chairperson: {
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "2rem",
    color: "#fff",
    fontWeight: 600,
    "@media (max-width:5000px)": {
      fontSize: "1.5rem"
    },
    "@media (min-width:500px) and (max-width:605px)": {
      fontSize: "2rem"
    }
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fade bottom>
        <label className={classes.header}>Executive Board</label>
        <div className={classes.board}>
          <Grid container justify="center" spacing={4}>
            <Grid item xs={12} md={6}>
              <img
                src="/Images/mun/ananya.jpg"
                alt="sample"
                className={classes.memberImg}
              />
              <div>
                <label className={classes.chairperson}>Chairperson</label>
              </div>
              <div className={classes.bio}>
                Ananya Bhardwaj, is a Law student currently in her 1st year from
                Amity Law School,Noida.She has participated in various MUNs in
                different capacities. She is an active member of Delhi NCR MUN
                Circuit since 2015. She has a huge drift towards Indian and
                International politics. Ananya has a great experience of
                conducting MUNs and has served on boards of many such
                conferences and was the director general and Vice President of
                Debating Society in her school, Delhi Public School Greater
                Faridabad.
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src="/Images/mun/shivam.jpg"
                alt="sample"
                className={classes.memberImg}
              />
              <div>
                <label className={classes.chairperson}>Chairperson</label>
              </div>
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
