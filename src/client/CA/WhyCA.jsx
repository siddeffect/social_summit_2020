import React, { Component } from "react";
import Styles from "./css/WhyCA.module.css";
import Certificate from "./Images/certificate.png";
import Id from "./Images/id.png";
import Networking from "./Images/networking.png";
import WhyCASub from "./WhyCASub";
import RoleCASub from "./RoleCASub";

const reasonsArray = [
  {
    name: "Certificate",
    src: Certificate,
    heading: "Certificate of Appreciation",
    content: [
      { text: "Faucibus purus in massa tempor nec feugiat nisl pretium." }
    ]
  },
  {
    name: "faceOfSummit20",
    src: Networking,
    heading: "Face of Social Summit 2020",
    content: [
      { text: "Faucibus purus in massa tempor nec feugiat nisl pretium." }
    ]
  },
  {
    name: "internshipOffers",
    src: Id,
    heading: "Internship Offers",
    content: [
      { text: "Faucibus purus in massa tempor nec feugiat nisl pretium." }
    ]
  }
];
const rolesArray = [
  {
    name: "represent",
    heading: "Represent Summit",
    src: Id,
    content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    name: "innovation",
    heading: "Innovation and New Ideaz",
    src: Certificate,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    name: "Promotion",
    heading: "Promote Summit ",
    src: Networking,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  }
];

export class mainCA extends Component {
  render() {
    const caReasons = reasonsArray.map((item, index) => {
      return (
        <WhyCASub
          style={item.style}
          src={item.src}
          heading={item.heading}
          name={item.name}
          key={item.name}
          content={item.content}
        />
      );
    });

    const caRoles = rolesArray.map((item, index) => {
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
      <div className={Styles.whyCAOuterContainer}>
        <div className={Styles.headingContainer}>
          <p>Why Become a CA ?</p>
        </div>
        <div className={Styles.reasonsOuterContainer}>{caReasons}</div>
        <div className={Styles.headingContainer}>
          <p>Roles as CA</p>
        </div>
        <div className={Styles.reasonsOuterContainer}>{caRoles}</div>
      </div>
    );
  }
}

export default mainCA;
