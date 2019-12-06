import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Button, Fab } from "@material-ui/core";
import { Facebook, Twitter, Instagram, LinkedIn } from "@material-ui/icons";
import MenuDrawer from "./Drawer";

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: "transparent",
    width: "100vw",
    "@media (max-width:780px)": {
      width: "100vw"
    }
  },
  appBar: {
    // position: "absolute",
    padding: " 10px",
    // background: "transparent",
    boxShadow: "none",
    "@media (max-width:780px)": {
      width: "1vw"
    }
  },
  button: {
    background: "#000",
    marginEnd: "20px",
    ":hover&": {
      background: "#00a650"
    },
    "@media (max-width:780px)": {
      display: "none"
    }
  },
  fab: {
    margin: "10px",
    background: "#000",
    ":hover&": {
      background: "#00a650"
    },
    "@media (max-width:780px)": {
      display: "none"
    }
  },
  logo: {
    flexGrow: 1,
    height: "90px",
    marginLeft: "-70%",
    "@media (min-width:1300px) and (max-width:1400px)": {
      marginLeft: "-58%"
    },
    "@media (min-width:1405px) and (max-width:1450px)": {
      marginLeft: "-60%"
    },
    "@media (min-width:700px) and (max-width:800px)": {
      height: "45px",
      width: "auto",
      paddingRight: "75vw"
    },
    "@media (min-width:500px) and (max-width:600px)": {
      height: "45px",
      width: "auto",
      paddingRight: "67.5vw"
    },
    "@media (min-width:365px) and (max-width:420px)": {
      height: "45px",
      width: "auto",
      paddingRight: "55vw"
    },
    "@media (min-width:320px) and (max-width:360px)": {
      height: "45px",
      width: "auto",
      paddingRight: "50vw"
    },
    "@media (max-width:320px)": {
      height: "45px",
      width: "auto",
      paddingRight: "42.5vw"
    }
  }
});

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 100) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          style={{
            position: this.state.scrolled ? "fixed" : "absolute",
            background: this.state.scrolled ? "black" : "transparent"
          }}
          className={classes.appBar}
        >
          <Toolbar>
            <img
              className={classes.logo}
              src="/Images/Logo_Main.svg"
              alt="logo"
            />
            <Button color="inherit" className={classes.button}>
              Register
            </Button>
            <Button color="inherit" className={classes.button}>
              Login
            </Button>

            <Fab
              href="https://www.facebook.com/iitrsocialsummit/"
              target="_blank"
              size="small"
              color="primary"
              aria-label="add"
              className={classes.fab}
            >
              <Facebook />
            </Fab>

            <Fab
              href="https://www.instagram.com/iitrsocialsummit/"
              target="_blank"
              size="small"
              color="primary"
              aria-label="add"
              className={classes.fab}
            >
              <Instagram />
            </Fab>
            <Fab
              href="https://www.linkedin.com/company/national-social-summit/?originalSubdomain=in"
              target="_blank"
              size="small"
              color="primary"
              aria-label="add"
              className={classes.fab}
            >
              <LinkedIn />
            </Fab>
            <Fab
              href="https://twitter.com/natsocialsummit"
              target="_blank"
              size="small"
              color="primary"
              aria-label="add"
              className={classes.fab}
            >
              <Twitter />
            </Fab>
            <MenuDrawer />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(Navbar);
