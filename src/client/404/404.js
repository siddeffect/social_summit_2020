import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center"
  },
  comingSoon: {
    height: "40vh",
    margin: "10vh 0 0 0"
  }
}));

function PageNotFound() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        src="/Images/404.svg"
        alt="coming soon"
        className={classes.comingSoon}
      ></img>
    </div>
  );
}

export default PageNotFound;
