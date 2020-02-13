import React from "react";
import SCFooter from "./SCFooter";
import Navbar from "../Layout/Navbar/Navbar";
import SCHome from "./SCHome";
import About from "./About";
import Vision from "./Vision";
import Benefits from "./Benefits";
import Partner from "./Partner";

function Conclave() {
  return (
    <div>
      <Navbar />
      <SCHome />
      <Partner />
      <About />
      <Vision />
      <Benefits />
      <SCFooter />
    </div>
  );
}

export default Conclave;
