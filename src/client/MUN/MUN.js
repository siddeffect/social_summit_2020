import React from "react";
import MUNHome from "./Main/MUNHome";
import Committee from "./Committee/Committee";
import ExecutiveBoard from "./ExecutiveBoard/ExecutiveBoard";

function MUN() {
  return (
    <div>
      <MUNHome />
      <Committee />
      <ExecutiveBoard />
    </div>
  );
}

export default MUN;
