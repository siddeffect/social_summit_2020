import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TeamCard from "./TeamCard";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  outerContainer: {
    display: "flex",
    flexFlow: "column",
    textAlign: "center",
    backgroundImage: "url(/Images/Subtle-Prism.svg)",
    "@media (max-width:500px)": {
      height: "100vh"
    }
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  header: {
    textAlign: "center",
    fontSize: "56px",
    color: "#cc8c19",
    lineHeight: "10px",
    fontFamily: "Roboto !important",
    boxSizing: "border-box",
    padding: "5vh 0 5vh 0",
    "@media (min-width:1260px) and (max-width:1450px)": {
      fontSize: "46px",
      padding: "10vh 0 5vh 0"
    },
    "@media (min-width:600px) and (max-width:768px)": {
      fontSize: "40px",
      padding: "10vh 0 5vh 0"
    },
    "@media (max-width:500px)": {
      fontSize: "28px",
      padding: "10vh 0 5vh 0"
    },
    "@media (max-width:320px)": {
      fontSize: "24px",
      padding: "12vh 0 2.5vh 0"
    }
  }
}));

function Team() {
  const classes = useStyles();

  const ConvenorsArray = [
    {
      name: "Yash Agarwal",
      post: "Convenor",
      src: "./Images/team/sample1.jpeg"
    },
    {
      name: "Parag Mittal",
      post: "Convenor",
      src: "./Images/team/sample2.jpeg"
    }
  ];
  const CoConvenorsArray = [
    {
      name: "Akshay Meena",
      post: "Co-Convenor",
      src: "./Images/team/sample3.jpeg"
    },
    {
      name: "Ankit",
      post: "Co-Convenor",
      src: "./Images/team/sample4.jpeg"
    },
    {
      name: "Sanskar ",
      post: "Co-Convenor",
      src: "./Images/team/sample1.jpeg"
    }
    //   {
    //     name: "Siddharth Varshney",
    //     post: "Technical Head",
    //     src: "./Images/team/sample4.jpeg"
    //   }
    //
  ];

  const Convenors = ConvenorsArray.map((item, index) => {
    return <TeamCard src={item.src} name={item.name} post={item.post} />;
  });

  const CoConvenors = CoConvenorsArray.map((item, index) => {
    return <TeamCard src={item.src} name={item.name} post={item.post} />;
  });

  return (
    <Fade bottom>
      <div className={classes.outerContainer}>
        <p className={classes.header}> Meet The Team</p>
        <div className={classes.container}>{Convenors}</div>
        <div className={classes.container}>{CoConvenors}</div>
      </div>
    </Fade>
  );
}

export default Team;
