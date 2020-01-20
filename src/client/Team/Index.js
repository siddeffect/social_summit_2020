import React, { Component } from "react";
import Team from "./Team";
import Navbar from "./../Layout/Navbar/Navbar";

class Index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Team> </Team>
      </div>
    );
  }
}

export default Index;
