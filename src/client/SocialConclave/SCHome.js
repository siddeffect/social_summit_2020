import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  background: {
    width: "100%",
    height: "100vh",
    position: "relative",
    objectFit: "cover"
  }
}));

function MUNHome() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        src="/Images/SocialConclave/SocialConclave.svg"
        alt="mun_image"
        className={classes.background}
      />
    </div>
  );
}

export default MUNHome;
