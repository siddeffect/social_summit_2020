import React from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  background: {
    width: "100%",
    height: "100vh",
    position: "absolute",
    zIndex: "-99",
    objectFit: "cover"
  },
  button: {
    marginTop: "1rem",
    marginRight: "2rem",
    width: "20rem",
    height: "4rem",
    fontSize: "1.4rem",
    "@media (min-width: 1030px) and (max-width: 1600px)": {
      width: "16rem",
      height: "3.5rem",
      fontSize: "1rem"
    },
    "@media (max-width:640px)": {
      width: "15rem",
      height: "2.1rem",
      fontSize: "0.8rem",
      marginTop: "0.5em"
    }
  },
  mainContent: {
    paddingTop: "15vh",
    paddingLeft: "10vw",
    height: "100vh"
  },
  header: {
    color: "#ffffff",
    fontSize: "4.5em",
    "@media (min-width:1360px) and (max-width:1440px)": {
      fontSize: "4em"
    },
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontWeight: 600,
    "@media (max-width:500px)": {
      fontSize: "2.4em"
    },
    "@media (min-width:500px) and (max-width:605px)": {
      fontSize: "2.75em"
    },
    "@media (max-width:320px)": {
      fontSize: "2em"
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
    "@media (max-width:500px)": {
      fontSize: "16px",
      margin: "10px 50px 0 0"
    },
    "@media (min-width:500px) and (max-width:605px)": {
      fontSize: "22px",
      margin: "10px 50px 0 0"
    },
    "@media (max-width:320px)": {
      fontSize: "13.5px",
      margin: "10px 50px 0 0"
    }
  },
  logo: {
    height: "20rem",
    marginBottom: "-10vh",
    "@media (min-width:500px) and (max-width:605px)": {
      height: "5rem",
      marginBottom: "0vh"
    },
    "@media (min-width:370px) and (max-width:500px)": {
      height: "6rem",
      marginBottom: "-2vh"
    },
    "@media (min-width:350px) and (max-width:360px)": {
      height: "6rem",
      marginBottom: "-4vh"
    },
    "@media (min-width:1030px) and (max-width: 1600px)": {
      height: "16rem"
    },
    "@media (max-width:320px)": {
      height: "5rem",
      marginBottom: "-2vh"
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

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#00a650" }
  }
});

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
        <ThemeProvider theme={theme}>
          <div>
            <Button
              href="https://drive.google.com/file/d/1kp2xSTxR4ibGSjbMT7iXLL5a-VWYVHHQ/view"
              target="_blank"
              variant="outlined"
              color="primary"
              size="large"
              className={classes.button}
            >
              Allotted Countries
            </Button>
            <Button
              href="https://drive.google.com/file/d/1mEwYw3W0vwJIr8qGrcAFVCdXopr9iGUD/view"
              target="_blank"
              variant="outlined"
              color="primary"
              size="large"
              className={classes.button}
            >
              MUN Agenda
            </Button>
          </div>
        </ThemeProvider>

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
