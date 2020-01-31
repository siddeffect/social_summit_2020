import React, { Component } from "react";
import CABackground from "./CABackground";
import WhyCA from "./WhyCA";
import Aux from "../../hoc/Aux";
import Navbar from "./../Layout/Navbar/Navbar";
import Footer from "./../Layout/Footer/Footer";
export class Index extends Component {
  render() {
    return (
      <Aux>
        <Navbar />
        <div>
          <CABackground></CABackground>
          <WhyCA> </WhyCA>
        </div>
        <Footer />
      </Aux>
    );
  }
}

export default Index;
