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
    fontSize: "3.5rem",
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
  header2: {
    textAlign: "center",
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "3.25rem",
    color: "#111",
    letterSpacing: "-.03rem",
    fontWeight: "600",
    lineHeight: "1.2",
    margin: "0 0 2.5vh 0",
    paddingTop: "2.5vh",
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
    fontSize: "2rem",
    color: "#111",
    letterSpacing: "-.03rem",
    fontWeight: "400",
    lineHeight: "0.25",
    margin: "0 0 5vh 0",
    paddingTop: "5vh",
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
  },
  container: {
    display: "flex",
    justifyContent: "space-around"
  },
  wraper: {
    boxSizing: "border-box",
    minHeight: "170px"
  }
}));

export default function NgoPartner() {
  const classes = useStyles();

  const NGOArray = [
    { src: "/Images/Partners/Ngo/SAFE.jpg", link: "https://safegreen.in" },
    { src: "/Images/Partners/Ngo/chintan.jpg", link: null },
    { src: "/Images/Partners/Ngo/DALogo.jpg", link: "https://www.devalt.org" },
    {
      src: "/Images/Partners/Ngo/SED_india.JPG",
      link: "http://www.sedindia.org"
    },
    {
      src: "/Images/Partners/Ngo/seva_nidhi.jpg",
      link: "http://www.sevanidhi.org"
    },
    { src: "/Images/Partners/Ngo/udyama.jpg", link: null }
  ];

  const TrainingPartner = [
    { src: "/Images/Partners/Company/training/FinlandLabs.jpg", link: null }
  ];

  const GoodnessPartner = [
    {
      src: "/Images/Partners/Company/Logical Indian_Goodness Partner.png",
      link: null
    }
  ];

  const EcoPartner = [
    {
      src: "/Images/Partners/Company/Make Room_Ecosystem PArtner.jpeg",
      link: null
    }
  ];

  const CSRPartner = [
    {
      src:
        "/Images/Partners/Company/Swayambhu Innovative Solutions PVT. LTD._CSR Partner.png",
      link: null
    }
  ];

  const RestruantPartner = [
    {
      src: "/Images/Partners/Restruant/Olive.jpeg",
      link: null
    },
    {
      src: "/Images/Partners/Restruant/Village-1.jpg",
      link: null
    }
  ];

  const NGOImages = NGOArray.map(item => {
    return (
      <Grid
        alignItems="center"
        justify="center"
        item
        xs={6}
        sm={2}
        key={item.src}
        container
      >
        <div className={classes.image_bucket}>
          <Fade bottom>
            <a href={item.link} target="blank">
              <img src={item.src} alt="" className={classes.image} />
            </a>
          </Fade>
        </div>
      </Grid>
    );
  });

  const Training = TrainingPartner.map(item => {
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
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.src} alt={item.link} className={classes.image} />
            </a>
          </Fade>
        </div>
      </Grid>
    );
  });

  const GoodNess = GoodnessPartner.map(item => {
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
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.src} alt={item.link} className={classes.image} />
            </a>
          </Fade>
        </div>
      </Grid>
    );
  });

  const Ecosystem = EcoPartner.map(item => {
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
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.src} alt={item.link} className={classes.image} />
            </a>
          </Fade>
        </div>
      </Grid>
    );
  });

  const CSR = CSRPartner.map(item => {
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
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.src} alt={item.link} className={classes.image} />
            </a>
          </Fade>
        </div>
      </Grid>
    );
  });

  const Restruant = RestruantPartner.map(item => {
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
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.src} alt={item.link} className={classes.image} />
            </a>
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
          <h2 className={classes.header2}> Company Partners</h2>
          <div className={classes.container}>
            <div className={classes.wraper}>
              <h3 className={classes.subHeader}> Training Partner</h3>
              <Grid container spacing={3} justify="center">
                {Training}
              </Grid>
            </div>
            <div className={classes.wraper}>
              <h3 className={classes.subHeader}> Goodness Partner</h3>
              <Grid container spacing={3} justify="center">
                {GoodNess}
              </Grid>
            </div>
            <div className={classes.wraper}>
              <h3 className={classes.subHeader}> Ecosystem Partner</h3>
              <Grid container spacing={3} justify="center">
                {Ecosystem}
              </Grid>
            </div>
            <div className={classes.wraper}>
              <h3 className={classes.subHeader}> CSR Partner</h3>
              <Grid container spacing={3} justify="center">
                {CSR}
              </Grid>
            </div>
          </div>
          <h2 className={classes.header2}> Restruant Partners</h2>
          <div className={classes.container}>
            <Grid container spacing={3} justify="center">
              {Restruant}
            </Grid>
          </div>
        </Fade>
      </div>
      <Footer />
    </Aux>
  );
}
