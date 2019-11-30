import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center"
  },
  comingSoon: {
    height: "70vh",
    margin: "4vh 0 0 0"
  },
  header: {
    color: "#319788",
    fontSize: "3em",
    textAlign: "center"
  }
}));

function ComingSoon() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        src="/Images/coming_soon.svg"
        alt="coming soon"
        className={classes.comingSoon}
      ></img>
      <h1 className={classes.header}>Stay Tuned...</h1>
    </div>
  );
}

export default ComingSoon;
