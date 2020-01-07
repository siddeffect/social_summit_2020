import React from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import { Fab, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { participantSignOut } from "../../../store/actions/participantAction";

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

const SignedInLink = props => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          onClick={props.participantSignOut}
        >
          Log Out
        </Button>
        <Link to="/">
          <Fab size="small" aria-label="initials">
            SS
          </Fab>
        </Link>
      </div>
    </ThemeProvider>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    participantSignOut: () => dispatch(participantSignOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLink);
