import React from "react";
import Navbar from "../Layout/Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../Layout/Footer/Footer";
import EventGrid from "./EventGrid";

const useStyles = makeStyles(theme => ({
  bg: {
    width: "100%",
    margin: "auto"
  }
}));

function Event() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      {/* <div>
        <img
          src="/Images/event/event_illustration.svg"
          alt="event_bg"
          className={classes.bg}
        />
      </div> */}
      <EventGrid />
      <Footer />
    </div>
  );
}

export default Event;
