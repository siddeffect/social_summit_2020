import React, { Component } from "react";
import {
  withStyles,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import { connect } from "react-redux";
import { signIn } from "../../../store/actions/authAction";
import { Redirect } from "react-router-dom";
import Navbar from "../CALayout/Navbar";
import { Grid, TextField, Button, Hidden } from "@material-ui/core";

const styles = theme => ({
  formHeader: {
    color: "#212121",
    fontSize: "3rem",
    marginTop: "2rem"
  },
  textField: {
    marginBottom: "1.5rem"
  }
});

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#00a650" }
  }
});

class SignIn extends Component {
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
    const { classes, authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/campusambassador/dashboard" />;

    return (
      <div style={{ background: "#FFF6E3" }}>
        <ThemeProvider theme={theme}>
          <Navbar style={{ margin: "10vh 0 20vh 0" }} />
          <Grid container justify="center">
            <Grid container justify="center">
              <label className={classes.formHeader}>Sign In</label>
            </Grid>
            <Grid item xs={6} alignContent="center" container justify="center">
              <form
                onSubmit={this.handleSubmit}
                style={{ background: "#FFF6E3" }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
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
              {/* </Grid> */}
            </Grid>
            <Hidden mdDown>
              <Grid item xs={6}>
                <div className="col hide-on-small-only l7 m7">
                  <img src="/Images/ca_hero_form.png" alt="ca_image" />
                </div>
              </Grid>
            </Hidden>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}
const mapStateToProp = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(withStyles(styles)(SignIn));
