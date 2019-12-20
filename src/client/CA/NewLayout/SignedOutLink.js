import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

function SignedOutLink() {
  const classes = useStyles();
  return (
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
  );
}

export default SignedOutLink;
