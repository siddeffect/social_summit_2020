import React, { Component } from "react";
import Styles from "./css/HeyCA.module.css";

export class HeyCA extends Component {
  render() {
    return (
      <div className={Styles.outercontainer}>
        <div className={Styles.outerbox}>
          <div className={Styles.box}>
            <h1 className={Styles.heyca}>Hey Campus Ambassador</h1>

            <h1 className={Styles.heyca1}> </h1>

            <div className={Styles.buttons}>
              <button className={Styles.loginbutton}> LOGIN </button>
              <button className={Styles.registerbutton}>REGISTER</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeyCA;
