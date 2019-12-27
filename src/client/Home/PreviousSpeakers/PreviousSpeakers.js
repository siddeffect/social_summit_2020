import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    backgroundColor: "#F2F2F2",
    padding: "6rem 0 6rem 0",
    alignItem: "center",
    justifyContent: "center",
    "@media(min-width:500px) and (max-width:605px)": {
      padding: "2rem 0 11rem 0"
    },
    "@media(min-width:350px) and (max-width:361px)": {
      padding: "3rem 0 6rem 0"
    },
    "@media(min-width:365px) and (max-width:380px)": {
      padding: "4rem 0 6rem 0"
    },
    "@media(min-width:400px) and (max-width:420px)": {
      padding: "5rem 0 10rem 0"
    },
    "@media (max-width:320px)": {
      padding: "3rem 0 6rem 0"
    }
  },
  header: {
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "4rem",
    color: "#000",
    letterSpacing: "-.03rem",
    fontWeight: "600",
    lineHeight: "1.2",
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
  mainSlider: {
    margin: "5vh 15vw 0 15vw",
    "@media (max-width:600px)": {
      margin: "5vh 15vw 0 10vw"
    }
  },
  container: {
    maxWidth: "25vw",
    marginRight: "5vw",
    "@media(min-width:500px) and (max-width:605px)": {
      maxWidth: "50vw",
      marginRight: "10vw"
    },
    "@media(min-width:350px) and (max-width:420px)": {
      maxWidth: "50vw",
      marginRight: "0"
    },
    "@media (max-width:320px)": {
      maxWidth: "60vw",
      marginRight: "0"
    }
  },
  image: {
    heignt: "8rem",
    width: "8rem",
    borderRadius: "50%",
    flexGrowth: "1",
    "@media (max-width:320px)": {
      marginLeft: "20% !important"
    },
    "@media (min-width:350px) and (max-width:380px)": {
      marginLeft: "17% !important"
    },
    "@media (min-width:380px) and (max-width:420px)": {
      marginLeft: "20% !important"
    }
  },
  bio: {},
  followHeader: {
    textAlign: "center",
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontWeight: 600,
    fontSize: "1.6rem",
    marginBottom: "2rem",
    color: "#49AB5A",
    "@media(min-width:500px) and (max-width:605px)": {
      fontWeight: 550,
      fontSize: "1.8rem",
      marginBottom: "0.5rem"
    },
    "@media(min-width:350px) and (max-width:420px)": {
      fontWeight: 525,
      fontSize: "28px",
      marginBottom: "0.5rem"
    },
    "@media (max-width:320px)": {
      fontWeight: 500,
      fontSize: "24px",
      marginBottom: "0.5rem"
    }
  },
  followContent: {
    textAlign: "center",
    color: "#929292",
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "1.2rem",
    lineHeight: "1.3",
    "@media (max-width:320px)": {
      fontSize: "16px"
    }
  }
}));

export default function About() {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 850,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className={classes.root}>
      <Fade bottom>
        <label className={classes.header}>Our Previous Speakers</label>
        {/* This is the carousel */}
        <div>
          <Slider {...settings} className={classes.mainSlider}>
            <div className={classes.container}>
              <div>
                <img
                  src="/Images/PreviousSpeakers/deepak_ramola.jpg"
                  alt="speaker"
                  className={classes.image}
                ></img>
              </div>
              <div className={classes.bio}>
                <h3 className={classes.followHeader}>Deepak Ramola</h3>
                <p className={classes.followContent}>
                  Ted speaker <br />
                  Founder Project Fuel
                </p>
              </div>
            </div>
            <div className={classes.container}>
              <div>
                <img
                  src="/Images/PreviousSpeakers/priyanka_raina.jpg"
                  alt="speaker"
                  className={classes.image}
                ></img>
              </div>
              <div className={classes.bio}>
                <h3 className={classes.followHeader}>Priyanka Raina</h3>
                <p className={classes.followContent}>
                  Founder <br /> Gracia Raina Foundation
                </p>
              </div>
            </div>
            <div className={classes.container}>
              <div>
                <img
                  src="/Images/PreviousSpeakers/kiran_bedi.jpg"
                  alt="speaker"
                  className={classes.image}
                ></img>
              </div>
              <div className={classes.bio}>
                <h3 className={classes.followHeader}>Kiran Bedi</h3>
                <p className={classes.followContent}>Retired IPS Officer</p>
              </div>
            </div>
            <div className={classes.container}>
              <div>
                <img
                  src="/Images/PreviousSpeakers/amarpreet_singh.jpg"
                  alt="speaker"
                  className={classes.image}
                ></img>
              </div>
              <div className={classes.bio}>
                <h3 className={classes.followHeader}>Amarpreet Singh</h3>
                <p className={classes.followContent}>Director - Khalsa Aid</p>
              </div>
            </div>
            <div className={classes.container}>
              <div>
                <img
                  src="/Images/PreviousSpeakers/vijay_pal_singh.jpg"
                  alt="speaker"
                  className={classes.image}
                ></img>
              </div>
              <div className={classes.bio}>
                <h3 className={classes.followHeader}>Vijay Pal Singh</h3>
                <p className={classes.followContent}>
                  Deputy Director <br /> <em>fssai</em>
                </p>
              </div>
            </div>
            <div className={classes.container}>
              <div>
                <img
                  src="/Images/PreviousSpeakers/anil_swaroop.jpg"
                  alt="speaker"
                  className={classes.image}
                ></img>
              </div>
              <div className={classes.bio}>
                <h3 className={classes.followHeader}>Anil Swaroop</h3>
                <p className={classes.followContent}>
                  Secretary of school education
                </p>
              </div>
            </div>
            <div className={classes.container}>
              <div>
                <img
                  src="/Images/PreviousSpeakers/madhukar_banuri.jpg"
                  alt="speaker"
                  className={classes.image}
                ></img>
              </div>
              <div className={classes.bio}>
                <h3 className={classes.followHeader}>Madhukar Banuri</h3>
                <p className={classes.followContent}>
                  Technical Advisor <br />
                  Teach for india
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </Fade>
    </div>
  );
}
