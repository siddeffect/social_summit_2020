import React from "react";
import MUNHome from "./Main/MUNHome";
import Committee from "./Committee/Committee";
import ExecutiveBoard from "./ExecutiveBoard/ExecutiveBoard";
import MUNFooter from "./munFooter/MUNFooter";

function MUN() {
  return (
    <div>
      <MUNHome />
      <Committee />
      <ExecutiveBoard />
      <MUNFooter />
    </div>
  );
}

export default MUN;
