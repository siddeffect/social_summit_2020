import React from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import RegisterDialog from "./../Register/MUNRegister";

const useStyles = makeStyles(theme => ({
  background: {
    width: "100%",
    height: "100vh",
    position: "absolute",
    zIndex: "-99",
    objectFit: "cover"
  },
  mainContent: {
    paddingTop: "10vh",
    paddingLeft: "10vw"
  },
  header: {
    color: "#ffffff",
    fontSize: "4.5em",
    "@media (min-width:1360px) and (max-width:1440px)": {
      fontSize: "4em"
    },
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontWeight: 600,
    "@media (max-width:780px)": {
      fontSize: "2.4em"
    }
  },
  content: {
    margin: "10px 50px 0 0",
    maxWidth: "750px",
    color: "#eaeaea",
    fontSize: "1.3em",
    fontFamily: ["'Roboto'", "sans-serif"].join(","),
    "@media (max-width:780px)": {
      fontSize: "16px"
    }
  },
  logo: {
    height: "20rem",
    marginBottom: "-5vh"
  }
}));

function MUNHome() {
  const classes = useStyles();

  return (
    <div>
      <img
        src="/Images/mun/map.jpg"
        alt="mun_image"
        className={classes.background}
      />
      <Navbar />
      <div className={classes.mainContent}>
        <img
          src="/Images/mun/mun_logo.svg"
          alt="mun_logo"
          className={classes.logo}
        />
        <div className={classes.header}>Summit-MUN</div>
        <div className={classes.content}>
          Social Summit Model United Nations is a simulation of the United
          Nations spanning over two days where delegates gain a great exposure
          and knowledge of diplomacy, international relations, and the inner
          workings of the United Nations. Currently, in it's Second Edition,
          Summit MUN has set a certain standard for the conduct of MUNs with its
          innovative themes, focus on appurtenant issues and remarkable level of
          debate. Moreover, through debating issues that confront world leaders
          and drafting resolutions, one can enhance their critical thinking,
          public speaking and leadership skills.
        </div>
        <div>
          <RegisterDialog />
        </div>
      </div>
    </div>
  );
}

export default MUNHome;
