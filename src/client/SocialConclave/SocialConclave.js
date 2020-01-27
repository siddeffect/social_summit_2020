import React from "react";
import Footer from "../Layout/Footer/Footer";
import Navbar from "../Layout/Navbar/Navbar";
import SCHome from "./SCHome";
import About from "./About";
import Vision from "./Vision";

function MUN() {
  return (
    <div>
      <Navbar />
      <SCHome />
      <About />
      <Vision />
      <Footer />
    </div>
  );
}

export default MUN;
