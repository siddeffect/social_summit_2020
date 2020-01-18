import React from "react";
import Navbar from "./../Layout/Navbar/Navbar";
import Footer from "./../Layout/Footer/Footer";
import Grid from "./ImageGrid/imageGrid";
import Hero from "./Hero/Hero.js";
import Countdown from './Countdown/Countdown'
import CounterComponent from "./Counter/CounterComponent";
import EventNSS from "./NSSEvent/eventNSS";
import About from "./About/About";
import PreviousSpeakers from "./PreviousSpeakers/PreviousSpeakers";
import SponNgo from "./spon_ngo/SponNgo";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Countdown timeTillDate="02 14 2020,12:00:00 am" timeFormat="MM DD YYYY, h:mm a"/>
      <About />
      <CounterComponent />
      <Grid />
      <PreviousSpeakers />
      <SponNgo />
      <EventNSS />
      <Footer />
    </div>
  );
}

export default Home;
