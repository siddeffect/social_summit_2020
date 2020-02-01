import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    "@media(max-width:600px)": {
      height: "55vh"
    }
  },
  background: {
    width: "100%",
    height: "100vh",
    position: "relative",
    objectFit: "cover",
    "@media(max-width:600px)": {
      height: "55vh"
    }
  }
}));

function SCHome() {
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

export default SCHome;
