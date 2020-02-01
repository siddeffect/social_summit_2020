import React from "react";
import SCFooter from "./SCFooter";
import Navbar from "../Layout/Navbar/Navbar";
import SCHome from "./SCHome";
import About from "./About";
import Vision from "./Vision";
import Benefits from "./Benefits";

function Conclave() {
  return (
    <div>
      <Navbar />
      <SCHome />
      <About />
      <Vision />
      <Benefits />
      <SCFooter />
    </div>
  );
}

export default Conclave;
