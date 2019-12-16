import React, { Component } from "react";
import Styles from "./css/WhyCA.module.css";
import WhyCASub from "./WhyCASub";
import RoleCASub from "./RoleCASub";
import Fade from "react-reveal/Fade";

const reasonsArray = [
  {
    name: "certificate",
    src: "/Images/ca_icons/certificate.svg",
    heading: "Certificate of Appreciation",
    content: [
      {
        text:
          "A certificate will be provided for your crucial role as a Social Attaché"
      }
    ]
  },
  {
    name: "acknowledgement",
    src: "./Images/ca_icons/clap.svg",
    heading: "Acknowledgement",
    content: [
      {
        text:
          "You’ll get an opportunity to get featured on our official website"
      }
    ]
  },
  {
    name: "free entry",
    src: "./Images/ca_icons/tickets.svg",
    heading: "Free Entry Tickets",
    content: [
      {
        text:
          "Experience flagship event, workshops and guest lectures absolutely free"
      }
    ]
  }
];
const rolesArray = [
  {
    name: "personify",
    heading: "Personify Summit",
    src: "./Images/ca_icons/teamwork.svg",
    content:
      " Be the face of Summit by encouraging and facilitating participation from your college"
  },
  {
    name: "re-create",
    heading: "Revolutionize and Re-create",
    src: "./Images/ca_icons/cycle.svg",
    content:
      "Work out new events ideas and revitalize strategies to promote Summit"
  },
  {
    name: "elevate",
    heading: "Elevate our brand ",
    src: "./Images/ca_icons/user.svg",
    content:
      "Publicize and promote Summit through social media platforms to increase our reach"
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
      <Fade bottom>
        <div className={Styles.whyCAOuterContainer}>
          <div className={Styles.headingContainer}>
            <p>Why become Social Attaché?</p>
          </div>
          <div className={Styles.reasonsOuterContainer}>{caReasons}</div>
          <div className={Styles.headingContainer}>
            <p>Roles of Social Attaché</p>
          </div>
          <div className={Styles.reasonsOuterContainer}>{caRoles}</div>
        </div>
      </Fade>
    );
  }
}

export default mainCA;
