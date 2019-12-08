import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authAction";

const SignedInLink = props => {
  return (
    <ul className="right">
      <li>
        <a onClick={props.signOut}>Log Out</a>
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
