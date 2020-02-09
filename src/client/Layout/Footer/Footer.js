import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";
import { Facebook, Twitter, Instagram, LinkedIn } from "@material-ui/icons";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  root: {
    background: "#111111",
    minHeight: 400,
    display: "flex",
    padding: "100px 200px 150px 200px",
    "@media (min-width:1360px) and (max-width:1450px)": {
      padding: "100px 60px 150px 100px"
    },
    "@media (max-width:780px)": {
      height: 500,
      padding: "20px 20px 15px 20px",
      flexDirection: "column"
    }
  },
  contentBox: {
    display: "flex",
    flexGrow: 2,
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
  links: {
    display: "flex",
    flexDirection: "row",
    listStyleType: "none"
  },
  link: {
    margin: 10
  },
  icon: {
    color: "#fff",
    marginRight: "20px"
  },
  text: {
    color: "#fff",
    verticalAlign: "top",
    "@media (max-width:780px)": {
      fontSize: "12px"
    }
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Fade bottom>
      <footer className={classes.root}>
        <div className={classes.contentBox}>
          <h1 className={classes.header}>Let's Innovate for the Nature</h1>

          <div className={classes.themeContent}>
            National social summit-2020, IIT Roorkee, aims for the upliftment of
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
            <div>
              <PhoneIcon className={classes.icon} />
              <span className={classes.text}>+91-9572851250</span>
            </div>
            <div>
              <EmailIcon className={classes.icon} />
              <span className={classes.text}>
                socialsummit.contact@gmail.com
              </span>
            </div>
            <div>
              <LocationOnIcon className={classes.icon} />
              <span className={classes.text}>
                NSS Office, 2nd floor, Multi Activity Centre (MAC),
                {/* <br />  */} IIT Roorkee, ZIP - 247667
              </span>
            </div>
          </div>
        </div>
      </footer>
    </Fade>
  );
}
