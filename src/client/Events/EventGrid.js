import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Typography from "./Typography";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: "15vh",
    marginBottom: theme.spacing(4)
  },
  images: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexWrap: "wrap",
    borderRadius: "2rem"
  },
  header: {
    textAlign: "center",
    position: "relative",
    fontSize: "3rem",
    lineHeight: "40px",
    fontFamily: ["'ibm plex serif'", "sarif"].join(","),
    letterSpacing: "-0.03rem",
    fontWeight: "600",
    color: "#2d3034",
    textTransform: "uppercase",
    "@media(max-width:600px)": {
      fontSize: "36px"
    },
    "@media(max-width:320px)": {
      fontSize: "30px"
    }
  },
  line: {
    position: "absolute",
    background: "#46A651",
    width: "80px",
    height: "4px",
    bottom: "-1",
    left: "50%",
    marginLeft: "-47px",
    marginTop: "0",
    marginBottom: "20px",
    boxSizing: "border-box"
  },
  imageWrapper: {
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    height: "40vh",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: 100
    },
    "&:hover": {
      zIndex: 1
    },
    "&:hover $imageBackdrop": {
      opacity: 0.15
    },
    "&:hover $imageMarked": {
      opacity: 0
    },
    "&:hover $imageTitle": {
      border: "4px solid currentColor"
    }
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: "#409A4B",
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
}));

function EventGrid(props) {
  const classes = useStyles();

  const images = [
    {
      url: "/Images/events_images/case_study-min.jpg",
      title: "Case Study",
      width: "40%",
      link: "/caseStudy"
    },
    {
      url: "/Images/events_images/street_play-min.jpg",
      title: "Nukkad Natak",
      width: "20%",
      link: "/nukkadNatak"
    },
    {
      url: "/Images/events_images/rtc-min.jpg",
      title: "Round Table Conference",
      width: "40%",
      link: "/roundTableConference"
    },

    {
      url: "/Images/events_images/b_plan-min.jpg",
      title: "Action Plan(B-Plan)",
      width: "25%",
      link: "/actionPlan"
    },
    // {
    //   url: "/Images/events_images/cultural_night-min.jpg",
    //   title: "Cultural Night",
    //   width: "34%",
    //   link: ""
    // },
    {
      url: "/Images/events_images/workshop-min.jpg",
      title: "Workshops",
      width: "25%",
      link: "/workshop"
    },
    {
      url: "/Images/events_images/work_presentation-min.jpg",
      title: "Innovision",
      width: "25%",
      link: "/innovision"
    },
    {
      url: "/Images/events_images/mun-min.jpg",
      title: "MUN",
      width: "25%",
      link: "/"
    },
    {
      url: "/Images/events_images/hackathon-min.jpg",
      title: "Sociothon",
      width: "35%",
      link: "/sociothon"
    },

    {
      url: "/Images/events_images/policy_case-min.jpg",
      title: "Policy Case Competition",
      width: "30%",
      link: "/policyCaseCompetition"
    },
    {
      url: "/Images/events_images/quiz-min.jpg",
      title: "Inquizition",
      width: "35%",
      link: "/inquizition"
    },
    {
      url: "/Images/events_images/microfiction-min.jpg",
      title: "Microfiction",
      width: "25%",
      link: "/microfiction"
    },
    {
      url: "/Images/events_images/pixel-min.jpg",
      title: "Pixels",
      width: "20%",
      link: "/pixels"
    },
    {
      url: "/Images/events_images/caricature-min.jpg",
      title: "Caricature",
      width: "30%",
      link: "/caricature"
    },
    {
      url: "/Images/events_images/1080p-min.jpg",
      title: "1080p",
      width: "25%",
      link: "/1080p"
    }
  ];

  return (
    <Container className={classes.root} component="section">
      <h1 className={classes.header}>Events</h1>
      <hr className={classes.line} />
      <Fade bottom>
        <div className={classes.images}>
          {images.map(image => (
            <ButtonBase
              key={image.title}
              className={classes.imageWrapper}
              style={{
                width: image.width
              }}
              href={
                image.title === "MUN"
                  ? window.location.origin + "/mun"
                  : window.location.href + image.link
              }
            >
              <div
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`
                }}
              />
              <div className={classes.imageBackdrop} />
              <div className={classes.imageButton}>
                <Typography
                  component="h3"
                  variant="h5"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <div className={classes.imageMarked} />
                </Typography>
              </div>
            </ButtonBase>
          ))}
        </div>
      </Fade>
    </Container>
  );
}

export default EventGrid;
