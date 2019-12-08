import React from "react";
import {
  TextField,
  createMuiTheme,
  ThemeProvider,
  Button
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

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

function Login() {
  const classes = useStyles();

  const handleSubmit = event => {
    console.log({});
  };

  return (
    <div className={classes.root}>
      <div className={classes.loginForm}>
        <h1>
          Login as <br />
          <strong>Social Attaché</strong>
        </h1>
        <form className={classes.container} noValidate autoComplete="off">
          <div className={classes.input}>
            <TextField
              required
              id="standard-email-required"
              label="Email"
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
          </div>
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="primary"
              className={classes.margin}
              onClick={handleSubmit}
            >
              Login
            </Button>
          </ThemeProvider>
        </form>
      </div>
      <div className={classes.image}>
        <img src="/Images/ca_hero_form.png" alt="ca_image"></img>
      </div>
    </div>
  );
}

export default Login;
