import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Navbar from "../CALayout/Navbar";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import { Icon, Button, Tooltip, Zoom } from "@material-ui/core";
import StorageIcon from "@material-ui/icons/Storage";
import Guidelines from "./Guidelines";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const useStyles = makeStyles(theme => ({
  root: {
    width: "70vw",
    margin: "10vh auto auto auto",
    background: "#e0e0e0",
    display: "flex",
    flexDirection: "row",
    borderRadius: "16px",
    "@media (max-width:600px)": {
      display: "block",
      width: "85vw"
    }
  },
  navContainer: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000",
    borderRadius: "16px 0 0 16px",
    maxWidth: "20vw",
    "@media (max-width:600px)": {
      display: "block",
      maxWidth: "none",
      borderRadius: "16px 16px 0 0",
      flexDirection: "row",
      flexGrow: "none"
    }
  },
  mainDetail: {
    flexGrow: 3,
    display: "flex",
    flexDirection: "column"
  },
  nameCollegeContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "4vh 4vw auto 2vw"
  },
  nameHeader: {
    color: "#fff",
    fontSize: "3rem",
    textTransform: "capitalize",
    "@media (max-width:600px)": {
      margin: "2vh auto auto auto"
    },
    "@media (min-width:350px) and (max-width:420px)": {
      fontSize: "2.4rem",
      textAlign: "center"
    },
    "@media (max-width:320px)": {
      fontSize: "2.2rem",
      textAlign: "center"
    }
  },
  collegeHeader: {
    color: "#e8e8e8",
    fontSize: "1.5rem",
    marginBottom: "2vh",
    "@media (max-width:600px)": {
      margin: "1vh auto 1vh auto"
    },
    "@media (min-width:350px) and (max-width:420px)": {
      fontSize: "1.35rem",
      textAlign: "center"
    },
    "@media (max-width:320px)": {
      fontSize: "1.2rem",
      textAlign: "center"
    }
  },
  divider: {
    backgroundColor: "#e0e0e0",
    height: "1px",
    width: "15vw",
    "@media (max-width:600px)": {
      width: "45vw",
      margin: "auto"
    }
  },
  id: {
    color: "#e8e8e8",
    fontSize: "2rem",
    margin: "4vh 4vw 2vh 2vw",
    "@media (max-width:600px)": {
      margin: "2vh auto auto auto"
    },
    "@media (min-width:350px) and (max-width:420px)": {
      fontSize: "1.8rem"
    },
    "@media (max-width:320px)": {
      fontSize: "1.6rem"
    }
  },
  mainHeaders: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    margin: "1vh 8vw 2vh 2vw",
    "@media (max-width:600px)": {
      margin: "4vh auto 5vh auto",
      width: "60vw"
    }
  },
  paymentButton: {
    margin: "1vh 0.5rem 2vh 6vh",
    width: "10rem",
    "@media (max-width:600px)": {
      margin: "4vh auto 5vh 6vh",
      width: "60vw"
    }
  },
  mainDetails: {
    paddingTop: "4vh",
    paddingBottom: "4vh"
  },
  fields: {
    margin: "auto auto auto 6vh",
    fontSize: "1.8rem",
    color: "#000",
    "@media (max-width:600px)": {
      margin: "1vh auto 1vh 14vh",
      fontSize: "1.5rem"
    },
    "@media (min-width:400px) and (max-width:420px)": {
      margin: "1vh auto 1vh 7vh",
      fontSize: "1.4rem"
    },
    "@media (min-width:385px) and (max-width:400px)": {
      margin: "1vh auto 1vh 6.5vh",
      fontSize: "1.4rem"
    },
    "@media (min-width:350px) and (max-width:380px)": {
      margin: "1vh auto 1vh 4vh",
      fontSize: "1.4rem"
    },
    "@media (max-width:320px)": {
      margin: "1vh auto 1vh 4vh",
      fontSize: "1.25rem"
    }
  }
}));

function pad(n) {
  var s = "000" + n;
  return s.substr(s.length - 4);
}

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#00a650" }
  }
});

const Dashboard = props => {
  const classes = useStyles();
  const { profile, auth } = props;
  if (!auth.uid) return <Redirect to="/campusambassador/signin" />;
  if (profile.role === "PARTICIPANT") return <Redirect to="/dashboard" />;

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar style={{ margin: "10vh 0 20vh 0" }} />
        <div className={classes.root}>
          <div className={classes.navContainer}>
            <div className={classes.nameCollegeContainer}>
              <label className={classes.nameHeader}>
                <strong>{profile.firstName}</strong> {profile.lastName}
              </label>
              <label className={classes.collegeHeader}>{profile.college}</label>
              <div className={classes.divider}></div>
            </div>

            <div className={classes.mainHeaders}>
              <label className={classes.id}>
                ID: CA20{pad(profile.ca_count)}
              </label>
              <Guidelines />
              <Button
                size="large"
                variant="contained"
                color="primary"
                className={classes.button}
                href="https://docs.google.com/forms/d/e/1FAIpQLSfhwLJiEBGwDL8_76mdtnDqX0e2ths-iBQSDE-7uSCgDwdgTA/viewform"
                target="_blank"
                endIcon={
                  <Icon>
                    <StorageIcon />
                  </Icon>
                }
              >
                Submit Data
              </Button>
              <Button
                size="large"
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
                href="https://forms.gle/GEsJmjSox6Q4ngVo9"
                target="_blank"
              >
                Submit Idea
              </Button>
            </div>
          </div>
          <div className={classes.mainDetail}>
            {window.innerWidth < 768 ? null : (
              <label className={classes.fields}>
                Name: {profile.firstName} {profile.lastName}
              </label>
            )}

            <label className={classes.fields}>Email: {profile.email}</label>
            <label className={classes.fields}>
              Ph. Number: {profile.phoneNumber}
            </label>

            {window.innerWidth < 768 ? null : (
              <label className={classes.fields}>
                College: {profile.college}
              </label>
            )}

            <label className={classes.fields}>
              Branch/Year: {profile.year_branch}
            </label>
            <label className={classes.fields}>State: {profile.state}</label>
            <label className={classes.fields}>Role: Social Attaché</label>
            {profile.payment_done === false ? (
              <div>
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  className={classes.paymentButton}
                  endIcon={<Icon>send</Icon>}
                  href="https://www.thecollegefever.com/events/national-social-summit-djEwvrGaRC"
                  target="_blank"
                >
                  Pay Now
                </Button>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="Payment status might take 1-2 days to reflect on Dashboard"
                  placement="right"
                >
                  <HelpOutlineIcon />
                </Tooltip>
              </div>
            ) : (
              <label className={classes.fields}>Payment: Done</label>
            )}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Dashboard);
