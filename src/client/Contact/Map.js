import React from "react";
import Aux from "../../hoc/Aux";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    boxSizing: "border-box",
    marginTop: "2.5vh"
  },
  mapouter: {
    position: "relative",
    textAlign: "right",
    height: "450px",
    width: "100vw"
  },
  gmapCanvas: {
    overflow: "hidden",
    background: "none!important",
    height: "450px",
    width: "100w"
  }
}));

export default function Map() {
  const classes = useStyles();
  return (
    <Aux>
      <Fade bottom>
        <div className={classes.root}>
          <div className={classes.mapouter}>
            <div className={classes.gmapCanvas}>
              <iframe
                width="100%"
                height="450"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=mac%20iit%20roorke%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                title="gmap"
              ></iframe>
            </div>
          </div>
        </div>
      </Fade>
    </Aux>
  );
}
