import React from "react";
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";
import EventGrid from "./EventGrid";

function Event() {
  return (
    <div>
      <Navbar />
      <EventGrid />
      <Footer />
    </div>
  );
}

export default Event;
