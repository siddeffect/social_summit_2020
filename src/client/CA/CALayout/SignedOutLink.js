import React from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(2)
    }
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#00a650" }
  }
});

function SignedOutLink() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Link to="/campusambassador/signup">
          <Button variant="contained" color="primary">
            SignUp
          </Button>
        </Link>
        <Link to="/campusambassador/signin">
          <Button variant="contained" color="primary">
            SignIn
          </Button>
        </Link>
      </div>
    </ThemeProvider>
  );
}

export default SignedOutLink;
