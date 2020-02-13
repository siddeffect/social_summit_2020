import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Button, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import Fade from "react-reveal/Fade";
import SocialAttacheLeague from "./SocialAttacheLeague";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "auto",
    display: "flex",
    overflowX: "hidden",
    "@media (max-width:780px)": {
      height: "750px",
      width: "auto"
    }
  },
  contentBox: {
    // eslint-disable-next-line
    backgroundImage: "url(" + "/Images/Subtle-Prism.svg" + ")",
    display: "flex",
    flexGrow: 0.5,
    flexDirection: "column",
    padding: "150px 0px 150px 120px",
    "@media (min-width:1030px) and (max-width:1600px)": {
      flexGrow: 0.1,
      padding: "90px 0px 0px 50px"
    },
    "@media (max-width:500px)": {
      padding: "60px 30px 15px 30px"
    },
    "@media (min-width:505px) and (max-width:600px)": {
      padding: "90px 20px 30px 60px"
    }
  },
  header: {
    color: "#ffffff",
    fontSize: "5.5em",
    "@media (min-width:1030px) and (max-width:1600px)": {
      fontSize: "4em"
    },
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontWeight: 600,
    "@media (max-width:780px)": {
      fontSize: "2.4em"
    }
  },
  line: {
    width: "5rem",
    height: "0.25rem",
    backgroundColor: "#00a650"
  },
  themeContent: {
    margin: "20px 50px 0 0",
    maxWidth: "650px",
    color: "#545D5F",
    fontSize: "1.3em",
    fontFamily: ["'Roboto'", "sans-serif"].join(","),
    "@media (max-width:500px)": {
      fontSize: "16px"
    },
    "@media (min-width:505px) and (max-width:600px)": {
      fontSize: "20px"
    }
  },
  button: {
    marginTop: "1em",
    marginRight: "2rem",
    width: "20rem",
    height: "4rem",
    color: "#fff",
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
  imageBox: {
    // eslint-disable-next-line
    backgroundImage: "url(" + "/Images/hero_main.svg" + ")",
    backgroundSize: "cover",
    textAlign: "center",
    flexGrow: 1,
    padding: "150px 200px 150px 200px",
    "@media (min-width:1030px) and (max-width:1600px)": {
      padding: "0px 0px 0px 0px",
      flexGrow: 1
    },
    "@media (max-width:780px)": {
      display: "none"
    }
  },
  eventDates: {
    color: "#ffffff",
    fontSize: "2.2em",
    marginTop: "1rem",
    "@media (min-width:1360px) and (max-width:1440px)": {
      fontSize: "1.5em"
    },
    fontWeight: 500,
    "@media (max-width:780px)": {
      fontSize: "1em"
    }
  },
  calendarIcon: {
    width: "2rem",
    height: "2rem",
    marginRight: "1rem",
    "@media (max-width:640px)": {
      width: "1rem",
      height: "1rem",
      marginTop: "0"
    }
  },
  snackbar: {
    zIndex: "+99"
  },
  label: {
    fontSize: "1.4rem",
    marginBottom: "1rem"
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#00a650" }
  }
});

export default function Hero() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <footer className={classes.root}>
      <Snackbar
        className={classes.snackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={20000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          <label className={classes.label}>Social Attaché League</label>
          <SocialAttacheLeague />
        </Alert>
      </Snackbar>
      <Fade>
        <div className={classes.contentBox}>
          <h1 className={classes.header}>
            Rebuilding Nature <br /> Through Innovation
          </h1>
          <div className={classes.line} />
          <label className={classes.eventDates}>
            <img
              src="/Images/icons/calendar.svg"
              alt="calendar"
              className={classes.calendarIcon}
            />
            14ᵗʰ-16ᵗʰ February 2020
          </label>
          <div className={classes.themeContent}>
            Environment, being an envelope of society, is susceptible to every
            societal action foremost. Rapidly increasing ways of hampering
            environment need innovations to mould these ways to rebuild nature,
            holding hands with the needs of the present. Keeping the same in
            mind, Social Summit-2020 invites delegates from all over India
            having an ignition of ‘Rebuilding Nature through Innovation’.
          </div>
          <ThemeProvider theme={theme}>
            <div>
              <Link to="/dashboard">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                >
                  Pay Now
                </Button>
              </Link>
            </div>
            <div>
              <Link to="/campusambassador">
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  className={classes.button}
                >
                  CAMPUS AMBASSADOR
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  className={classes.button}
                >
                  REGISTER/LOGIN
                </Button>
              </Link>
            </div>
          </ThemeProvider>
        </div>
        <div className={classes.imageBox}></div>
      </Fade>
    </footer>
  );
}
