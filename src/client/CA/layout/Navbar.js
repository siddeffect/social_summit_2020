import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLink";
import SignedOutLink from "./SignedOutLink";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;
  const links = auth.uid ? (
    <SignedInLink profile={profile} />
  ) : (
    <SignedOutLink />
  );
  return (
    <div>
      <nav className="nav-wraper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            Social Summit
          </Link>
          {links}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
