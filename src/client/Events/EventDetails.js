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
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  eventDetails: {
    // eslint-disable-next-line
    background: "url(" + "/Images/Subtle-Prism.svg" + ")",
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
    borderBottom: "3px solid #00a650",
    fontSize: "3rem"
  },
  subHeader: {
    color: "#eee",
    width: "fit-content"
  },
  description: {
    color: "#a8a8a8",
    fontSize: "1.6rem",
    fontFamily: ["'ibm plex serif'", "serif"].join(",")
  },
  button: {
    margin: "2vh auto 2vh auto",
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

  let points = null;
  if (eventData[eventType].sponsoredBy != null) {
    points = eventData[eventType].sponsoredBy.points.map((item, i) => {
      return <li key={i}>{item}</li>;
    });
  }

  const coordinators = eventData[eventType].coordinator.map((item, i) => {
    return (
      <span key={i}>
        {item.name}
        <br />
        +91-{item.contact}
        <br />
        {item.email}
      </span>
    );
  });

  let caseStudyProblemStatements = null;
  if (eventData[eventType].problemStatements) {
    caseStudyProblemStatements = eventData[eventType].problemStatements.map(
      (item, i) => {
        return (
          <Grid item xs={12} key={i}>
            <Fade bottom>
              <p className={classes.description}>{item.type}</p>
              <ThemeProvider theme={theme}>
                <Button
                  href={item.problemStatememt}
                  target="_blank"
                  color="primary"
                >
                  Click Here
                </Button>
              </ThemeProvider>
              <br />
            </Fade>
          </Grid>
        );
      }
    );
  }

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.eventDetails}>
        <Grid container>
          <Grid item xs={12}>
            <Fade bottom>
              <h1 className={classes.header}>{eventData[eventType].name}</h1>
            </Fade>
          </Grid>
          <Grid item xs={12}>
            <Fade bottom>
              <h1 className={classes.subHeader}>
                Prizes Worth: {eventData[eventType].prizeWorth}
              </h1>
            </Fade>
          </Grid>
          <Grid item xs={12}>
            <Fade bottom>
              <h1 className={classes.subHeader}>Date:</h1>
              <p className={classes.description}>
                {eventData[eventType].heldDate}
              </p>
            </Fade>
          </Grid>
          <Grid item xs={12}>
            <Fade bottom>
              <p className={classes.description}>
                {eventData[eventType].description}
              </p>
            </Fade>
          </Grid>
          {caseStudyProblemStatements}
          {!eventData[eventType].sponsoredBy ? null : (
            <Grid item xs={12}>
              <Fade bottom>
                <h1 className={classes.subHeader}>
                  {eventData[eventType].sponsoredBy.header}
                </h1>
                <p className={classes.description}>{points}</p>
              </Fade>
            </Grid>
          )}

          <ThemeProvider theme={theme}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs={12} md={2}>
                <Fade bottom>
                  <Button
                    size="large"
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    href={eventData[eventType].registrationLink}
                    target="_blank"
                  >
                    Register
                  </Button>
                </Fade>
              </Grid>
              <Grid item xs={12} md={2}>
                <Fade bottom>
                  <Button
                    size="large"
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    href={eventData[eventType].ruleBook}
                    target="_blank"
                  >
                    RuleBook
                  </Button>
                </Fade>
              </Grid>
            </Grid>
          </ThemeProvider>
          <Grid item xs={12}>
            <Fade bottom>
              <h1 className={classes.subHeader}>Perks:</h1>
              <ul className={classes.description}>{perks}</ul>
            </Fade>
          </Grid>
          <Grid item xs={12}>
            <Fade bottom>
              <h1 className={classes.subHeader}>Dead Line:</h1>
              <p className={classes.description}>
                {eventData[eventType].registrationDeadLine}
              </p>
            </Fade>
          </Grid>
          <Grid item xs={12}>
            <Fade bottom>
              <h1 className={classes.subHeader}>Co-ordinator:</h1>
              <p className={classes.description}>{coordinators}</p>
            </Fade>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default EventDetails;
