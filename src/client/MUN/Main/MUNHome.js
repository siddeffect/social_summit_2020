import React from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import RegisterDialog from "./../Register/MUNRegister";

const useStyles = makeStyles(theme => ({
  background: {
    width: "100%",
    height: "100vh",
    position: "absolute",
    zIndex: "-99",
    objectFit: "cover"
  },
  mainContent: {
    paddingTop: "30vh",
    paddingLeft: "10vw"
  },
  header: {
    color: "#ffffff",
    fontSize: "5.5em",
    "@media (min-width:1360px) and (max-width:1440px)": {
      fontSize: "4em"
    },
    fontFamily: ["'ibm plex serif'", "serif"].join(","),
    fontWeight: 600,
    "@media (max-width:780px)": {
      fontSize: "2.4em"
    }
  },
  content: {
    margin: "20px 50px 0 0",
    maxWidth: "650px",
    color: "#eaeaea",
    fontSize: "1.3em",
    fontFamily: ["'Roboto'", "sans-serif"].join(","),
    "@media (max-width:780px)": {
      fontSize: "16px"
    }
  }
}));

function MUNHome() {
  const classes = useStyles();

  return (
    <div>
      <img
        src="/Images/mun/map.jpg"
        alt="mun_image"
        className={classes.background}
      />
      <Navbar />
      <div className={classes.mainContent}>
        <div className={classes.header}>Summit-MUN</div>
        <div className={classes.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum placeat
          eum error laboriosam, tenetur eius natus voluptates quos. Labore
          pariatur autem nihil facere mollitia sit atque, maiores impedit totam
          asperiores!
        </div>
        <div>
          <RegisterDialog />
        </div>
      </div>
    </div>
  );
}

export default MUNHome;
