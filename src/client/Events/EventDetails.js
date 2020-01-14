import React from "react";
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";

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
  return (
    <div className={classes.root}>
      <Navbar />
      {/* <img
        src="/Images/event/case_study_edit.jpg"
        alt="case_study_image"
        className={classes.background}
      /> */}
      <div className={classes.eventDetails}>
        <Grid container>
          <Grid item xs={12}>
            <h1 className={classes.header}>Case Study</h1>
          </Grid>
          <Grid item xs={12}>
            <h1 className={classes.header}>Prize Worth:{"  "}</h1>
            <p className={classes.prizeValue}>₹ 20,000</p>
          </Grid>
          <Grid item xs={12}>
            <p className={classes.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              dignissimos rerum debitis numquam officiis, illum dolorum omnis
              culpa explicabo? Error, culpa natus! Tenetur architecto laborum
              dolores totam dolorem beatae consequuntur nobis voluptatibus quo
              ab aspernatur eius, ratione itaque nostrum placeat ad. Ex, quo
              ducimus. Suscipit soluta neque amet ipsam nulla ex delectus saepe
              assumenda commodi numquam, cumque fugiat accusantium repudiandae.
              Debitis unde a ipsum dolorum cupiditate animi nemo voluptate
              aspernatur labore reiciendis sint eius quibusdam provident quo
              temporibus accusantium officia dolore, alias nulla. Atque et
              corrupti incidunt quod corporis nisi dignissimos, dolores magni
              alias ipsam, fugiat repudiandae veniam tenetur numquam.
            </p>
          </Grid>
          <Grid item xs={12}>
            <h1 className={classes.header}>Sponsored By:</h1>
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
          </Grid>

          <Grid item xs={12}>
            <ul className={classes.description}>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto quia nulla saepe nostrum at soluta atque quisquam
                autem fugit debitis.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto quia nulla saepe nostrum at soluta atque quisquam
                autem fugit debitis.
              </li>
            </ul>
          </Grid>
          <Grid item xs={12}>
            <h1 className={classes.header}>Co-ordinator:</h1>

            <p className={classes.description}>
              Siddharth
              <br />
              +91-8145596657
              <br />
              sid.socialsummit@gmail.com
              <br />
              Siddharth
              <br />
              +91-8145596657
              <br />
              sid.socialsummit@gmail.com
            </p>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default EventDetails;
