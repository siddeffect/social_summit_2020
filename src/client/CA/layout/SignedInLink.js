import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authAction";

const SignedInLink = props => {
  return (
    <ul className="right">
      <li>
        {/* eslint-disable-next-line */}
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating green lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLink);
