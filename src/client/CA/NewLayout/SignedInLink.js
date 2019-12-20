import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authAction";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

const SignedInLink = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={props.signOut}>
        Log Out
      </Button>
      <Link to="/">
        <Fab size="small" aria-label="initials">
          {props.profile.initials}
        </Fab>
      </Link>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLink);
