import React, { Component } from "react";
import Team from "./Team";
import Navbar from "./../Layout/Navbar/Navbar";
import Footer from "./../Layout/Footer/Footer";
import Aux from "../../hoc/Aux";

class Index extends Component {
  render() {
    return (
      <Aux>
        <Navbar />
        <Team> </Team>
        <Footer />
      </Aux>
    );
  }
}

export default Index;
