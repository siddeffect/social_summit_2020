import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    backgroundColor: "#00a650",
    padding: "12rem 0 12rem 0",
    alignItem: "center",
    justifyContent: "center"
  },
  header: {
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "4rem",
    color: "#fff",
    letterSpacing: "-.03rem",
    marginBottom: "4rem",
    fontWeight: "600",
    lineHeight: "1.2"
  },
  leadContent: {
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontWeight: "300",
    fontSize: "1.6rem",
    lineHeight: "1.538",
    marginBottom: "3.6rem",
    maxWidth: "40vw",
    color: "rgba(255,255,255,.7)",
    margin: "1rem auto auto auto"
  },
  mainSlider: {
    margin: "0 15vw 0 15vw"
  },
  container: {
    maxWidth: "15vw"
  },
  followHeader: {
    textAlign: "justify",
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontWeight: 600,
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "#fff"
  },
  followContent: {
    textAlign: "left",
    color: "rgba(255,255,255,.7)",
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
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className={classes.root}>
      <label className={classes.header}>
        The Most Popular And <br /> Number 1 Mail App.
      </label>

      <p className={classes.leadContent}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
        reprehenderit vel similique, suscipit voluptatibus culpa voluptatum
        laboriosam praesentium ullam, omnis consequuntur, consequatur ipsam esse
        atque.
      </p>

      {/* This is the carousel */}
      <div>
        <Slider {...settings} className={classes.mainSlider}>
          <div className={classes.container}>
            <h3 className={classes.followHeader}>Lorem, ipsum.</h3>
            <p className={classes.followContent}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              animi eaque sunt autem inventore minus! Laborum facere numquam
              recusandae ex.
            </p>
          </div>
          <div className={classes.container}>
            <h3 className={classes.followHeader}>Lorem, ipsum.</h3>
            <p className={classes.followContent}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              animi eaque sunt autem inventore minus! Laborum facere numquam
              recusandae ex.
            </p>
          </div>
          <div className={classes.container}>
            <h3 className={classes.followHeader}>Lorem, ipsum.</h3>
            <p className={classes.followContent}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              animi eaque sunt autem inventore minus! Laborum facere numquam
              recusandae ex.
            </p>
          </div>
          <div className={classes.container}>
            <h3 className={classes.followHeader}>Lorem, ipsum.</h3>
            <p className={classes.followContent}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              animi eaque sunt autem inventore minus! Laborum facere numquam
              recusandae ex.
            </p>
          </div>
          <div className={classes.container}>
            <h3 className={classes.followHeader}>Lorem, ipsum.</h3>
            <p className={classes.followContent}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              animi eaque sunt autem inventore minus! Laborum facere numquam
              recusandae ex.
            </p>
          </div>
          <div className={classes.container}>
            <h3 className={classes.followHeader}>Lorem, ipsum.</h3>
            <p className={classes.followContent}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              animi eaque sunt autem inventore minus! Laborum facere numquam
              recusandae ex.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}
