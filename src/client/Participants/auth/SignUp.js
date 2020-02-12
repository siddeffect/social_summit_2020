import React, { useState } from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Navbar from "../ParticipantsLayout/Navbar";
import {
  Grid,
  Hidden,
  TextField,
  InputAdornment,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Chip
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { participantSignUp } from "../../../store/actions/participantAction";
import Autocomplete from "@material-ui/lab/Autocomplete";
import eventList from "./eventList";

const useStyles = makeStyles(theme => ({
  formHeader: {
    color: "#212121",
    fontSize: "3rem",
    marginTop: "1rem",
    marginBottom: "1rem",
    fontFamily: ["'Roboto'", "sans-serif"].join(","),
    "@media (max-width:640px)": {
      fontSize: "2rem"
    }
  },
  form: {
    marginBottom: "1.5rem"
  },
  image: {
    "@media (min-width: 1030px) and (max-width: 1600px)": {
      width: "50vw",
      height: "auto"
    }
  }
}));
function ParticipantSignUp(props) {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: { 500: "#00a650" }
    }
  });
  const inputLabel = React.useRef(null);

  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    if (inputLabel.current != null)
      setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const [primaryEvent, setPrimaryEvent] = useState(null);
  const [secondaryEvent, setSecondaryEvent] = useState([]);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    college: "",
    city: "",
    state: "",
    gender: "",
    referralCode: ""
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const data = {
    ...values,
    primaryEvent: primaryEvent,
    secondaryEvent: secondaryEvent
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.participantSignUp(data);
  };

  const { participantAuth, authError } = props;
  if (participantAuth.uid) return <Redirect to="/dashboard" />;

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar style={{ margin: "10vh 0 20vh 0" }} />
        <Grid container justify="center">
          <Grid container justify="center">
            <label className={classes.formHeader}>Sign Up</label>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            alignContent="center"
            container
            justify="center"
          >
            <form
              style={{ width: "90%" }}
              onSubmit={handleSubmit}
              className={classes.form}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    variant="outlined"
                    id="firstName"
                    label="First Name"
                    type="text"
                    fullWidth
                    value={values.firstName}
                    onChange={handleChange("firstName")}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    variant="outlined"
                    id="lasttName"
                    label="Last Name"
                    type="text"
                    fullWidth
                    value={values.lastName}
                    onChange={handleChange("lastName")}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    variant="outlined"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    value={values.email}
                    onChange={handleChange("email")}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    variant="outlined"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    autoComplete="current-password"
                    value={values.password}
                    onChange={handleChange("password")}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    type="number"
                    inputProps={{ maxLength: 10, minLength: 10 }}
                    label="Enter Phone Number"
                    id="phoneNumber"
                    variant="outlined"
                    fullWidth
                    value={values.phoneNumber}
                    onChange={handleChange("phoneNumber")}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+91</InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    variant="outlined"
                    id="college"
                    label="College"
                    type="text"
                    fullWidth
                    value={values.college}
                    onChange={handleChange("college")}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    variant="outlined"
                    id="city"
                    label="City"
                    type="text"
                    fullWidth
                    value={values.city}
                    onChange={handleChange("city")}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    variant="outlined"
                    id="state"
                    label="State"
                    type="text"
                    fullWidth
                    value={values.state}
                    onChange={handleChange("state")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Autocomplete
                    id="select-primary-event"
                    options={eventList}
                    getOptionLabel={option => option}
                    value={primaryEvent}
                    onChange={(event, newValue) => {
                      setPrimaryEvent(newValue);
                    }}
                    renderInput={params => (
                      <TextField
                        {...params}
                        label="Primary Event"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Autocomplete
                    multiple
                    id="tags-filled"
                    options={eventList}
                    freeSolo
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => (
                        <Chip
                          variant="outlined"
                          label={option}
                          {...getTagProps({ index })}
                        />
                      ))
                    }
                    onChange={(event, newValue) => {
                      setSecondaryEvent(newValue);
                    }}
                    value={secondaryEvent}
                    renderInput={params => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Secondary Events"
                        fullWidth
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl variant="outlined" required fullWidth>
                    <InputLabel ref={inputLabel}>Gender</InputLabel>

                    <Select
                      id="gender-select"
                      value={values.gender}
                      variant="outlined"
                      onChange={handleChange("gender")}
                      labelWidth={labelWidth}
                    >
                      <MenuItem value="M">Male</MenuItem>
                      <MenuItem value="F">Female</MenuItem>
                      <MenuItem value="N">Prefer Not to Say</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="text"
                    fullWidth
                    value={values.referralCode}
                    onChange={handleChange("referralCode")}
                    id="referral-code"
                    label="Referral Code"
                    placeholder="CA20XXXX"
                    variant="outlined"
                  />
                </Grid>

                <Grid container justify="center">
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                </Grid>
                <Grid container spacing={1}>
                  {authError ? <p>{authError}</p> : null}
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Hidden mdDown>
            <Grid
              item
              md={6}
              xs={12}
              alignContent="center"
              container
              justify="center"
            >
              <div>
                <img
                  src="/Images/participant.svg"
                  alt="ca_image"
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

const mapStateToProp = state => {
  return {
    participantAuth: state.firebase.auth,
    authError: state.participant.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    participantSignUp: newUser => dispatch(participantSignUp(newUser))
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(ParticipantSignUp);
