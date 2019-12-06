import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
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
    }
  },
  leadContent: {
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontWeight: "300",
    fontSize: "1.6rem",
    lineHeight: "1.538",
    marginBottom: "3.6rem",
    maxWidth: "40vw",
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
      maxWidth: "50vw",
      marginBottom: "2.5rem"
    },
    "@media(min-width:350px) and (max-width:420px)": {
      fontSize: "20px",
      maxWidth: "80vw",
      marginBottom: "0.5%",
      fontWeight: 1.4
    }
  },
  mainSlider: {
    margin: "0 15vw 0 15vw"
  },
  container: {
    maxWidth: "15vw",
    "@media(min-width:500px) and (max-width:605px)": {
      maxWidth: "50vw"
    },
    "@media(min-width:350px) and (max-width:420px)": {
      maxWidth: "100vw"
    }
  },
  followHeader: {
    textAlign: "justify",
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontWeight: 600,
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "#fff",
    "@media(min-width:500px) and (max-width:605px)": {
      fontSize: "36px",
      marginBottom: "1rem"
    },
    "@media(min-width:385px) and (max-width:420px)": {
      fontSize: "30px",
      marginBottom: "1rem",
      textAlign: "center",
      fontWeight: 550
    },
    "@media(min-width:350px) and (max-width:380px)": {
      fontSize: "28px",
      marginBottom: "0.5%",
      textAlign: "center",
      fontWeight: 550
    }
  },
  followContent: {
    textAlign: "left",
    color: "rgba(255,255,255,.7)",
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontSize: "1.2rem",
    lineHeight: "1.3",
    "@media(min-width:500px) and (max-width:605px)": {
      fontSize: "20px"
    },
    "@media(min-width:350px) and (max-width:420px)": {
      fontSize: "20px",
      textAlign: "center"
    },
    "@media(min-width:350px) and (max-width:380px)": {
      marginBottom: 0
    }
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
    autoplaySpeed: 2000,
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
