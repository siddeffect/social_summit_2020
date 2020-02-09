import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TeamCard from "./TeamCard";
import Fade from "react-reveal/Fade";

import Aux from "../../hoc/Aux";

const useStyles = makeStyles(theme => ({
  outerContainer: {
    display: "flex",
    flexFlow: "column",
    textAlign: "center",
    backgroundImage: "url(/Images/Subtle-Prism.svg)"
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  header: {
    textAlign: "center",
    fontSize: "56px",
    color: "#cc8c19",
    lineHeight: "10px",
    fontFamily: "Roboto !important",
    boxSizing: "border-box",
    padding: "5vh 0 5vh 0",
    "@media (min-width:1260px) and (max-width:1450px)": {
      fontSize: "46px",
      padding: "10vh 0 5vh 0"
    },
    "@media (min-width:600px) and (max-width:768px)": {
      fontSize: "40px",
      padding: "10vh 0 5vh 0"
    },
    "@media (max-width:500px)": {
      fontSize: "28px",
      padding: "10vh 0 5vh 0"
    },
    "@media (max-width:320px)": {
      fontSize: "24px",
      padding: "12vh 0 2.5vh 0"
    }
  },
  headerManager: {
    textAlign: "center",
    fontSize: "56px",
    color: "#cc8c19",
    lineHeight: "10px",
    fontFamily: "Roboto !important",
    boxSizing: "border-box",
    padding: "1.5vh 0 1.5vh 0",
    "@media (min-width:1260px) and (max-width:1450px)": {
      fontSize: "46px",
      padding: "2.5vh 0 2.5vh 0"
    },
    "@media (min-width:600px) and (max-width:768px)": {
      fontSize: "40px",
      padding: "1vh 0 1vh 0"
    },
    "@media (max-width:500px)": {
      fontSize: "28px",
      padding: "1vh 0 1vh 0"
    },
    "@media (max-width:320px)": {
      fontSize: "24px",
      padding: "2vh 0 1.5vh 0"
    }
  }
}));

function Team() {
  const classes = useStyles();

  const ConvenorsArray = [
    {
      name: "Yash Agarwal",
      post: "Convenor",
      src: "./Images/Speakers/abhishek_jain-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    },
    {
      name: "Parag Mittal",
      post: "Convenor",
      src: "./Images//Speakers/chaturvedi-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    }
  ];
  const CoConvenorsArray = [
    {
      name: "Akshay Meena",
      post: "Co-Convenor",
      src: "./Images//Speakers/sonam_wangchu-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    },
    {
      name: "Ankit",
      post: "Co-Convenor",
      src: "./Images//Speakers/sonam_wangchu-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    },
    {
      name: "Sanskar ",
      post: "Co-Convenor",
      src: "./Images/Speakers/abhishek_jain-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    }
  ];

  const TechHeadArray = [
    {
      name: "Siddharth Varshney",
      post: "Technical Head",
      src: "./Images//Speakers/chaturvedi-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    }
  ];

  const OperationsArray1 = [
    {
      name: "Subhendu Biswas",
      post: "Manager",
      src: "./Images/Speakers/abhishek_jain-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    },
    {
      name: "Ayush Shrivastava",
      post: "Manager",
      src: "./Images//Speakers/chaturvedi-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    },
    {
      name: "Heeralal Yadav",
      post: "Manager",
      src: "./Images//Speakers/sonam_wangchu-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    }
  ];
  const OperationsArray2 = [
    {
      name: "Jitendra Kumar",
      post: "Manager",
      src: "./Images//Speakers/sonam_wangchu-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    },
    {
      name: "Dixit Panwar",
      post: "Manager",
      src: "./Images//Speakers/sonam_wangchu-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    },
    {
      name: "Shyam Tiwari",
      post: "Manager",
      src: "./Images/Speakers/abhishek_jain-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    }
  ];

  const EventsArray1 = [
    {
      name: "Yash Aggarwal",
      post: "Manager",
      src: "./Images/Speakers/abhishek_jain-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    },
    {
      name: "Aditi Singhal",
      post: "Manager",
      src: "./Images/Speakers/shweta-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    },
    {
      name: "Shrey Shukla",
      post: "Manager",
      src: "./Images//Speakers/sonam_wangchu-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    }
  ];
  const EventsArray2 = [
    {
      name: "Ujjval Singh",
      post: "Manager",
      src: "./Images//Speakers/sonam_wangchu-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    },
    {
      name: "Arpit Shrivastava",
      post: "Manager",
      src: "./Images//Speakers/sonam_wangchu-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    }
  ];

  const PromotionsArray1 = [
    {
      name: "Vibhu Chhawchharia",
      post: "Manager",
      src: "./Images/Speakers/abhishek_jain-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    },
    {
      name: "Ankit Ranjan",
      post: "Manager",
      src: "./Images//Speakers/chaturvedi-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    },
    {
      name: "Gaurav Kasat",
      post: "Manager",
      src: "./Images//Speakers/sonam_wangchu-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    }
  ];
  const PromotionsArray2 = [
    {
      name: "Adarsh Dubey",
      post: "Manager",
      src: "./Images//Speakers/sonam_wangchu-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    },
    {
      name: "Rakshit Raj",
      post: "Manager",
      src: "./Images//Speakers/sonam_wangchu-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    },
    {
      name: "Deepak Chauhan",
      post: "Manager",
      src: "./Images/Speakers/abhishek_jain-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    }
  ];

  const SponsersArray1 = [
    {
      name: "Jaskaran Sethi",
      post: "Manager",
      src: "./Images/Speakers/abhishek_jain-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    },
    {
      name: "Enagandula Sindhu",
      post: "Manager",
      src: "./Images/Speakers/shweta-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    },

    {
      name: "Mohammad Zaryab",
      post: "Manager",
      src: "./Images/Speakers/sonam_wangchu-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    }
  ];
  const SponsersArray2 = [
    {
      name: "Arjun Aryan",
      post: "Manager",
      src: "./Images/Speakers/sonam_wangchu-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    },
    {
      name: "Priyansh Garg",
      post: "Manager ",
      src: "./Images/Speakers/sonam_wangchu-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    }
  ];

  const DesignersArray = [
    {
      name: "Sankalp Jha",
      post: "Manager",
      src: "./Images/Speakers/sonam_wangchu-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    },
    {
      name: "Mayank Parnami",
      post: "Manager ",
      src: "./Images/Speakers/sonam_wangchu-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    }
  ];

  const DeveloperArray = [
    {
      name: "Arnab Das",
      post: "Manager",
      src: "./Images/Speakers/abhishek_jain-min.jpg",
      socialHandleLink: {
        facebook: "",
        linkedin: "",
        instagram: ""
      }
    }
  ];

  const Convenors = ConvenorsArray.map((item, index) => {
    return (
      <TeamCard
        src={item.src}
        name={item.name}
        post={item.post}
        socialHandleLink={item.socialHandleLink}
      />
    );
  });

  const CoConvenors = CoConvenorsArray.map((item, index) => {
    return (
      <TeamCard
        src={item.src}
        name={item.name}
        post={item.post}
        socialHandleLink={item.socialHandleLink}
      />
    );
  });

  const TechHead = TechHeadArray.map((item, index) => {
    return (
      <TeamCard
        src={item.src}
        name={item.name}
        post={item.post}
        socialHandleLink={item.socialHandleLink}
      />
    );
  });

  const Operations1 = OperationsArray1.map((item, index) => {
    return (
      <TeamCard
        src={item.src}
        name={item.name}
        post={item.post}
        socialHandleLink={item.socialHandleLink}
      />
    );
  });

  const Operations2 = OperationsArray2.map((item, index) => {
    return (
      <TeamCard
        src={item.src}
        name={item.name}
        post={item.post}
        socialHandleLink={item.socialHandleLink}
      />
    );
  });

  const Events1 = EventsArray1.map((item, index) => {
    return (
      <TeamCard
        src={item.src}
        name={item.name}
        post={item.post}
        socialHandleLink={item.socialHandleLink}
      />
    );
  });

  const Events2 = EventsArray2.map((item, index) => {
    return (
      <TeamCard
        src={item.src}
        name={item.name}
        post={item.post}
        socialHandleLink={item.socialHandleLink}
      />
    );
  });

  const Promotions1 = PromotionsArray1.map((item, index) => {
    return (
      <TeamCard
        src={item.src}
        name={item.name}
        post={item.post}
        socialHandleLink={item.socialHandleLink}
      />
    );
  });

  const Promotions2 = PromotionsArray2.map((item, index) => {
    return (
      <TeamCard
        src={item.src}
        name={item.name}
        post={item.post}
        socialHandleLink={item.socialHandleLink}
      />
    );
  });

  const Sponsers1 = SponsersArray1.map((item, index) => {
    return (
      <TeamCard
        src={item.src}
        name={item.name}
        post={item.post}
        socialHandleLink={item.socialHandleLink}
      />
    );
  });

  const Sponsers2 = SponsersArray2.map((item, index) => {
    return (
      <TeamCard
        src={item.src}
        name={item.name}
        post={item.post}
        socialHandleLink={item.socialHandleLink}
      />
    );
  });

  const Designers = DesignersArray.map((item, index) => {
    return (
      <TeamCard
        src={item.src}
        name={item.name}
        post={item.post}
        socialHandleLink={item.socialHandleLink}
      />
    );
  });

  const Developer = DeveloperArray.map((item, index) => {
    return (
      <TeamCard
        src={item.src}
        name={item.name}
        post={item.post}
        socialHandleLink={item.socialHandleLink}
      />
    );
  });

  return (
    <Aux>
      <Fade bottom>
        <div className={classes.outerContainer}>
          <p className={classes.header}> Meet The Team</p>
          <div className={classes.container}>{Convenors}</div>
          <div className={classes.container}>{CoConvenors}</div>
          <div className={classes.container}>{TechHead}</div>
        </div>
      </Fade>
      <Fade bottom>
        <div className={classes.outerContainer}>
          <p className={classes.headerManager}> Team Operations </p>
          <div className={classes.container}>{Operations1}</div>
          <div className={classes.container}>{Operations2}</div>
        </div>
      </Fade>
      <Fade bottom>
        <div className={classes.outerContainer}>
          <p className={classes.headerManager}> Team Events </p>
          <div className={classes.container}>{Events1}</div>
          <div className={classes.container}>{Events2}</div>
        </div>
      </Fade>
      <Fade bottom>
        <div className={classes.outerContainer}>
          <p className={classes.headerManager}> Team Promotions </p>
          <div className={classes.container}>{Promotions1}</div>
          <div className={classes.container}>{Promotions2}</div>
        </div>
      </Fade>
      <Fade bottom>
        <div className={classes.outerContainer}>
          <p className={classes.headerManager}> Team Sponsers </p>
          <div className={classes.container}>{Sponsers1}</div>
          <div className={classes.container}>{Sponsers2}</div>
        </div>
      </Fade>
      <Fade bottom>
        <div className={classes.outerContainer}>
          <p className={classes.headerManager}> Web Designers </p>
          <div className={classes.container}>{Designers}</div>
        </div>
      </Fade>
      <Fade bottom>
        <div className={classes.outerContainer}>
          <p className={classes.headerManager}> Web Developer </p>
          <div className={classes.container}>{Developer}</div>
        </div>
      </Fade>
      <Fade bottom>
        <div className={classes.outerContainer}>
          <p className={classes.headerManager}> Executive Members </p>
          <div className={classes.container}>
            {/* Group Image to be displayed */}
          </div>
        </div>
      </Fade>
    </Aux>
  );
}

export default Team;
