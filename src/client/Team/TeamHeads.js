import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TeamCard from "./TeamCard";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  outerContainer: {
    display: "flex",
    flexFlow: "column",
    textAlign: "center",
    backgroundColor: "#111",
    paddingTop: "10vh"
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "5vh"
  },
  wraper: {
    width: "auto",
    position: "relative",
    display: "inline-block"
  },
  header: {
    textAlign: "center",
    fontSize: "3.75rem",
    color: "#cc8c19",
    lineHeight: "60px",
    fontFamily: "Roboto !important",
    boxSizing: "border-box",

    // "@media(min-width:1024px)": {
    //   position: "absolute",
    //   top: "70vh",
    //   left: "-5vw",
    //   marginLeft: "0",
    //   transformOrigin: "0 1",
    //   transform: "rotate(270deg)"
    // },

    "@media (min-width:1260px) and (max-width:1650px)": {
      fontSize: "3rem"
    },
    "@media (min-width:600px) and (max-width:768px)": {
      fontSize: "40px"
    },
    "@media (max-width:500px)": {
      fontSize: "28px"
    },
    "@media (max-width:320px)": {
      fontSize: "24px"
    }
  }
}));

export default function TeamHeads() {
  const classes = useStyles();

  const ConvenorsArray = [
    {
      name: "Yash Agarwal",
      post: "Convenor",
      src: "./Images/Speakers/abhishek_jain-min.jpg",
      socialHandleLink: {
        facebook: "https://www.facebook.com/",
        linkedin: "",
        instagram: ""
      }
    },
    {
      name: "Parag Mittal",
      post: "Convenor",
      src: "./Images//Speakers/chaturvedi-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    }
  ];
  const CoConvenorsArray = [
    {
      name: "Akshay Meena",
      post: "Co-Convenor",
      src: "./Images//Speakers/sonam_wangchu-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    },
    {
      name: "Ankit Gaeg",
      post: "Co-Convenor",
      src: "./Images//Speakers/sonam_wangchu-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    },
    {
      name: "Sanskar Chordiya",
      post: "Co-Convenor",
      src: "./Images/Speakers/abhishek_jain-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    }
  ];

  const TechHeadArray = [
    {
      name: "Siddharth Varshney",
      post: "Technical Head",
      src: "./Images//Speakers/chaturvedi-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    }
  ];

  const Convenors = ConvenorsArray.map((item, index) => {
    return (
      <TeamCard
        src={item.src}
        name={item.name}
        post={item.post}
        socialHandleLink={item.socialHandleLink}
      />
    );
  });

  const CoConvenors = CoConvenorsArray.map((item, index) => {
    return (
      <TeamCard
        src={item.src}
        name={item.name}
        post={item.post}
        socialHandleLink={item.socialHandleLink}
      />
    );
  });

  const TechHead = TechHeadArray.map((item, index) => {
    return (
      <TeamCard
        src={item.src}
        name={item.name}
        post={item.post}
        socialHandleLink={item.socialHandleLink}
      />
    );
  });

  return (
    <div className={classes.outerContainer}>
      <Fade bottom>
        <div className={classes.wraper}>
          <label className={classes.header}> Team Heads</label>
        </div>
        <div className={classes.container}>{Convenors}</div>
        <div className={classes.container}>{CoConvenors}</div> <br /> <br />
        <div className={classes.container}>{TechHead}</div>
      </Fade>
    </div>
  );
}
