import React from "react";
import Navbar from "./../Layout/Navbar/Navbar";
import Footer from "./../Layout/Footer/Footer";
import Grid from "./ImageGrid/imageGrid";
import Hero from "./Hero/Hero.js";
import CounterComponent from "./Counter/CounterComponent";
import EventNSS from "./NSSEvent/eventNSS";
import About from "./About/About";
import PreviousSpeakers from "./PreviousSpeakers/PreviousSpeakers";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <CounterComponent />
      <Grid />
      <PreviousSpeakers />
      <EventNSS />
      <Footer />
    </div>
  );
}

export default Home;
