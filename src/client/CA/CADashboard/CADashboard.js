import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "80vw",
    height: "80vh",
    margin: "10vh auto auto auto",
    display: "flex",
    flexDirection: "row"
  },
  menuItems: {
    display: "flex",
    flexDirection: "column",
    width: "20vw"
  },
  header: {
    height: "20vh",
    color: "#fff",
    backgroundColor: "#000",
    fontSize: "1.8rem",
    padding: "1rem"
  },
  menuList: {
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    background: "#00a650"
  },
  details: {
    width: "60vw",
    background: "#e0e0e0"
  }
}));

function CADashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.menuItems}>
        <div className={classes.header}>
          XYZ NAME
          <br />
          Indian Institute of Technology Roorkee
        </div>
        <div className={classes.menuList}>
          <li>ID: CAXN0001</li>
          <li>Referal ID: CAXN0001</li>
          <li>Summit Idea</li>
          <li>Logout</li>
        </div>
      </div>
      <div className={classes.details}>
        <h1>Personal Details</h1>
        <p>Name: Siddharth</p>
        <p>Email: siddharth@summit.com</p>
        <p>Contact Number: 1234567890</p>
        <p>Branch/Year: Civil, 3rd Year</p>
        <p>State: Punjab</p>
      </div>
    </div>
  );
}

export default CADashboard;
