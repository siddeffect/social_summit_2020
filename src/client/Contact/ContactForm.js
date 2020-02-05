import React, { Component } from "react";
import {
  withStyles,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import { Grid, TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { submitQuery } from "../../store/actions/participantAction";

const styles = theme => ({
  textField: {
    marginBottom: "1.5rem"
  },
  header: {
    textAlign: "center",
    position: "relative",
    fontSize: "45px",
    lineHeight: "40px",
    fontFamily: ["'ibm plex serif'", "sarif"].join(","),
    letterSpacing: "-0.03rem",
    fontWeight: "600",
    color: "#2d3034",
    textTransform: "uppercase",
    "@media(max-width:600px)": {
      fontSize: "40px"
    }
  },
  line: {
    position: "absolute",
    background: "#46A651",
    width: "80px",
    height: "4px",
    bottom: "-1",
    left: "50%",
    marginLeft: "-40px",
    marginTop: "0",
    boxSizing: "border-box"
  },
  formGrid: {
    margin: "10vh 0"
  },
  message: {
    color: "#46A651",
    fontSize: "1.2rem",
    marginTop: "4vh"
  }
});

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#00a650" }
  }
});
class SignUp extends Component {
  state = {
    email: "",
    name: "",
    subject: "",
    text: "",
    displaymsg: false
  };

  handleName = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  handleSubject = e => {
    this.setState({
      subject: e.target.value
    });
  };
  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitQuery(this.state);
    this.setState({
      email: "",
      name: "",
      subject: "",
      text: "",
      displaymsg: true
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <ThemeProvider theme={theme}>
          <Grid container justify="center">
            <Grid container justify="center">
              <div>
                <h1 className={classes.header}>Contact Us</h1>
                <hr className={classes.line} />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              alignContent="center"
              container
              justify="center"
              className={classes.formGrid}
            >
              <form onSubmit={this.handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <TextField
                      required
                      variant="outlined"
                      id="name"
                      label="Name"
                      type="text"
                      fullWidth
                      value={this.state.name}
                      className={classes.textField}
                      onChange={this.handleName}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      required
                      id="subject"
                      variant="outlined"
                      label="Subject"
                      type="text"
                      fullWidth
                      value={this.state.subject}
                      className={classes.textField}
                      onChange={this.handleSubject}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      required
                      id="email"
                      variant="outlined"
                      label="Email Address"
                      type="email"
                      fullWidth
                      value={this.state.email}
                      className={classes.textField}
                      onChange={this.handleEmail}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="text"
                      variant="outlined"
                      label="Text"
                      multiline
                      rows="4"
                      type="text"
                      fullWidth
                      value={this.state.text}
                      className={classes.textField}
                      onChange={this.handleText}
                    />
                  </Grid>

                  <Grid container spacing={1} justify="center">
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      size="large"
                      className={classes.button}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
                {this.state.displaymsg ? (
                  <Grid container spacing={1} justify="center">
                    <p className={classes.message}>
                      Thanks for writing, we will reach out to you soon!!!
                    </p>
                  </Grid>
                ) : null}
              </form>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitQuery: newUser => dispatch(submitQuery(newUser))
  };
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(SignUp));
