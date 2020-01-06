import React, { Component } from "react";
import {
  withStyles,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Navbar from "../../Layout/Navbar/Navbar";
import { Grid, TextField, Button, Hidden } from "@material-ui/core";

const styles = theme => ({
  formHeader: {
    color: "#212121",
    fontSize: "3rem",
    marginTop: "2rem"
  },
  textField: {
    marginBottom: "1rem"
  }
});

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#00a650" }
  }
});

class ParticipantSignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { classes, authError /* auth */ } = this.props;
    // if (auth.uid) return <Redirect to="/campusambassador/dashboard" />;

    return (
      <div>
        <ThemeProvider theme={theme}>
          <Navbar style={{ margin: "10vh 0 20vh 0" }} />
          <Grid container justify="center">
            <Grid container justify="center">
              <label className={classes.formHeader}>Sign In</label>
            </Grid>
            <Grid item xs={6} alignContent="center" container justify="center">
              <form onSubmit={this.handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      id="email"
                      label="Email"
                      type="email"
                      fullWidth
                      className={classes.textField}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      id="password"
                      label="Password"
                      type="password"
                      fullWidth
                      className={classes.textField}
                      autoComplete="current-password"
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid container spacing={1} justify="center">
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      size="large"
                      className={classes.button}
                    >
                      Login
                    </Button>
                  </Grid>
                  <Grid container>{authError ? <p>{authError}</p> : null}</Grid>
                </Grid>
              </form>
            </Grid>
            <Hidden mdDown>
              <Grid item xs={6}>
                <div>
                  <img
                    src="/Images/participants.svg"
                    alt="participant_image"
                    className={classes.image}
                  />
                </div>
              </Grid>
            </Hidden>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(ParticipantSignIn);
