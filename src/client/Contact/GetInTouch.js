import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

const useStyles = theme => ({
  root: {
    width: "100%",
    paddingRight: "12.5vw",
    paddingLeft: "12.5vw",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "10vh",
    "@media(min-width:1024px) and(max-width:1800px)": {
      paddingRight: "10vw",
      paddingLeft: "10vw"
    }
  },
  header: {
    textAlign: "center",
    position: "relative",
    fontSize: "45px",
    lineHeight: "40px",
    fontFamily: "Rubik,sans-sarif",
    fontWeight: "500",
    color: "#2d3034",
    "@media(max-width:600px)": {
      fontSize: "40px"
    }
  },
  line: {
    position: "absolute",
    background: "#46A651",
    width: "80px",
    height: "2.5px",
    bottom: "-1",
    left: "50%",
    marginLeft: "-35px",
    marginTop: "0",
    boxSizing: "border-box"
  },
  box: {
    paddingTop: "30px",
    textAlign: "center"
  },
  info: {
    paddingBottom: "10px"
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    flexDirection: "row",
    boxSizing: "border-box"
  },
  col: {
    position: "relative",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    width: "30%",
    "@media (max-width:600px)": {
      width: "95vw",
      paddingBottom: "15px"
    }
  },
  input: {
    width: "100%",
    padding: "12px 20px",
    background: "#f9fafb",
    color: "#6c7a89",
    fontSize: "18px",
    fontFamily: "Rubik, sans-serif",
    fontWeight: "300",
    lineHeight: "24px",
    outline: "none",
    border: "1px solid #e4e2f4",
    margin: "0 0 24px",
    transition: "all 0.2s ease-in-out",
    borderRadius: "2px"
  },
  textArea: {
    width: "93%",
    padding: "20px 25px",
    background: "#f9fafb",
    color: "#6c7a89",
    fontSize: "18px",
    fontFamily: "Rubik, sans-serif",
    fontWeight: "300",
    lineHeight: "24px",
    outline: "none",
    border: "1px solid #e4e2f4",
    transition: "all 0.2s ease-in-out",
    borderRadius: "2px",
    height: "180px",
    marginBottom: "24px",
    "@media(min-width:1920px)": {
      width: "93%"
    },
    "@media(min-width:1360px) and (max-width:1650px)": {
      width: "92.25%"
    },
    "@media(min-width:1024px) and (max-width:1300px)": {
      width: "91.5%"
    },
    "@media (max-width:600px)": {
      height: "150px"
    }
  },
  submit: {
    color: "#fff",
    fontSize: "18px",
    fontFamily: "Rubik, sans-serif",
    textTransform: "uppercase",
    padding: "11px 38px",
    background: "#46A651",
    fontWeight: "400",
    borderRadius: "2px",
    transition: "all 0.2s ease-in-out",
    border: "none",
    marginBottom: "5vh",
    ":hover&": {
      // opacity: "1"
    }
  },
  error: {
    color: "red",
    fontSize: "20px",
    fontFamily: "Rubik, sans-serif",
    margin: "0 ",
    transform: "translateY(-20px)",
    transition: "transform ease-in 5s"
  }
});

class ContactHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = " Invalid Email id";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      console.log("Form submitted");
    } else {
      console.log("Form has errors.");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  render() {
    const { classes } = this.props;
    return (
      <Fade bottom>
        <div className={classes.root}>
          <h1 className={classes.header}> Get in touch</h1>
          <hr className={classes.line} />
          <div className={classes.box}>
            <div className={classes.info}>
              <form
                className={classes.row}
                onSubmit={this.contactSubmit.bind(this)}
              >
                <div className={classes.col}>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className={classes.input}
                    required
                    onChange={this.handleChange.bind(this, "name")}
                    value={this.state.fields["name"]}
                  ></input>
                  <i>
                    <p className={classes.error}>{this.state.errors["name"]}</p>{" "}
                  </i>
                </div>
                <div className={classes.col}>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Your Email"
                    className={classes.input}
                    required
                    onChange={this.handleChange.bind(this, "email")}
                    value={this.state.fields["email"]}
                  ></input>
                  <i>
                    <p className={classes.error}>
                      {this.state.errors["email"]}
                    </p>
                  </i>
                </div>
                <div className={classes.col}>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Subject"
                    className={classes.input}
                  ></input>
                </div>
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Message"
                  className={classes.textArea}
                ></textarea>
                <div>
                  <input
                    type="submit"
                    value="send"
                    id=""
                    className={classes.submit}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default withStyles(useStyles)(ContactHome);
