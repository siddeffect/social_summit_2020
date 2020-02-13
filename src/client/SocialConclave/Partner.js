import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: "125vh",
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "5rem 0 0 0",
    alignItem: "center",
    justifyContent: "center",
    "@media (min-width:1030px) and (max-width:1600px)": {
      height: "110vh"
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
    color: "#000",
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
  logo: {
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
    marginBottom: "10vh",
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    "@media (max-width:640px)": {
      padding: "0 5vw 0 5vw"
    }
  },
  name: {
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "2rem",
    marginTop: "1rem",
    color: "#0e0e0e",
    fontWeight: 600,
    "@media (max-width:500px)": {
      fontSize: "1.5rem"
    },
    "@media (min-width:500px) and (max-width:605px)": {
      fontSize: "2rem"
    }
  },
  designation: {
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    color: "#00a650",
    fontStyle: "italic",
    fontSize: "1.2rem",
    fontWeight: 600,
    "@media (max-width:500px)": {
      fontSize: "1.5rem"
    },
    "@media (min-width:500px) and (max-width:605px)": {
      fontSize: "2rem"
    }
  }
}));

export default function Partner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fade bottom>
        <label className={classes.header}>CSR Consultancy Partners</label>
        <div className={classes.board}>
          <Grid container justify="center" spacing={4}>
            <Grid item xs={12} md={6}>
              <img
                src="/Images/Partners/CSR/IDCL_india.png"
                alt="sample"
                className={classes.logo}
              />
              <div>
                <label className={classes.name}>IDCL India</label>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src="/Images/Partners/CSR/indiaisus_logo.png"
                alt="sample"
                className={classes.logo}
              />
              <div>
                <label className={classes.name}>Indiaisus</label>
              </div>
            </Grid>
          </Grid>
        </div>
        <label className={classes.header}>Special Guest</label>
        <div className={classes.board}>
          <Grid container justify="center" spacing={4}>
            <Grid item xs={12} md={6}>
              <img
                src="/Images/Speakers/pranav_hebbar-min.jpg"
                alt="sample"
                className={classes.logo}
              />
              <div>
                <label className={classes.name}>Pranav Hebbar</label>
              </div>
              <div>
                <label className={classes.designation}>
                  Co-Founder Make Room India
                </label>
              </div>
            </Grid>
          </Grid>
        </div>
      </Fade>
    </div>
  );
}
