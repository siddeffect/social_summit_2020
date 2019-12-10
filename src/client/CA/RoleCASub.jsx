import React, { Component } from "react";
import Styles from "./css/WhyCA.module.css";
import PropTypes from "prop-types";

export class RoleCASub extends Component {
  render() {
    return (
      <div className={Styles.imgTextWrapper}>
        <p className={Styles.reasonsHeading}>{this.props.heading}</p>
        <img alt={this.props.name} src={this.props.src}></img>
        <p className={Styles.reasonsText}>{this.props.content}</p>
      </div>
    );
  }
}

export default RoleCASub;

RoleCASub.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};
