import React from "react";
import Navbar from "./../Layout/Navbar/Navbar";
import Footer from "./../Layout/Footer/Footer";
import Grid from "./ImageGrid/imageGrid";
import Hero from "./Hero/Hero.js";
import CounterComponent from "./Counter/CounterComponent";
import EventNSS from "./NSSEvent/eventNSS";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CounterComponent />
      <Grid />
      <EventNSS />
      <Footer />
    </div>
  );
}

export default Home;
