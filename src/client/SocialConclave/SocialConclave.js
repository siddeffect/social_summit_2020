import React from "react";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";
import SCHome from "./SCHome";
import About from "./About";

function MUN() {
  return (
    <div>
      <Navbar />
      <SCHome />
      <About />
      <Footer />
    </div>
  );
}

export default MUN;
