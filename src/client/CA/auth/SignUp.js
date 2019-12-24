import React, { Component } from "react";
import {
  withStyles,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../../store/actions/authAction";
import Navbar from "../CALayout/Navbar";
import {
  Grid,
  TextField,
  Button,
  Hidden,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  InputAdornment
} from "@material-ui/core";

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
class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    college: "",
    state: "",
    year_branch: "",
    gender: "",
    tshirt: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSelect(value) {
    this.setState({ gender: value });
  }

  handleTshirtSelect(value) {
    this.setState({ tshirt: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { classes, auth, authError } = this.props;
    const { gender, tshirt } = this.state;
    if (auth.uid) return <Redirect to="/campusambassador/dashboard" />;

    return (
      <div style={{ background: "#FFF6E3" }}>
        <ThemeProvider theme={theme}>
          <Navbar style={{ margin: "10vh 0 20vh 0" }} />
          <Grid container justify="center">
            <Grid container justify="center">
              <label className={classes.formHeader}>Sign Up</label>
            </Grid>
            <Hidden mdDown>
              <Grid
                item
                xs={6}
                alignContent="center"
                container
                justify="center"
              >
                <div className="col hide-on-small-only l7 m7">
                  <img src="/Images/ca_hero_form.png" alt="ca_image" />
                </div>
              </Grid>
            </Hidden>
            <Grid item xs={6} alignContent="center" container justify="center">
              <form
                onSubmit={this.handleSubmit}
                style={{ background: "#FFF6E3", width: "80%" }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <TextField
                      required
                      id="firstName"
                      label="First Name"
                      type="text"
                      fullWidth
                      className={classes.textField}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      required
                      id="lastName"
                      label="Last Name"
                      type="text"
                      fullWidth
                      className={classes.textField}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth required>
                      <InputLabel>Select Gender</InputLabel>
                      <Select
                        required
                        id="gender"
                        label="Gender"
                        className={classes.textField}
                        value={gender}
                        onChange={event =>
                          this.handleSelect(event.target.value)
                        }
                      >
                        <MenuItem value="M">Male</MenuItem>
                        <MenuItem value="F">Female</MenuItem>
                        <MenuItem value="N">Prefer not to say</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      required
                      id="email"
                      label="Email Address"
                      type="email"
                      fullWidth
                      className={classes.textField}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      required
                      id="password"
                      label="Password"
                      type="password"
                      fullWidth
                      className={classes.textField}
                      autoComplete="current-password"
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      required
                      inputProps={{ maxLength: 10, minLength: 10 }}
                      label="Enter Phone Number"
                      id="phoneNumber"
                      fullWidth
                      className={classes.textField}
                      onChange={this.handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">+91</InputAdornment>
                        )
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      id="state"
                      label="State"
                      type="text"
                      fullWidth
                      className={classes.textField}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="college"
                      label="College"
                      type="text"
                      fullWidth
                      className={classes.textField}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      required
                      id="year_branch"
                      label="Year and Branch"
                      type="text"
                      fullWidth
                      className={classes.textField}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth required>
                      <InputLabel>Select T-shirt Size</InputLabel>
                      <Select
                        required
                        id="tshirt"
                        label="Tshirt"
                        className={classes.textField}
                        value={tshirt}
                        onChange={event =>
                          this.handleTshirtSelect(event.target.value)
                        }
                      >
                        <MenuItem value="XS">XS</MenuItem>
                        <MenuItem value="S">S</MenuItem>
                        <MenuItem value="M">M</MenuItem>
                        <MenuItem value="L">L</MenuItem>
                        <MenuItem value="XL">XL</MenuItem>
                        <MenuItem value="XXL">XXL</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid container spacing={1} justify="center">
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      size="large"
                      className={classes.button}
                    >
                      Register
                    </Button>
                  </Grid>

                  <Grid container spacing={1}>
                    {authError ? <p>{authError}</p> : null}
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(withStyles(styles)(SignUp));
