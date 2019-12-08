import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Navbar from "../layout/Navbar";

class Dashboard extends Component {
  render() {
    const { profile, auth } = this.props;
    console.log("read this", this.state);
    if (!auth.uid) return <Redirect to="/campusambassador/signin" />;
    return (
      <div>
        <Navbar style={{ margin: "10vh 0 20vh 0" }} />
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <p>
                {profile.firstName} {profile.lastName}
              </p>
              <p>{profile.phoneNumber}</p>
              <p>{profile.email}</p>
              <p>{profile.college}</p>
              <p>{profile.state}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Dashboard);
