import React, { Component } from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Navbar from "../../Layout/Navbar/Navbar";
import { Grid, Hidden } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  formHeader: {
    color: "#212121",
    fontSize: "3rem",
    marginTop: "2rem"
  },
  textField: {
    marginBottom: "1.5rem"
  }
}));
function ParticipantSignUp(props) {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: { 500: "#00a650" }
    }
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar style={{ margin: "10vh 0 20vh 0" }} />
        <Grid container justify="center">
          <Grid container justify="center">
            <label className={classes.formHeader}>Sign Up</label>
          </Grid>

          <Grid item xs={6} alignContent="center" container justify="center">
            <form style={{ width: "80%" }}>
              <Grid container spacing={3}></Grid>
            </form>
          </Grid>
          <Hidden mdDown>
            <Grid item xs={6} alignContent="center" container justify="center">
              <div>
                <img src="/Images/participants.svg" alt="ca_image" />
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default ParticipantSignUp;
