import React from "react";
import Navbar from "./client/Layout/Navbar/Navbar";
import Grid from "./client/Layout/Image Grid/imageGrid";
import Footer from "./client/Layout/Footer/Footer";
import Hero from "./client/Home/Hero/Hero.js";
import EventNSS from "./client/Layout/NSS Event/eventNSS";
import CounterComponent from "./client/Layout/Counter/CounterComponent";
import Carousel from "./client/Home/Carousel/Carousel";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Grid />
      <CounterComponent />
      <EventNSS /> */}
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
