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
    marginTop: "10vh"
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

    // "@media(min-width:1024px)":{
    //   position: "absolute",
    //  top: "20vh",
    //  left: "-3vw",
    //  marginLeft: "0",
    //  transformOrigin: "0 1",
    //  transform: "rotate(270deg)",}

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

export default function Designers() {
  const classes = useStyles();

  const DesignersArray = [
    {
      name: "Sankalp Jha",
      post: "Manager",
      src: "./Images/Speakers/sonam_wangchu-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    },
    {
      name: "Mayank Parnami",
      post: "Manager ",
      src: "./Images/Speakers/sonam_wangchu-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    }
  ];

  const Designers = DesignersArray.map((item, index) => {
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
          <label className={classes.header}> Designers </label>
        </div>
        <div className={classes.container}>{Designers}</div>
      </Fade>
    </div>
  );
}
