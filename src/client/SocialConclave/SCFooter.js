import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab, Grid } from "@material-ui/core";
import { Facebook, Twitter, Instagram, LinkedIn } from "@material-ui/icons";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  root: {
    background: "#111111",
    minHeight: 400,
    display: "flex",
    padding: "100px 200px 150px 200px",
    "@media (max-width:780px)": {
      height: 800,
      padding: "20px 20px 15px 20px",
      flexDirection: "column"
    }
  },
  contentBox: {
    display: "flex",
    flexGrow: 3,
    flexDirection: "column"
  },
  header: {
    color: "#46A651",
    fontSize: "40px",
    fontFamily: "Serif",
    "@media (max-width:780px)": {
      fontSize: "24px"
    }
  },
  themeContent: {
    margin: "40px 100px 0 0",
    maxWidth: "600px",
    color: "#545D5F",
    fontSize: "1.1em",
    "@media (max-width:780px)": {
      fontSize: "0.9em",
      margin: "10px 40px 0 0"
    }
  },
  fabs: {
    marginTop: 75,
    display: "flex",
    flexDirection: "row",
    "@media (max-width:780px)": {
      marginTop: 20
    }
  },
  fab: {
    margin: theme.spacing(1),
    background: "#1A1E21",
    ":hover&": {
      background: "#00a650"
    }
  },
  emailLinkBox: {
    flexGrow: 1,
    "@media (max-width:780px)": {
      paddingBottom: 40
    }
  },
  info: {
    color: "#e5e5e5",
    lineHeight: 1.6,
    backgroundColor: "#2a2a2a",
    padding: "2rem",
    borderRadius: "12px"
  },
  name: {
    color: "#fff",
    fontSize: "1.5rem"
  }
}));

export default function SCFooter() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Fade bottom>
        <div className={classes.contentBox}>
          <h1 className={classes.header}>Let's Innovate for the Nature</h1>

          <div className={classes.themeContent}>
            National social Summit-2020, IIT Roorkee, aims for the upliftment of
            the nation by identifying and working on problems on the ground
            level. It is a two-day serving of collaborative workshops,
            networking, and an insight from the industry’s thought leader!
          </div>
          <div className={classes.fabs}>
            <Fab
              href="https://www.facebook.com/iitrsocialsummit/"
              target="_blank"
              size="small"
              color="primary"
              aria-label="add"
              className={classes.fab}
            >
              <Facebook />
            </Fab>

            <Fab
              href="https://www.instagram.com/iitrsocialsummit/"
              target="_blank"
              size="small"
              color="primary"
              aria-label="add"
              className={classes.fab}
            >
              <Instagram />
            </Fab>
            <Fab
              href="https://www.linkedin.com/company/national-social-summit/?originalSubdomain=in"
              target="_blank"
              size="small"
              color="primary"
              aria-label="add"
              className={classes.fab}
            >
              <LinkedIn />
            </Fab>
            <Fab
              href="https://twitter.com/natsocialsummit"
              target="_blank"
              size="small"
              color="primary"
              aria-label="add"
              className={classes.fab}
            >
              <Twitter />
            </Fab>
          </div>
        </div>
        <div className={classes.emailLinkBox}>
          <div className={classes.emailBox}>
            <h2 className={classes.header}>Contact</h2>
          </div>
          <div className={classes.contactInfo}>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12}>
                <div className={classes.info}>
                  <div className={classes.name}>Arpit Shrivastava</div>
                  Manager (Events)
                  <br />
                  +91-9694658089
                  <br />
                  arpit.socialsummit@gmail.com
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.info}>
                  <div className={classes.name}>Yash Aggarwal</div>
                  Manager (Events)
                  <br />
                  +91-8744025404
                  <br />
                  yaggarwal.socialsummit@gmail.com
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Fade>
    </footer>
  );
}
