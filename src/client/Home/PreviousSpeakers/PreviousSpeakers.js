import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    backgroundColor: "#F2F2F2",
    padding: "6rem 0 6rem 0",
    alignItem: "center",
    justifyContent: "center"
  },
  header: {
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "4rem",
    color: "#000",
    letterSpacing: "-.03rem",
    fontWeight: "600",
    lineHeight: "1.2"
  },
  mainSlider: {
    margin: "5vh 15vw 0 15vw"
  },
  container: {
    maxWidth: "25vw",
    marginRight: "5vw"
  },
  image: {
    heignt: "5rem",
    width: "5rem",
    borderRadius: "50%",
    flexGrowth: "1"
  },
  bio: {},
  followHeader: {
    textAlign: "center",
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontWeight: 600,
    fontSize: "1.6rem",
    marginBottom: "2rem",
    color: "#49AB5A"
  },
  followContent: {
    textAlign: "center",
    color: "#929292",
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "1.2rem",
    lineHeight: "1.3"
  }
}));

export default function About() {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className={classes.root}>
      <label className={classes.header}>Our Previous Speakers</label>
      {/* This is the carousel */}
      <div>
        <Slider {...settings} className={classes.mainSlider}>
          <div className={classes.container}>
            <div>
              <img
                src="/Images/PreviousSpeakers/sample.jpg"
                alt="speaker"
                className={classes.image}
              ></img>
            </div>
            <div className={classes.bio}>
              <h3 className={classes.followHeader}>Lorem, ipsum.</h3>
              <p className={classes.followContent}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                animi eaque sunt autem inventore minus! Laborum facere numquam
                recusandae ex.
              </p>
            </div>
          </div>
          <div className={classes.container}>
            <div>
              <img
                src="/Images/PreviousSpeakers/sample.jpg"
                alt="speaker"
                className={classes.image}
              ></img>
            </div>
            <div className={classes.bio}>
              <h3 className={classes.followHeader}>Lorem, ipsum.</h3>
              <p className={classes.followContent}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                animi eaque sunt autem inventore minus! Laborum facere numquam
                recusandae ex.
              </p>
            </div>
          </div>
          <div className={classes.container}>
            <div>
              <img
                src="/Images/PreviousSpeakers/sample.jpg"
                alt="speaker"
                className={classes.image}
              ></img>
            </div>
            <div className={classes.bio}>
              <h3 className={classes.followHeader}>Lorem, ipsum.</h3>
              <p className={classes.followContent}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                animi eaque sunt autem inventore minus! Laborum facere numquam
                recusandae ex.
              </p>
            </div>
          </div>
          <div className={classes.container}>
            <div>
              <img
                src="/Images/PreviousSpeakers/sample.jpg"
                alt="speaker"
                className={classes.image}
              ></img>
            </div>
            <div className={classes.bio}>
              <h3 className={classes.followHeader}>Lorem, ipsum.</h3>
              <p className={classes.followContent}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                animi eaque sunt autem inventore minus! Laborum facere numquam
                recusandae ex.
              </p>
            </div>
          </div>
          <div className={classes.container}>
            <div>
              <img
                src="/Images/PreviousSpeakers/sample.jpg"
                alt="speaker"
                className={classes.image}
              ></img>
            </div>
            <div className={classes.bio}>
              <h3 className={classes.followHeader}>Lorem, ipsum.</h3>
              <p className={classes.followContent}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                animi eaque sunt autem inventore minus! Laborum facere numquam
                recusandae ex.
              </p>
            </div>
          </div>
          <div className={classes.container}>
            <div>
              <img
                src="/Images/PreviousSpeakers/sample.jpg"
                alt="speaker"
                className={classes.image}
              ></img>
            </div>
            <div className={classes.bio}>
              <h3 className={classes.followHeader}>Lorem, ipsum.</h3>
              <p className={classes.followContent}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                animi eaque sunt autem inventore minus! Laborum facere numquam
                recusandae ex.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
