import React from "react";
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import eventData from "./events_data";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  eventDetails: {
    // eslint-disable-next-line
    backgroundImage: "url(" + "/Images/Subtle-Prism.svg" + ")",
    padding: "15vh 10vw 15vh 10vw"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  header: {
    color: "#eee",
    width: "fit-content",
    textTransform: "uppercase",
    borderBottom: "3px solid #00a650"
  },
  prizeValue: {
    color: "#e2e2e2",
    fontSize: "2rem",
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontWeight: 600
  },
  description: {
    color: "#e2e2e2",
    fontSize: "1.6rem",
    fontFamily: ["'ibm plex serif'", "serif"].join(",")
  },
  button: {
    margin: "4vh auto 4vh auto",
    fontSize: "1.4rem",
    fontWeight: 600
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#00a650" }
  }
});

function EventDetails(props) {
  const classes = useStyles();
  const { eventType } = props;

  const perks = eventData[eventType].perks.map((item, i) => {
    return <li key={i}>{item}</li>;
  });

  const coordinators = eventData[eventType].coordinator.map((item, i) => {
    return (
      <span key={i}>
        {item.name}
        <br />
        {item.contact}
        <br />
        {item.email}
      </span>
    );
  });

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.eventDetails}>
        <Grid container>
          <Grid item xs={12}>
            <h1 className={classes.header}>{eventData[eventType].name}</h1>
          </Grid>
          <Grid item xs={12}>
            <h1 className={classes.header}>Prize Worth:{"  "}</h1>
            <p className={classes.prizeValue}>
              {eventData[eventType].prizeWorth}
            </p>
          </Grid>
          <Grid item xs={12}>
            <p className={classes.description}>
              {eventData[eventType].description}
            </p>
          </Grid>
          <Grid item xs={12}>
            <h1 className={classes.header}>
              Sponsored By:{eventData[eventType].sponsoredBy}
            </h1>
          </Grid>
          <Grid item xs={12}>
            <ThemeProvider theme={theme}>
              <Button
                size="large"
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Register
              </Button>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12}>
            <h1 className={classes.header}>Perks:</h1>
            <ul className={classes.description}>{perks}</ul>
          </Grid>
          <Grid item xs={12}>
            <h1 className={classes.header}>Co-ordinator:</h1>

            <p className={classes.description}>{coordinators}</p>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default EventDetails;
