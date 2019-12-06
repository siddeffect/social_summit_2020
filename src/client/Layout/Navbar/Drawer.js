import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  ListItemText,
  ListItem,
  List,
  Drawer
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 300,
    marginTop: "300px"
  },
  drawer: {
    background: "#00a650"
  },
  paper: {
    background: "black",
    color: "white"
  },
  menuButton: {
    color: "white"
  },
  text: {
    color: "#fff",
    paddingLeft: "5vw",
    fontSize: "2rem"
  }
});

function MenuDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem>
          <Link to="/home">
            <ListItemText primary="Home" className={classes.text} />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/events">
            <ListItemText primary="Events" className={classes.text} />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/partners">
            <ListItemText primary="Partners" className={classes.text} />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/team">
            <ListItemText primary="Team" className={classes.text} />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/about">
            <ListItemText primary="About" className={classes.text} />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/contact">
            <ListItemText primary="Contact" className={classes.text} />
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <IconButton
        onClick={toggleDrawer("right", true)}
        edge="end"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        size="medium"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        classes={{ paper: classes.paper }}
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
}

export default MenuDrawer;
