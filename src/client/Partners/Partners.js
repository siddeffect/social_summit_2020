import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";
import Aux from "../../hoc/Aux";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#fff",
    flexGrow: 1,
    padding: "0 10vw 10vh 10vw"
  },
  image_bucket: {
    padding: theme.spacing(2),
    textAlign: "center",
    verticalAlign: "middle"
  },
  image: {
    width: "8vw",
    verticalAlign: "middle",
    "@media(min-width:350px) and (max-width:500px)": {
      width: "25vw"
    },
    "@media(min-width:500px) and (max-width:605px)": {
      width: "11.5vw"
    }
  },
  header: {
    textAlign: "center",
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "3.75rem",
    color: "#111",
    letterSpacing: "-.03rem",
    fontWeight: "600",
    lineHeight: "1.2",
    margin: "0 0 5vh 0",
    paddingTop: "15vh",
    "@media(min-width:350px) and (max-width:605px)": {
      fontSize: "44px",
      fontWeight: 525,
      letterSpacing: 0
    },
    "@media(min-width:350px) and (max-width:420px)": {
      fontSize: "46px",
      fontWeight: 500,
      letterSpacing: 0
    },
    "@media (max-width:320px)": {
      fontSize: "30px",
      fontWeight: 450,
      letterSpacing: 0
    }
  },
  subHeader: {
    textAlign: "center",
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "2.5rem",
    color: "#ffffff",
    letterSpacing: "-.03rem",
    fontWeight: "400",
    lineHeight: "0.5",
    margin: "0 0 5vh 0",
    paddingTop: "2.5vh",
    "@media(min-width:350px) and (max-width:605px)": {
      fontSize: "30px",
      fontWeight: 400,
      letterSpacing: 0
    },
    "@media(min-width:350px) and (max-width:420px)": {
      fontSize: "32px",
      fontWeight: 400,
      letterSpacing: 0
    },
    "@media (max-width:320px)": {
      fontSize: "24px",
      fontWeight: 375,
      letterSpacing: 0
    }
  }
}));

export default function NgoPartner() {
  const classes = useStyles();

  const NGOArray = [
    { src: "/Images/Partners/Ngo/SAFE.jpg", link: "https://safegreen.in" },
    { src: "/Images/Partners/Ngo/chintan.jpg", link: "" },
    { src: "/Images/Partners/Ngo/DALogo.jpg", link: "https://www.devalt.org" },
    {
      src: "/Images/Partners/Ngo/SED_india.JPG",
      link: "http://www.sedindia.org"
    },
    {
      src: "/Images/Partners/Ngo/seva_nidhi.jpg",
      link: "http://www.sevanidhi.org"
    },
    { src: "/Images/Partners/Ngo/udyama.jpg", link: "" }
  ];

  const CompanyArray = [
    { src: "/Images/Partners/Company/training/FinlandLabs.jpg", link: "" }
  ];

  const NGOImages = NGOArray.map(item => {
    return (
      <Grid
        alignItems="center"
        justify="center"
        item
        xs={6}
        sm={2}
        key={item}
        container
      >
        <div className={classes.image_bucket}>
          <Fade bottom>
            <img
              src={item.src}
              alt=""
              className={classes.image}
              href={item.link}
            />
          </Fade>
        </div>
      </Grid>
    );
  });

  const CompanyImages = CompanyArray.map(item => {
    return (
      <Grid
        alignItems="center"
        justify="center"
        item
        xs={6}
        sm={2}
        key={item}
        container
      >
        <div className={classes.image_bucket}>
          <Fade bottom>
            <img
              src={item.src}
              alt=""
              className={classes.image}
              href={item.link}
            />
          </Fade>
        </div>
      </Grid>
    );
  });
  return (
    <Aux>
      <Navbar />
      <div className={classes.root}>
        <Fade bottom>
          <h2 className={classes.header}> NGO Partners</h2>
          <Grid container spacing={3} justify="center">
            {NGOImages}
          </Grid>
        </Fade>
        <Fade bottom>
          <h2 className={classes.header}> Company Partners</h2>
          <h3 className={classes.subHeader}> Traning Partner</h3>
          <Grid container spacing={3} justify="center">
            {CompanyImages}
          </Grid>
        </Fade>
      </div>
      <Footer />
    </Aux>
  );
}
