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
    padding: "10vh 10vw 10vh 10vw"
  },
  image_bucket: {
    padding: theme.spacing(2),
    textAlign: "center",
    verticalAlign: "middle"
  },
  image: {
    width: "12vw",
    verticalAlign: "middle",
    "@media(max-width:320px)": {
      width: "25vw"
    },
    "@media(min-width:350px) and (max-width:500px)": {
      width: "30vw"
    },
    "@media(min-width:500px) and (max-width:605px)": {
      width: "15vw"
    }
  },
  image2: {
    width: "6.5vw",
    height: "11vh",
    verticalAlign: "middle",
    "@media(max-width:320px)": {
      width: "25vw",
      height: "10vh"
    },
    "@media(min-width:350px) and (max-width:500px)": {
      width: "30vw"
    },
    "@media(min-width:500px) and (max-width:605px)": {
      width: "20vw",
      height: "10vh"
    }
  },
  image3: {
    width: "40vw",
    height: "35vh",
    verticalAlign: "middle",
    "@media(max-width:320px)": {
      width: "80vw",
      height: "20vh"
    },
    "@media(min-width:350px) and (max-width:500px)": {
      width: "80vw",
      height: "20vh"
    },
    "@media(min-width:500px) and (max-width:605px)": {
      width: "70vw",
      height: "20vh"
    }
  },
  header: {
    textAlign: "center",
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "3.25rem",
    color: "#111",
    letterSpacing: "-.03rem",
    fontWeight: "500",
    lineHeight: "1.2",
    textTransform: "uppercase",
    margin: "0 0 5vh 0",
    paddingTop: "6vh",
    "@media(min-width:350px) and (max-width:605px)": {
      fontSize: "40px",
      fontWeight: 525,
      letterSpacing: "1.25px"
    },

    "@media (max-width:320px)": {
      fontSize: "28px",
      fontWeight: 450,
      letterSpacing: "1.25px"
    }
  },
  subHeader: {
    textAlign: "center",
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "1.6rem",
    color: "#003B00",
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
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  wraper: {
    boxSizing: "border-box",
    minHeight: "170px"
  },
  line: {
    position: "absolute",
    background: "#46A651",
    width: "80px",
    height: "4px",
    bottom: "-1",
    left: "50%",
    marginLeft: "-47px",
    marginTop: "-2.5vh",
    marginBottom: "20px",
    boxSizing: "border-box"
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

  const EnergyPartner = [
    {
      src: "/Images/Partners/Company/main_teri_energy.png",
      link: "https://www.teriin.org/"
    }
  ];

  const TrainingPartner = [
    {
      src: "/Images/Partners/Company/training/FinlandLabs.jpg",
      link: "http://www.finlandlabs.com/"
    }
  ];

  const EcoPartner = [
    {
      src: "/Images/Partners/Company/Make Room_Ecosystem PArtner.jpeg",
      link: "http://makeroomindia.com/changemakersroom/"
    }
  ];

  const SustainabilityPartner = [
    {
      src: "/Images/Partners/Company/ceew.png",
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

  const RestaurantPartner = [
    {
      src: "/Images/Partners/Restaurant/Olive.jpeg",
      link: null
    },
    {
      src: "/Images/Partners/Restaurant/Village-1.jpg",
      link: null
    },
    {
      src: "/Images/Partners/Restaurant/SVL.jpeg",
      link: null
    },
    {
      src: "/Images/Partners/Restaurant/Restro Cafe.jpeg",
      link: null
    },
    {
      src: "/Images/Partners/Restaurant/Desi Tadka Logo.jpg",
      link: null
    }
  ];

  const UnescoArray = [
    {
      src: "/Images/Partners/Company/Unesco.jpg",
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

  const Energy = EnergyPartner.map(item => {
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

  const Sustainability = SustainabilityPartner.map(item => {
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
              <img src={item.src} alt={item.link} className={classes.image2} />
            </a>
          </Fade>
        </div>
      </Grid>
    );
  });

  const Restaurant = RestaurantPartner.map(item => {
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

  const Unesco = UnescoArray.map(item => {
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
              <img src={item.src} alt={item.link} className={classes.image3} />
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
          <hr className={classes.line} />
          <Grid container spacing={3} justify="center">
            {NGOImages}
          </Grid>
        </Fade>
        <Fade bottom>
          <h2 className={classes.header}> Company Partners</h2>
          <hr className={classes.line} />
          <div className={classes.container}>
            <div className={classes.wraper}>
              <h3 className={classes.subHeader}> Energy Partner</h3>
              <Grid container spacing={3} justify="center">
                {Energy}
              </Grid>
            </div>

            <div className={classes.wraper}>
              <h3 className={classes.subHeader}> Training Partner</h3>
              <Grid container spacing={3} justify="center">
                {Training}
              </Grid>
            </div>

            <div className={classes.wraper}>
              <h3 className={classes.subHeader}> Ecosystem Partner</h3>
              <Grid container spacing={3} justify="center">
                {Ecosystem}
              </Grid>
            </div>

            <div className={classes.wraper}>
              <h3 className={classes.subHeader}> Sustainability Partner</h3>
              <Grid container spacing={3} justify="center">
                {Sustainability}
              </Grid>
            </div>

            <div className={classes.wraper}>
              <h3 className={classes.subHeader}> CSR Partner</h3>
              <Grid container spacing={3} justify="center">
                {CSR}
              </Grid>
            </div>
          </div>
          <h2 className={classes.header}> Restaurant Partners</h2>
          <hr className={classes.line} />
          <div className={classes.container}>
            <Grid container spacing={3} justify="center">
              {Restaurant}
            </Grid>
          </div>
          <h2 className={classes.header}> Patronized By</h2>
          <hr className={classes.line} />
          <div className={classes.container}>
            <Grid container spacing={3} justify="center">
              {Unesco}
            </Grid>
          </div>
        </Fade>
      </div>
      <Footer />
    </Aux>
  );
}
