import React, { Component } from "react";
import Styles from "./css/HeyCA.module.css";
import { Link } from "react-router-dom";

export class HeyCA extends Component {
  render() {
    return (
      <div className={Styles.outercontainer}>
        <div className={Styles.outerbox}>
          <div className={Styles.box}>
            <h1 className={Styles.heyca}>Social Attaché</h1>

            <h1 className={Styles.heyca1}> </h1>

            <div className={Styles.buttons}>
              <Link to="/campusambassador/signin">
                <button className={Styles.loginbutton}> LOGIN </button>
              </Link>
              <Link to="/campusambassador/signup">
                <button className={Styles.registerbutton}>REGISTER</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeyCA;
