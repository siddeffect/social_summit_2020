import React from 'react';
import Navbar from './client/Layout/Navbar/Navbar';
import Carousel from './client/Layout/Carousel/Carousel'
import Footer from "./client/Layout/Footer/Footer";
import Hero from "./client/Home/Hero/Hero.js";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
