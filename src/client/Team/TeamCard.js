import React, { Component } from "react";
import Styles from "../Team/Team.module.css";
import PropTypes from "prop-types";

 class TeamCard extends Component {
  render() {
    return (
      <div className={Styles.card}>
        <img alt="" src={this.props.src} className={Styles.image}></img>
        <p className={Styles.name}>{this.props.name}</p>
        <p className={Styles.post}>{this.props.post}</p>
      </div>
    );
  }
}

export default TeamCard;

TeamCard.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};
