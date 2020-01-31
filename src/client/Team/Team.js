import React, { Component } from "react";
import Styles from "../Team/Team.module.css";
import TeamCard from './TeamCard'
import Fade from "react-reveal/Fade";

const ConvenorsArray = [
  {
    name: "Yash Agarwal",
    post: "Convenor",
    src: "./Images/team/sample1.jpeg"
  },
  {
    name: "Parag Mittal",
    post: "Convenor",
    src: "./Images/team/sample2.jpeg"
  }]
  const CoConvenorsArray = [
  {
    name: "Akshay Meena",
    post: "Co-Convenor",
    src: "./Images/team/sample3.jpeg"
  },
  {
    name: "Ankit",
    post: "Co-Convenor",
    src: "./Images/team/sample4.jpeg"
  },
  {
    name: "Sanskar ",
    post: "Co-Convenor",
    src: "./Images/team/sample1.jpeg"
  }
//   {
//     name: "Siddharth Varshney",
//     post: "Technical Head",
//     src: "./Images/team/sample4.jpeg"  
//   }
//   
];

 class Team extends Component {
  render() {

    const Convenors = ConvenorsArray.map((item, index) => {
      return (
        <TeamCard
          src={item.src}
          name={item.name}
          post={item.post}
        />
      );
    });

    const CoConvenors = CoConvenorsArray.map((item, index) => {
        return (
          <TeamCard
            src={item.src}
            name={item.name}
            post={item.post}
          />
        );
      });

    return (
      <Fade bottom>
        <div className={Styles.outerContainer}>
          <p className={Styles.header}> Meet The Team</p>
          <div className={Styles.container}>{Convenors}</div>
          <div className={Styles.container}>{CoConvenors}</div>
        </div>
      </Fade>
    );
  }
}

export default Team;
