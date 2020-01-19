import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    backgroundColor: "#00a650",
    padding: "10rem 0 10rem 0",
    alignItem: "center",
    justifyContent: "center",
    "@media(min-width:1360px) and (max-width:1450px)": {
      padding: "3.5rem 0 45px 0"
    },
    "@media(min-width:500px) and (max-width:605px)": {
      padding: "7rem 0 5.5rem 0"
    },
    "@media(min-width:400px) and (max-width:420px)": {
      padding: "5rem 0 9rem 0"
    },
    "@media(min-width:365px) and (max-width:380px)": {
      padding: "4rem 0 4.5rem 0"
    },
    "@media(min-width:385px) and (max-width:400px)": {
      padding: "4rem 0 4.5rem 0"
    },
    "@media(min-width:350px) and (max-width:360px)": {
      padding: "2.5rem 0 3rem 0"
    },
    "@media (max-width:320px)": {
      padding: "2.5rem 0 3rem 0"
    }
  },
  header: {
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "4rem",
    color: "#fff",
    letterSpacing: "-.03rem",
    marginBottom: "4rem",
    fontWeight: "600",
    lineHeight: "1.2",
    "@media(min-width:500px) and (max-width:605px)": {
      fontSize: "44px",
      fontWeight: 550,
      letterSpacing: 0,
      marginBottom: 0
    },
    "@media(min-width:350px) and (max-width:420px)": {
      fontSize: "32px"
    },
    "@media (max-width:320px)": {
      fontSize: "32px"
    }
  },
  leadContent: {
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontWeight: "300",
    fontSize: "1.6rem",
    lineHeight: "1.538",
    marginBottom: "3.6rem",
    maxWidth: "70vw",
    color: "rgba(255,255,255,.7)",
    margin: "1rem auto auto auto",
    "@media(min-width:1360px) and (max-width:1400px)": {
      marginBottom: "1.6rem"
    },
    "@media(min-width:1400px) and (max-width:1460px)": {
      marginBottom: "3rem"
    },
    "@media(min-width:500px) and (max-width:605px)": {
      fontSize: "22px",
      maxWidth: "90vw",
      marginBottom: "2.5rem"
    },
    "@media(min-width:400px) and (max-width:420px)": {
      fontSize: "20px",
      maxWidth: "85vw",
      // textAlign: "left",
      marginBottom: "0.3%",
      fontWeight: 1.4,
      lineHeight: "1.2"
    },
    "@media(min-width:350px) and (max-width:380px)": {
      fontSize: "18.5px",
      // textAlign: "left",
      maxWidth: "85vw",
      marginBottom: "0.3%",
      fontWeight: 1.4,
      lineHeight: "1.2"
    },
    "@media(min-width:385px) and (max-width:400px)": {
      fontSize: "20px",
      // textAlign: "left",
      maxWidth: "85vw",
      marginBottom: "0.3%",
      fontWeight: 1.4,
      lineHeight: "1.3"
    },
    "@media (max-width:320px)": {
      fontSize: "17px",
      // textAlign: "left",
      maxWidth: "85vw",
      marginBottom: "0.3%",
      fontWeight: 1.4,
      lineHeight: "1.2"
    }
  },
  mainSlider: {
    margin: "0 8vw 0 auto",
    "@media(min-width:1030px) and (max-width:1300px)": {
      margin: "0 auto 0 auto"
    },
    "@media(min-width:1300px) and (max-width:1600px)": {
      margin: "0 4vw 0 auto"
    }
  },
  container: {
    maxWidth: "20vw",
    textAlign: "center",
    "@media(min-width:1030px) and (max-width:1600px)": {
      maxWidth: "21vw"
    },
    "@media (max-width:780px)": {
      maxWidth: "90vw"
    }
  },
  followHeader: {
    textAlign: "center",
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontWeight: 600,
    letterSpacing: "2px",
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "#fff"
  },
  followContent: {
    color: "rgba(255,255,255,.7)",
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "1.2rem",
    lineHeight: "1.5",
    "@media (max-width:640px)": {
      fontSize: "1.2rem",
      textAlign: "center"
    },
    "@media(min-width:1030px) and (max-width:1600px)": {}
  }
}));

export default function About() {
  const classes = useStyles();

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false
        }
      }
    ]
  };
  return (
    <Fade>
      <div className={classes.root}>
        <Fade bottom>
          <label className={classes.header}>Our Story</label>
          <p className={classes.leadContent}>
            Social Summit, started in 2016, by the inspired youths who believed
            in crystallizing their vision for a better society. Identifying the
            most pressing social problems and thus evolving actionable insights
            for contemporary challenges, Social Summit has constantly grown,
            evolved and pushed the boundaries of what a social fest can be, by
            pioneering in past themes such as “Empowerment through Education”
            and “Women and Child Welfare”.
          </p>
        </Fade>
        <Fade bottom>
          {/* This is the carousel */}
          <div>
            <Slider {...settings} className={classes.mainSlider}>
              <div className={classes.container}>
                <h3 className={classes.followHeader}> Mission </h3>
                <p className={classes.followContent}>
                  Social integration is indispensable to create an inclusive
                  society. We devise ‘sustainable solution model’ to the social
                  problems engaging with the community and stakeholders,
                  creating a sense of responsibility and awareness in the
                  society.
                </p>
              </div>
              <div className={classes.container}>
                <h3 className={classes.followHeader}>Vision</h3>
                <p className={classes.followContent}>
                  Eradication of disparity in different sections of society,
                  propagating the propaganda of curing indifferences, Summit
                  aims to clear the path of its inspired manifestation by
                  uplifting the burdened sections of society to bridge the
                  existing communal chasm.
                </p>
              </div>
              <div className={classes.container}>
                <h3 className={classes.followHeader}>Dynamics</h3>
                <p className={classes.followContent}>
                  Collaboration with 30+ NGO’s and various stakeholders to
                  sketch the inspired imagination of ‘curving indifferences’ on
                  paper. Entrenched connections with social activists at ground
                  level encompassing contemporary social problems and their
                  excavation from roots.
                </p>
              </div>
            </Slider>
          </div>
        </Fade>
      </div>
    </Fade>
  );
}
