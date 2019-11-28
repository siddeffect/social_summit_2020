import React, { Component } from "react";
import Styles from "./css/eventNSS.module.css";
import Image1 from "../Image Grid/images/img1.jpeg";
import Image2 from "../Image Grid/images/img2.jpeg";
import Image3 from "../Image Grid/images/img3.jpeg";

export class eventNSS extends Component {
  render() {
    return (
      <div className={Styles.container}>
        <div className={Styles.leftContainer}>
          <div className={Styles.leftImg}>
            <img
              src={Image1}
              alt=""
              style={{
                width: "360px",
                height: "200px",
                borderRadius: "16px 16px 0 0"
              }}
            />
          </div>
          <div className={Styles.leftContent}>
            <label htmlFor="" className={Styles.leftPara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </label>
          </div>
          <div className={Styles.leftHeading}>
            <label htmlFor="" className={Styles.leftHeader}>
              {" "}
              Social
              <span style={{ fontWeight: "bold" }}> Summit </span>
            </label>
          </div>
        </div>

        <div className={Styles.middleContainer}>
          <div className={Styles.middleImg}>
            <img
              src={Image2}
              alt=""
              style={{
                width: "360px",
                height: "200px",
                borderRadius: "16px 16px 0 0"
              }}
            />
          </div>

          <div className={Styles.middleContent}>
            <label htmlFor="" className={Styles.middlePara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </label>
          </div>

          <div className={Styles.middleHeading}>
            <label htmlFor="" className={Styles.middleHeader}>
              {" "}
              Social
              <span style={{ fontWeight: "bold" }}> Summit </span>
            </label>
          </div>
        </div>

        <div className={Styles.rightContainer}>
          <div className={Styles.rightImg}>
            <img
              src={Image3}
              alt=""
              style={{
                width: "360px",
                height: "200px",
                borderRadius: "16px 16px 0 0"
              }}
            />
          </div>

          <div className={Styles.rightContent}>
            <label htmlFor="" className={Styles.rightPara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </label>
          </div>

          <div className={Styles.rightHeading}>
            <label htmlFor="" className={Styles.rightHeader}>
              {" "}
              Social
              <span style={{ fontWeight: "bold" }}> Summit </span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default eventNSS;
