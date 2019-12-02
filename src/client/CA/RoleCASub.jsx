import React, { Component } from "react";
import Styles from "./css/RoleCA.module.css";
import PropTypes from "prop-types";

export class RoleCASub extends Component {
  render() {
    return (
      <div className={Styles.imgTextContainer}>
        <img alt={this.props.name} src={this.props.src}></img>
        <p className={Styles.rolesHeading}>{this.props.heading}</p>
        <p className={Styles.content}>{this.props.content}</p>
      </div>
    );
  }
}

export default RoleCASub;

RoleCASub.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};
