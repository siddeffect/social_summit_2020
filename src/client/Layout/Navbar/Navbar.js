import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Fab } from "@material-ui/core";
import { Facebook, Twitter, Instagram, LinkedIn } from "@material-ui/icons";
import MenuDrawer from "./Drawer";
import Fade from "react-reveal/Fade";

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
    padding: " 10px",
    boxShadow: "none",
    "@media (max-width:780px)": {
      position: "absolute",
      background: "transparent"
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
    height: "90px",
    marginLeft: "0",
    marginRight: "auto",
    "@media (max-width:640px)": {
      height: "50px"
    }
  },
  // class of <AppBar/> comp.
  PositionFixed: {
    right: 550,
    left: "auto !important",
    top: "0 !important"
  }
});

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      width: window.innerWidth
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

  imageClick = () => {
    window.location.href = "https://nationalsocialsummit.org";
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.state.width > 768 ? (
          <AppBar
            style={{
              position: this.state.scrolled ? "fixed" : "absolute",
              background: this.state.scrolled ? "black" : "transparent",
              transition: "0.5s ease-in"
            }}
            className={classes.appBar}
          >
            <Toolbar>
              <Fade>
                <img
                  className={classes.logo}
                  src="/Images/Logo_Main.svg"
                  alt="logo"
                  onClick={this.imageClick}
                />
              </Fade>

              <Fade bottom>
                <Fab
                  href="https://www.facebook.com/iitrsocialsummit/"
                  target="_blank"
                  size="medium"
                  color="primary"
                  aria-label="add"
                  className={classes.fab}
                >
                  <Facebook fontSize="large" />
                </Fab>
              </Fade>
              <Fade bottom>
                <Fab
                  href="https://www.instagram.com/iitrsocialsummit/"
                  target="_blank"
                  size="medium"
                  color="primary"
                  aria-label="add"
                  className={classes.fab}
                >
                  <Instagram fontSize="large" />
                </Fab>
              </Fade>
              <Fade bottom>
                <Fab
                  href="https://www.linkedin.com/company/national-social-summit/?originalSubdomain=in"
                  target="_blank"
                  size="medium"
                  color="primary"
                  aria-label="add"
                  className={classes.fab}
                >
                  <LinkedIn fontSize="large" />
                </Fab>
              </Fade>
              <Fade bottom>
                <Fab
                  href="https://twitter.com/natsocialsummit"
                  target="_blank"
                  size="medium"
                  color="primary"
                  aria-label="add"
                  className={classes.fab}
                >
                  <Twitter fontSize="large" />
                </Fab>
              </Fade>
              <Fade bottom>
                <MenuDrawer />
              </Fade>
            </Toolbar>
          </AppBar>
        ) : (
          // for mobile version without scrolling effect
          <AppBar className={classes.appBar}>
            <Toolbar>
              <img
                className={classes.logo}
                src="/Images/Logo_Main.svg"
                alt="logo"
              />
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
        )}
      </div>
    );
  }
}
export default withStyles(styles)(Navbar);
