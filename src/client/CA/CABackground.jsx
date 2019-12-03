import React, { Component } from "react";
import HeyCA from "./HeyCA";
import Styles from "./css/CABackground.module.css";
export class CABackground extends Component {
  render() {
    return (
      <div className={Styles.caBackgroundContainer}>
        <div className={Styles.mainBackground}>
          <HeyCA />
        </div>
      </div>
    );
  }
}

export default CABackground;
