import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, IconButton } from "@material-ui/core";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Language
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";

const useStyles = makeStyles(theme => ({
  rootGrid: {
    margin: "15vh auto",
    width: "60%",
    display: "flex"
  },
  imageContainer: {
    display: "flex"
  },
  speakerImage: {
    height: "445px",
    width: "auto",
    borderRadius: "8px",
    marginTop: "5vh"
  },
  backButton: {
    color: "#00a650",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    cursor: "pointer"
  },
  speakerName: {
    fontFamily: ["'Rubik'", "sans-serif"].join(","),
    lineHeight: "52px",
    fontSize: "3rem",
    fontWeight: 400,
    color: "#2d3034",
    marginBottom: "-3px"
  },
  speakerDesignation: {
    fontFamily: ["'Lora'", "serif"].join(","),
    color: "#00a650",
    fontSize: "24px",
    fontStyle: "italic",
    paddingBottom: "20px",
    marginBottom: "20px",
    position: "relative"
  },
  speakerContent: {
    fontSize: "18px",
    color: "#6c7a89",
    fontFamily: ["'Rubik'", "sans-serif"].join(","),
    fontWeight: 300,
    lineHeight: "30px",
    margin: "50px 0 10px"
  },
  connectionHeader: {
    color: "#2d3034",
    fontSize: "24px",
    fontFamily: ["'Rubik'", "sans-serif"].join(","),
    fontWeight: 400,
    margin: "0 0 10px",
    lineHeight: "28px"
  },
  iconList: {
    display: "block"
  },
  icon: {
    margin: theme.spacing(1),
    color: "#545454",
    fontSize: "2rem",
    ":hover&": {
      color: "#00a650"
    }
  }
}));

function SpeakerDetail(props) {
  const classes = useStyles();
  const { details } = props;
  return (
    <div>
      <Navbar />
      <Grid container justify="center" className={classes.rootGrid}>
        <Grid item xs={12} md={6}>
          <Link to="/speakers">
            <label className={classes.backButton}>&lt; Back</label>
          </Link>
          <div className={classes.imageContainer}>
            <img
              src={details.photoRoute}
              alt=""
              className={classes.speakerImage}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <h1 className={classes.speakerName}>{details.name}</h1>
          <span className={classes.speakerDesignation}>
            {details.designation}
            <br />
            {details.shortDesignation}
          </span>
          <p className={classes.speakerContent}>{details.description}</p>
          <h2 className={classes.connectionHeader}>Connections</h2>
          <div className={classes.iconList}>
            {details.socialHandleLink.facebook ? (
              <IconButton
                href={details.socialHandleLink.facebook}
                target="_blank"
                size="small"
              >
                <Facebook className={classes.icon} />
              </IconButton>
            ) : null}
            {details.socialHandleLink.instagram ? (
              <IconButton
                href={details.socialHandleLink.instagram}
                target="_blank"
                size="small"
              >
                <Instagram className={classes.icon} />
              </IconButton>
            ) : null}
            {details.socialHandleLink.linkedin ? (
              <IconButton
                href={details.socialHandleLink.linkedin}
                target="_blank"
                size="small"
              >
                <LinkedIn className={classes.icon} />
              </IconButton>
            ) : null}
            {details.socialHandleLink.twitter ? (
              <IconButton
                href={details.socialHandleLink.twitter}
                target="_blank"
                size="small"
              >
                <Twitter className={classes.icon} />
              </IconButton>
            ) : null}
            {details.socialHandleLink.wikipedia ? (
              <IconButton
                href={details.socialHandleLink.wikipedia}
                target="_blank"
                size="small"
              >
                <Language className={classes.icon} />
              </IconButton>
            ) : null}
          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default SpeakerDetail;
