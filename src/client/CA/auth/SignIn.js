import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../../store/actions/authAction";
import { Redirect } from "react-router-dom";
import Navbar from "../layout/Navbar";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/campusambassador/dashboard" />;

    return (
      <div style={{ background: "#FFF6E3" }}>
        <Navbar style={{ margin: "10vh 0 20vh 0" }} />
        <div className="container">
          <form onSubmit={this.handleSubmit} style={{ background: "#FFF6E3" }}>
            <h3 className="grey-text text-darken-3 center-align">Sign In</h3>
            <div className="row valign-wrapper">
              <div className="col l5 m5 s12">
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field center-align">
                  <button
                    className="btn-large #409A4B "
                    type="submit"
                    name="action"
                  >
                    Login
                  </button>
                  <div className="red-text center">
                    {authError ? <p>{authError}</p> : null}
                  </div>
                </div>
              </div>

              <div className="col hide-on-small-only l7 m7">
                <img src="/Images/ca_hero_form.png" alt="ca_image" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProp = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(SignIn);
