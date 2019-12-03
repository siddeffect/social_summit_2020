import React, { Component } from "react";
import Styles from "./css/RoleCA.module.css";
import RoleCASub from "./RoleCASub";
import Id from "./Images/id.png";

const rolesArray = [
  {
    name: "represent",
    heading: "Represent Summit",
    src: Id,
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "innovation",
    heading: "Innovation and New Ideaz",
    src: Id,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Promotion",
    heading: "Promote Summit ",
    src: Id,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

export class RoleCA extends Component {
  render() {
    const rolesElements = rolesArray.map((item, index) => {
      return (
        <RoleCASub
          key={item.name}
          src={item.src}
          heading={item.heading}
          content={item.content}
        ></RoleCASub>
      );
    });
    return (
      <div className={Styles.rolesOuterContainer}>
        <div className={Styles.headingContainer}>
          <p>Roles as CA ?</p>
        </div>
        <div className={Styles.rolesMainContainer}>{rolesElements}</div>
      </div>
    );
  }
}

export default RoleCA;
