import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CounterNumberUp from "./CounterNumberUp";

const useStyles = makeStyles(theme => ({
  root: {
    background: "#272727",
    height: 250,
    width: "auto",
    display: "flex",
    flexDirection: "row",
    margin: "0 0 20px 0",
    textAlign: "center",
    padding: "0 100px 0 100px",
    "@media (max-width:780px)": {
      padding: 0,
      height: 160
    },
    "@media (max-width:320px)": {
      height: 140
    }
  },

  container: {
    height: "100%",
    width: "25%",
    fontSize: 50,
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    background: "#272727",
    flexWrap: "wrap",
    alignContent: "center"
  },

  header: {
    marginTop: "20px",
    alignContent: "center",
    textAlign: "center",
    width: "100%",
    flexGrow: 1,
    fontSize: 55,
    verticalAlign: "center",
    color: "#4aa651",
    fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
    "@media (max-width:780px)": {
      fontSize: 32,
      flexGrow: 0.6,
      marginTop: "30%"
    },
    "@media (min-width:350px) and (max-width:420px)": {
      fontSize: 22
    },
    "@media (max-width:320px)": {
      fontSize: 20
    }
  },

  data: {
    flexGrow: 1,
    fontSize: 70,
    color: "#ffffff",
    fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
    textAlign: "center",
    "@media (max-width:780px)": {
      fontSize: 35,
      flexGrow: 0.6
    },
    "@media (min-width:350px) and (max-width:375px)": {
      fontSize: 30
    },
    "@media (max-width:320px)": {
      fontSize: 20
    }
  }
}));

export default function CounterComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>Events</div>
        <div className={classes.data}>
          <CounterNumberUp endValue="10" time="100" />
        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.header}>Partners</div>
        <div className={classes.data}>
          <CounterNumberUp endValue="20" time="100" />
        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.header}>FootFall</div>
        <div className={classes.data}>
          <CounterNumberUp endValue="1000" time="10" />
        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.header}>Team</div>
        <div className={classes.data}>
          <CounterNumberUp endValue="50" time="50" />
        </div>
      </div>
    </div>
  );
}
