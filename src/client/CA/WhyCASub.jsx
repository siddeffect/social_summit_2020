import React, { Component } from "react";
import styles from "./css/WhyCA.module.css";
import PropTypes from "prop-types";

export class WhyCASub extends Component {
  render() {
    const paraText = this.props.content.map((item, index) => {
      return (
        <p
          key={index}
          style={this.props.style ? { whiteSpace: this.props.style } : null}
          className={styles.reasonsText}
        >
          {item.text}
        </p>
      );
    });
    return (
      <div className={styles.imgTextWrapper}>
        <p className={styles.reasonsHeading}>{this.props.heading}</p>
        <img alt={this.props.heading} src={this.props.src}></img>
        {paraText}
      </div>
    );
  }
}

export default WhyCASub;

WhyCASub.propTypes = {
  heading: PropTypes.string,
  src: PropTypes.string,
  content: PropTypes.array,
  style: PropTypes.string
};
