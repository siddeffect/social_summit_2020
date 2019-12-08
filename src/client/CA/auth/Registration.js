import React from "react";
import {
  TextField,
  MenuItem,
  FormControl,
  createMuiTheme,
  ThemeProvider,
  Button
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const genders = [
  {
    value: "M",
    label: "Male"
  },
  {
    value: "F",
    label: "Female"
  },
  {
    value: "O",
    label: "Others"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    width: "60vw",
    height: "60vh",
    margin: "auto",
    display: "flex",
    flexDirection: "row"
  },
  image: {
    flexGrow: "1"
  },
  registrationForm: {
    flexGrow: "1"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  wideTextField: {
    width: 400
  },
  menu: {
    width: 200
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#00a650" }
  }
});

function Registration() {
  const classes = useStyles();

  const [gender, setGender] = React.useState("");
  const handleGender = event => {
    setGender(event.target.value);
  };

  const [college, setCollege] = React.useState("");
  const handleCollege = event => {
    setCollege(event.target.value);
  };

  const [state, setState] = React.useState("");
  const handleState = event => {
    setState(event.target.value);
  };

  const handleSubmit = event => {
    console.log({
      college: college,
      state: state,
      gender: gender
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.image}>
        <img src="/Images/ca_hero_form.png" alt="ca_image"></img>
      </div>
      <div className={classes.registrationForm}>
        <h1>
          Register as <br />
          <strong>Social Attaché</strong>
        </h1>
        <form className={classes.container} noValidate autoComplete="off">
          <div className={classes.input}>
            <TextField
              required
              id="standard-name-required"
              label="Name"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              required
              id="standard-select-gender"
              select
              label="Gender"
              className={classes.textField}
              value={gender}
              onChange={handleGender}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              margin="normal"
            >
              {genders.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="standard-email-required"
              label="Email"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              required
              id="standard-contact-required"
              label="Contact"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              required
              id="standard-password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
            />
            <FormControl fullWidth className={classes.margin}>
              <TextField
                required
                id="standard-select-college"
                select
                label="College"
                className={`${classes.textField} ${classes.wideTextField}`}
                value={college}
                onChange={handleCollege}
                placeholder="College"
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                margin="normal"
              >
                {genders.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            <FormControl fullWidth className={classes.margin}>
              <TextField
                required
                id="standard-select-state"
                select
                label="College State"
                className={`${classes.textField} ${classes.wideTextField}`}
                value={state}
                onChange={handleState}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                margin="normal"
              >
                {genders.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            <TextField
              required
              id="standard-branch-year-required"
              label="Branch and Year"
              className={classes.textField}
              type="Branch and year"
              margin="normal"
            />
          </div>
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="primary"
              className={classes.margin}
              onClick={handleSubmit}
            >
              Register
            </Button>
          </ThemeProvider>
        </form>
      </div>
    </div>
  );
}

export default Registration;
