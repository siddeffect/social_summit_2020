import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button, Fab } from "@material-ui/core";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import MenuDrawer from "./Drawer";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: " 10px",
    background: "#111111"
  },
  appBar: {
    background: "#111111",
    boxShadow: "none"
  },
  button: {
    background: "black",
    marginEnd: "20px",
    ":hover&": {
      background: "#00a650"
    }
  },
  fab: {
    margin: theme.spacing(1),
    background: "#0e1113",
    ":hover&": {
      background: "#00a650"
    }
  },
  logo: {
    flexGrow: 1,
    height: "70px",
    width: "50px",
    paddingRight: "1300px",
    marginRight: theme.spacing(1)
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
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
            size="small"
            color="primary"
            aria-label="add"
            className={classes.fab}
          >
            <Facebook />
          </Fab>

          <Fab
            size="small"
            color="primary"
            aria-label="add"
            className={classes.fab}
          >
            <Twitter />
          </Fab>
          <Fab
            size="small"
            color="primary"
            aria-label="add"
            className={classes.fab}
          >
            <Instagram />
          </Fab>
          <MenuDrawer />
        </Toolbar>
      </AppBar>
    </div>
  );
}
