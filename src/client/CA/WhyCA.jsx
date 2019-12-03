import React, { Component } from "react";
import Styles from "./css/WhyCA.module.css";
import Certificate from "./Images/certificate.png";
import Id from "./Images/id.png";
import Networking from "./Images/networking.png";
import WhyCASub from "./WhyCASub";

const reasonsArray = [
  {
    name: "Certificate",
    src: Certificate,
    // style: "nowrap",
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
  },
  {
    name: "Certificate",
    src: Certificate,
    // style: "nowrap",
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

export class WhyCA extends Component {
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
    return (
      <div className={Styles.whyCAOuterContainer}>
        <div className={Styles.headingContainer}>
          <p>Why Become a CA ?</p>
        </div>
        <div className={Styles.reasonsOuterContainer}>{caReasons}</div>
      </div>
    );
  }
}

export default WhyCA;
