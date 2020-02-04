import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Navbar from "../Layout/Navbar/Navbar";
import GetInTouch from "./GetInTouch";
import Map from "./Map";
import Footer from "../Layout/Footer/Footer";

export default class Main extends Component {
  render() {
    return (
      <Aux>
        <Navbar />
        <GetInTouch />
        <Map />
        <Footer />
      </Aux>
    );
  }
}
