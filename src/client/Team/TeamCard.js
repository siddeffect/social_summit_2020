import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import classes from "./TeamCard.module.css";
// import { IconButton } from "@material-ui/core";
import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";

// const useStyles = makeStyles(theme => ({
//   card: {
//     boxSizing: "border-box",
//     display: "flex",
//     flexFlow: "column",
//     alignItems: "center",
//     textAlign: "center",
//     justifyContent: "space-around",
//     paddingBottom: "3vh"
//   },
//   image: {
//     width: "260px",
//     height: "340px",
//     "@media (min-width:1260px) and (max-width:1450px)": {
//       width: "240px",
//       height: "300px"
//     },
//     "@media (min-width:600px) and (max-width:768px)": {
//       width: "160px",
//       height: "240px"
//     },
//     "@media (max-width:500px)": {
//       width: "100px",
//       height: "150px"
//     },
//     "@media (max-width:320px)": {
//       width: "80px",
//       height: "120px"
//     }
//   },
//   name: {
//     fontFamily: "Ubuntu",
//     fontStyle: "normal",
//     fontWeight: "normal",
//     whiteSpace: "nowrap",
//     margin: "0 auto",
//     color: "#a79376",
//     fontSize: "32px",
//     paddingTop: "20px",
//     "@media (min-width:1260px) and (max-width:1450px)": {
//       fontSize: "24px !important"
//     },
//     "@media (min-width:600px) and (max-width:768px)": {
//       fontSize: "20px !important"
//     },
//     "@media (max-width:500px)": {
//       fontSize: "14px !important"
//     },
//     "@media (max-width:320px)": {
//       fontSize: "12.5px !important"
//     }
//   },

//   post: {
//     fontFamily: "Roboto !important",
//     fontStyle: "bold !important",
//     fontSize: "36px !important",
//     textAlign: "center !important",
//     color: "antiquewhite !important",
//     margin: "0 !important",
//     padding: "1vh 2vw 2vh 2vw",
//     "@media (min-width:1260px) and (max-width:1450px)": {
//       fontSize: "26px !important"
//     },
//     "@media (min-width:600px) and (max-width:768px)": {
//       fontSize: "20px !important"
//     },
//     "@media (max-width:500px)": {
//       fontSize: "15px !important"
//     },
//     "@media (max-width:320px)": {
//       fontSize: "13px !important"
//     }
//   },
//   iconList: {
//     display: "block",
//     textAlign: "center"
//   },
//   icon: {
//     margin: theme.spacing(1),
//     color: "#545454",
//     fontSize: "2rem",
//     ":hover&": {
//       color: "#00a650"
//     },
//     "@media (min-width:1600px) and (max-width:1920px)": {
//       fontSize: "2.5rem"
//     },
//     "@media (max-width:500px)": {
//       fontSize: "1.5rem",
//       margin: "0"
//     },
//     "@media (max-width:320px)": {
//       fontSize: "1.25rem",
//       margin: "0"
//     }
//   }
// }));

const TeamCard = props => {
  // const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className={classes.box}>
        <ul className={classes.iconList}>
          <li className={classes.listItem}>
            <a href={props.socialHandleLink.facebook} target="blank">
              {" "}
              <Facebook className={classes.icon} />
            </a>
          </li>
          <li className={classes.listItem}>
            <a href={props.socialHandleLink.linkedin} target="blank">
              {" "}
              <LinkedIn className={classes.icon} />
            </a>
          </li>
          <li className={classes.listItem}>
            <a href={props.socialHandleLink.instagram} target="blank">
              {" "}
              <Instagram className={classes.icon} />
            </a>
          </li>
        </ul>

        <img alt="" src={props.src} className={classes.image}></img>
        <div className={classes.content}>
          <p className={classes.name}>{props.name}</p>
          <p className={classes.post}>{props.post}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
