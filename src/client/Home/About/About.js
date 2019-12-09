import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#00a650",
    padding: "10rem 0 12.5rem 0",
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
    margin: "0 15vw 0 7.5vw",
    "@media(min-width:1300px) and (max-width:1450px)": {
      margin: "0 10vw 0 7vw"
    },
    "@media(min-width:500px) and (max-width:600px)": {
      margin: "0 15vw 0 3.5vw;"
    }
  },
  container: {
    maxWidth: "20vw",
    "@media(min-width:1300px) and (max-width:1450px)": {
      maxWidth: "21vw"
    },
    "@media(min-width:500px) and (max-width:605px)": {
      maxWidth: "85vw"
    },
    "@media(min-width:350px) and (max-width:420px)": {
      maxWidth: "100vw"
    },
    "@media (max-width:320px)": {
      maxWidth: "100vw"
    }
  },
  followHeader: {
    textAlign: "justify",
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontWeight: 600,
    letterSpacing: "2px",
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "#fff",
    marginLeft: "25%",
    "@media(min-width:500px) and (max-width:605px)": {
      fontSize: "30px",
      marginBottom: "1rem",
      marginLeft: "34%"
    },
    "@media(min-width:350px) and (max-width:420px)": {
      fontSize: "28px",
      marginBottom: "0.5%",
      textAlign: "center",
      fontWeight: 550,
      marginLeft: 0
    },
    "@media (max-width:320px)": {
      fontSize: "28px",
      marginBottom: "0.5%",
      textAlign: "center",
      fontWeight: 550,
      marginLeft: 0
    }
  },
  followContent: {
    textAlign: "left",
    color: "rgba(255,255,255,.7)",
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "20px",
    lineHeight: "1.5",
    "@media(min-width:500px) and (max-width:605px)": {
      fontSize: "20px",
      textAlign: "center"
    },
    "@media(min-width:400px) and (max-width:420px)": {
      fontSize: "20px",
      textAlign: "center",
      marginBottom: 0,
      lineHeight: "1.3"
    },
    "@media(min-width:350px) and (max-width:380px)": {
      fontSize: "18.5px",
      textAlign: "center",
      marginBottom: 0,
      lineHeight: "1"
    },
    "@media (max-width:320px)": {
      fontSize: "17px",
      textAlign: "center",
      marginBottom: 0,
      lineHeight: "1"
    }
  }
}));

export default function About() {
  const classes = useStyles();

  const settings = {
    // dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false
          // fade: true
        }
      }
    ]
  };
  return (
    <div className={classes.root}>
      <label className={classes.header}>Our Story</label>
      <p className={classes.leadContent}>
        Social summit, started in 2016, by the inspired youths who believed in
        crystallizing their vision for a better society. Identifying the most
        pressing social problems and thus evolving actionable insights for
        contemporary challenges, Social Summit has constantly grown, evolved and
        pushed the boundaries of what a social fest can be, by pioneering in
        past themes such as “Empowerment through education” and “Women and child
        welfare”.
      </p>

      {/* This is the carousel */}
      <div>
        <Slider {...settings} className={classes.mainSlider}>
          <div className={classes.container}>
            <h3 className={classes.followHeader}> Mission </h3>
            <p className={classes.followContent}>
              Social integration is indispensable to create an inclusive
              society. We devise ‘sustainable solution model’ to the social
              problems engaging with the community and stakeholders, creating a
              sense of responsibility and awareness in the society.
            </p>
          </div>
          <div className={classes.container}>
            <h3 className={classes.followHeader}>Vision</h3>
            <p className={classes.followContent}>
              Eradication of disparity in different sections of society,
              propagating the propaganda of curing indifferences, Summit aims to
              clear the path of its inspired manifestation by uplifting the
              burdened sections of society to bridge the existing communal
              chasm.
            </p>
          </div>
          <div className={classes.container}>
            <h3 className={classes.followHeader}>Dynamics</h3>
            <p className={classes.followContent}>
              Collaboration with 30+ NGO’s and various stakeholders to sketch
              the inspired imagination of ‘curving indifferences’ on paper.
              Entrenched connections with social activists at ground level
              encompassing contemporary social problems and their excavation
              from roots.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}
