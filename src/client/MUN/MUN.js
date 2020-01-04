import React from "react";
import MUNHome from "./Main/MUNHome";
import Committee from "./Committee/Committee";
import ExecutiveBoard from "./ExecutiveBoard/ExecutiveBoard";
import MUNFooter from "./munFooter/MUNFooter";
import Prize from "./Prizes/Prize";

function MUN() {
  return (
    <div>
      <MUNHome />
      <Prize />
      <Committee />
      <ExecutiveBoard />
      <MUNFooter />
    </div>
  );
}

export default MUN;
