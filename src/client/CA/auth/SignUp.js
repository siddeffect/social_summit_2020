import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../../store/actions/authAction";
import Navbar from "../layout/Navbar";
import M from "materialize-css";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    college: "",
    state: "",
    year_branch: "",
    gender: "",
    tshirt: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/campusambassador/dashboard" />;

    return (
      <div style={{ background: "#FFF6E3" }}>
        <Navbar style={{ margin: "10vh 0 20vh 0" }} />
        <div className="container">
          <form onSubmit={this.handleSubmit} style={{ background: "#FFF6E3" }}>
            <h3 className="grey-text text-darken-3 center-align">Sign Up</h3>
            <div className="row">
              <div className="col hide-on-small-only l7 m7">
                <img src="/Images/ca_hero_form.png" alt="ca_image" />
              </div>
              <div className="col s12 l5 m5">
                <div className="row">
                  <div className="input-field col s12 m6">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-field col s12 m6">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 m4">
                    <select
                      onChange={this.handleChange}
                      type="text"
                      id="gender"
                    >
                      <option disabled value="" selected>
                        Gender
                      </option>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                      <option value="N">Prefer not to say</option>
                    </select>
                    <label>Select Gender</label>
                  </div>
                  <div className="input-field col s12 m8">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      required=""
                      aria-required="true"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 m6">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-field col s12 m6">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      type="number"
                      id="phoneNumber"
                      min="1000000000"
                      max="9999999999"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="input-field">
                  <label htmlFor="college">College</label>
                  <input
                    type="text"
                    id="college"
                    required=""
                    aria-required="true"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    required=""
                    aria-required="true"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="row">
                  <div className="input-field col s12 m8">
                    <label htmlFor="year_branch">Year and Branch</label>
                    <input
                      type="text"
                      id="year_branch"
                      required=""
                      aria-required="true"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-field col s12 m4">
                    <select
                      onChange={this.handleChange}
                      type="text"
                      id="tshirt"
                    >
                      <option disabled value="" selected>
                        T-Shirt Size
                      </option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                    <label>Select T-Shirt Size</label>
                  </div>
                </div>
                <div className="input-field center-align">
                  <button
                    className="btn-large #409A4B "
                    type="submit"
                    name="action"
                  >
                    Sign up
                  </button>
                  <div className="red-text center">
                    {authError ? <p>{authError}</p> : null}
                  </div>
                </div>
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
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(SignUp);
