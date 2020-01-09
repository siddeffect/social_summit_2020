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
    paddingTop: "15vh",
    paddingLeft: "10vw",
    height: "85vh"
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
    maxWidth: "800px",
    color: "#eaeaea",
    fontSize: "1.3em",
    fontFamily: ["'Roboto'", "sans-serif"].join(","),
    "@media (min-width:1360px) and (max-width:1440px)": {
      fontSize: "1.2em"
    },
    "@media (max-width:640px)": {
      fontSize: "16px",
      margin: "10px 50px 0 0"
    }
  },
  logo: {
    height: "24rem",
    marginBottom: "-10vh",
    "@media (max-width:640px)": {
      height: "6rem",
      marginBottom: "-4vh"
    },
    "@media (min-width:1030px) and (max-width: 1600px)": {
      height: "16rem"
    }
  },
  downloadRuleBook: {
    marginTop: "2rem",
    "@media (max-width:640px)": {
      marginTop: "0.5rem"
    }
  },
  downloadText: {
    verticalAlign: "middle",
    margin: "auto 1rem auto auto",
    color: "#eaeaea",
    fontSize: "1.4em",
    fontFamily: ["'Roboto'", "sans-serif"].join(","),
    "@media (max-width:640px)": {
      fontSize: "1rem"
    }
  },
  downloadIcon: {
    verticalAlign: "middle",
    width: "3rem",
    marginTop: "10px",
    "@media (max-width:640px)": {
      width: "2rem",
      marginTop: "0px"
    }
  }
}));

function MUNHome() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <img
        src="/Images/mun/mun_bg.jpg"
        alt="mun_image"
        className={classes.background}
      />
      <div className={classes.mainContent}>
        <img
          src="/Images/mun/logo_mun.svg"
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
        <div className={classes.downloadRuleBook}>
          <span className={classes.downloadText}>Download Rulebook</span>
          <a
            href="https://drive.google.com/file/d/1zb9Ieu2oWJTl8R6U54BWMhQBNCaqR7Uc/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Images/icons/file.svg"
              alt="download_icon"
              className={classes.downloadIcon}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MUNHome;
