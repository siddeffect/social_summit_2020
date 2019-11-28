import React from "react";
import Navbar from "./client/Layout/Navbar/Navbar";
import Grid from "./client/Layout/Image Grid/imageGrid";
import Footer from "./client/Layout/Footer/Footer";
import Hero from "./client/Home/Hero/Hero.js";
import EventNSS from "./client/Layout/NSS Event/eventNSS";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Grid /> <br />
      <EventNSS />
      <Footer />
    </div>
  );
}

export default App;
