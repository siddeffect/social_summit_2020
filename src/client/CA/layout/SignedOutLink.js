import React from "react";
import { NavLink } from "react-router-dom";

function SignedOutLink() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/campusambassador/signup">
          <h5>SignUp</h5>
        </NavLink>
      </li>
      <li>
        <NavLink to="/campusambassador/signin">
          <h5>SignIn</h5>
        </NavLink>
      </li>
    </ul>
  );
}

export default SignedOutLink;
