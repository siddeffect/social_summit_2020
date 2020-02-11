import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Aux from "../../hoc/Aux";
import Navbar from "./../Layout/Navbar/Navbar";
import Footer from "./../Layout/Footer/Footer";
import TeamHead from "./TeamHeads";
import Operatins from "./TeamOperations";
import Spons from "./TeamSpons";
import Promotions from "./TeamProms";
import Events from "./TeamEvents";
import Designers from "./Designers";
import Developer from "./Developer";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#111"
  }
}));

function Team() {
  const classes = useStyles();

  return (
    <Aux>
      <Navbar />
      <div className={classes.root}>
        <TeamHead />
        <Operatins />
        <Events />
        <Promotions />
        <Spons />
        <Designers />
        <Developer />
      </div>
      <Footer />
    </Aux>
  );
}

export default Team;
