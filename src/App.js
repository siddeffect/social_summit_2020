import React from "react";
import Navbar from "./client/Layout/Navbar/Navbar";
import Grid from "./client/Home/Image Grid/imageGrid";
import Footer from "./client/Layout/Footer/Footer";
import Hero from "./client/Home/Hero/Hero.js";
import CounterComponent from "./client/Home/Counter/CounterComponent";
import EventNSS from "./client/Home/NSSEvent/eventNSS";

function App() {
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

export default App;
