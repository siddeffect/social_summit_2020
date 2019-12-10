import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Navbar from "../layout/Navbar";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import { Icon, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "70vw",
    margin: "10vh auto auto auto",
    background: "#e0e0e0",
    display: "flex",
    flexDirection: "row",
    borderRadius: "16px"
  },
  navContainer: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000",
    borderRadius: "16px 0 0 16px",
    maxWidth: "20vw"
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
    textTransform: "capitalize"
  },
  collegeHeader: {
    fontSize: "1.5rem",
    marginBottom: "2vh"
  },
  divider: {
    backgroundColor: "#e0e0e0",
    height: "1px",
    width: "15vw"
  },
  id: {
    fontSize: "2rem",
    margin: "4vh 4vw auto 2vw"
  },
  mainHeaders: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    margin: "4vh 8vw 10vh 2vw"
  },
  mainDetails: {
    paddingTop: "4vh",
    paddingBottom: "4vh"
  },
  fields: {
    margin: "auto auto auto 6vh",
    fontSize: "1.8rem",
    color: "#000"
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

  return (
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
            <ThemeProvider theme={theme}>
              <Button
                size="large"
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
              >
                Summit Idea
              </Button>
            </ThemeProvider>
          </div>
        </div>
        <div className={classes.mainDetail}>
          <label className={classes.fields}>
            Name: {profile.firstName} {profile.lastName}
          </label>
          <label className={classes.fields}>Email: {profile.email}</label>
          <label className={classes.fields}>
            Ph. Number: {profile.phoneNumber}
          </label>

          <label className={classes.fields}>College: {profile.college}</label>
          <label className={classes.fields}>
            Branch/Year: {profile.year_branch}
          </label>
          <label className={classes.fields}>State: {profile.state}</label>
          <label className={classes.fields}>Role: Social Attaché</label>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Dashboard);
