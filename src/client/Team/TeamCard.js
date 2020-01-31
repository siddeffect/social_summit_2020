import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  card: {
    boxSizing: "border-box",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-around",
    paddingBottom: "3vh"
  },
  image: {
    width: "280px",
    height: "420px",
    "@media (min-width:1260px) and (max-width:1450px)": {
      width: "250px",
      height: "360px"
    },
    "@media (min-width:600px) and (max-width:768px)": {
      width: "160px",
      height: "240px"
    },
    "@media (max-width:500px)": {
      width: "100px",
      height: "150px"
    },
    "@media (max-width:320px)": {
      width: "80px",
      height: "120px"
    }
  },
  name: {
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontWeight: "normal",
    whiteSpace: "nowrap",
    margin: "0 auto",
    color: "#a79376",
    fontSize: "32px",
    paddingTop: "20px",
    "@media (min-width:1260px) and (max-width:1450px)": {
      fontSize: "24px !important"
    },
    "@media (min-width:600px) and (max-width:768px)": {
      fontSize: "20px !important"
    },
    "@media (max-width:500px)": {
      fontSize: "16px !important"
    },
    "@media (max-width:320px)": {
      fontSize: "14px !important"
    }
  },

  post: {
    fontFamily: "Roboto !important",
    fontStyle: "bold !important",
    fontSize: "36px !important",
    textAlign: "center !important",
    color: "antiquewhite !important",
    margin: "0 !important",
    padding: "1vh 2vw 2vh 2vw",
    "@media (min-width:1260px) and (max-width:1450px)": {
      fontSize: "26px !important"
    },
    "@media (min-width:600px) and (max-width:768px)": {
      fontSize: "20px !important"
    },
    "@media (max-width:500px)": {
      fontSize: "16px !important"
    },
    "@media (max-width:320px)": {
      fontSize: "14px !important"
    }
  }
}));

const TeamCard = props => {
  const classes = useStyles();
  {
    return (
      <div className={classes.card}>
        <img alt="" src={props.src} className={classes.image}></img>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.post}>{props.post}</p>
      </div>
    );
  }
};

export default TeamCard;

// TeamCard.propTypes = {
//   name: PropTypes.string,
//   content: PropTypes.string.isRequired,
//   heading: PropTypes.string.isRequired,
//   src: PropTypes.string.isRequired
// };
