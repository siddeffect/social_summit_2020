import React, { Component } from "react";
import CABackground from "./CABackground";
import WhyCA from "./WhyCA";
import Navbar from "./../Layout/Navbar/Navbar";
export class Index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CABackground></CABackground>
        <WhyCA> </WhyCA>
      </div>
    );
  }
}

export default Index;
