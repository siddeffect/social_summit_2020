import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "10vh 10vw"
  },
  section: {
    padding: "5vh 0",
    margin: "5vh 0",
    borderRadius: "12px",
    border: "solid #00a650"
  },
  header: {
    textAlign: "center",
    fontFamily: ['"ibm plex serif"', "sarif"].join(","),
    fontWeight: 600,
    fontSize: "2.5rem",
    "@media (max-width:600px)": {
      fontSize: "1.5rem"
    }
  },
  list: {
    display: "flex",
    flexDirection: "column",
    fontSize: "1.2rem",
    color: "#99999",
    fontFamily: ['"ibm plex sarif"', "sarif"].join(",")
  },
  buttonGrid: {
    textAlign: "center"
  },
  button: {
    width: "20rem",
    height: "4rem",
    color: "#fff",
    fontSize: "1.4rem",
    "@media (min-width: 1030px) and (max-width: 1600px)": {
      width: "16rem",
      height: "3.5rem",
      fontSize: "1rem"
    },
    "@media (max-width:640px)": {
      width: "15rem",
      height: "2.1rem",
      fontSize: "0.8rem",
      marginTop: "0.5em"
    }
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#00a650" }
  }
});

function Benefits() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Fade bottom>
        <Grid
          container
          alignItems="center"
          justify="center"
          className={classes.section}
        >
          <Grid item xs={12} md={6}>
            <h1 className={classes.header}>For Company/Investors:</h1>
            <ul className={classes.list}>
              <li>
                The right platform to channelize CSR by scrutinizing NGO’s
                through their works.
              </li>
              <li>New marketing opportunities through partnership with NGOs</li>
              <li>To improve social and environmental performance.</li>
              <li>
                Face-to-face interaction with the socially active student body.
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6} className={classes.buttonGrid}>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                href="https://docs.google.com/forms/d/e/1FAIpQLSdAhrH_-lAXXfHfVA2zD2tBO0ADWojw3-20wHer-fnwRyvbUQ/viewform?usp=sf_link"
                target="_blank"
              >
                Register
              </Button>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Fade>
      <Fade bottom>
        <Grid
          container
          alignItems="center"
          justify="center"
          className={classes.section}
        >
          <Grid item xs={12} md={6} className={classes.buttonGrid}>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                href="https://docs.google.com/forms/d/e/1FAIpQLSf2NcbmvW2K_6UTNO40UFX1psdL_Y_3ZPJKxLSIGK7yztI4Pg/viewform?usp=sf_link"
                target="_blank"
              >
                Register
              </Button>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} md={6}>
            <h1 className={classes.header}>For Organisations (NGOs):</h1>
            <ul className={classes.list}>
              <li>
                Good opportunity to collaborate with corporates and raise funds
              </li>
              <li>Volunteers from different academic backgrounds</li>
              <li>Great networking opportunity</li>
              <li>
                Innovative ideas for future projects from the highly involved
                student community
              </li>
            </ul>
          </Grid>
        </Grid>
      </Fade>
      <Fade bottom>
        <Grid
          container
          alignItems="center"
          justify="center"
          className={classes.section}
        >
          <Grid item xs={12} md={6}>
            <h1 className={classes.header}>For Students:</h1>
            <ul className={classes.list}>
              <li>
                Students will have an opportunity to get exposure to the
                corporate world.
              </li>
              <li>Development of intrapersonal and interpersonal skills</li>
              <li>Key networking and future internship opportunities</li>
              <li>
                Gain working experience with NGOs on the ideas, incompetence to
                work upon individually
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6} className={classes.buttonGrid}>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                href="https://drive.google.com/open?id=1k1rPQbJt_5cW1PCtKWbGPzZeSydFm6OrJlK9Gobsgdc"
                target="_blank"
              >
                Register
              </Button>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Fade>
    </div>
  );
}

export default Benefits;
