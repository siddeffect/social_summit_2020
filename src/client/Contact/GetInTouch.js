import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CallIcon from "@material-ui/icons/Call";
import Location from "@material-ui/icons/LocationOnOutlined";
import MailIcon from "@material-ui/icons/MailOutline";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "15vh"
  },
  header: {
    textAlign: "center",
    position: "relative",
    fontSize: "45px",
    lineHeight: "40px",
    fontFamily: ["'ibm plex serif'", "sarif"].join(","),
    letterSpacing: "-0.03rem",
    fontWeight: "600",
    color: "#2d3034",
    textTransform: "uppercase",
    "@media(max-width:600px)": {
      fontSize: "40px"
    }
  },
  line: {
    position: "absolute",
    background: "#46A651",
    width: "80px",
    height: "4px",
    bottom: "-1",
    left: "50%",
    marginLeft: "-47px",
    marginTop: "0",
    boxSizing: "border-box"
  },
  box: {
    paddingTop: "30px",
    textAlign: "center"
  },
  info: {
    paddingBottom: "10px"
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    flexDirection: "row",
    boxSizing: "border-box"
  },
  col: {
    position: "relative",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    "@media (max-width:600px)": {
      paddingBottom: "15px"
    }
  },
  icon: {
    color: "#46A651",
    fontSize: "35px",
    marginBottom: "12px"
  },
  para: {
    marginBottom: "10px",
    fontFamily: "Rubik,sans-sarif",
    textAlign: "center",
    color: "#2d3034",
    fontSize: "18px"
  }
}));

function ContactHome() {
  const classes = useStyles();

  return (
    <Fade bottom>
      <div className={classes.root}>
        <div className={classes.container}>
          <h1 className={classes.header}> Get in touch with us</h1>
          <hr className={classes.line} />
        </div>
        <div className={classes.box}>
          <div className={classes.info}>
            <div className={classes.row}>
              <div className={classes.col}>
                <Location className={classes.icon} />
                <p className={classes.para}>
                  {" "}
                  NSS Office, 2nd floor,
                  <br /> Multi Activity Centre (MAC)
                </p>
              </div>
              <div className={classes.col}>
                <CallIcon className={classes.icon} />
                <p className={classes.para}>+91-9572851250</p>
              </div>
              <div className={classes.col}>
                <MailIcon className={classes.icon} />
                <p className={classes.para}>socialsummit.contact@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default ContactHome;
