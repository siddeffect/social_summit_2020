import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab, ListItemText, ListItem, List, Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {},
  list: {
    width: 300,
    "@media (max-width:340px)": {
      width: 220
    },
    "@media (min-width:350px) and (max-width:380px)": {
      width: 250
    },
    "@media (min-width:400px) and (max-width:420px)": {
      width: 275
    }
  },
  drawer: {
    background: "#00a650"
  },
  paper: {
    background: "black",
    color: "white",
    display: "flex",
    justifyContent: "center"
  },
  menuButton: {
    background: "#000",
    color: "#fff",
    ":hover&": {
      background: "#00a650"
    }
  },
  text: {
    color: "#fff",
    paddingLeft: "2vw",
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
            <ListItemText primary="HOME" className={classes.text} />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/campusambassador">
            <ListItemText primary="SOCIAL ATTACHÉ" className={classes.text} />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/socialConclave">
            <ListItemText primary="SOCIAL CONCLAVE" className={classes.text} />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/mun">
            <ListItemText primary="MUN" className={classes.text} />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/event">
            <ListItemText primary="EVENTS" className={classes.text} />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/speakers">
            <ListItemText primary="SPEAKERS" className={classes.text} />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/timeline">
            <ListItemText primary="TIMELINE" className={classes.text} />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/partners">
            <ListItemText primary="PARTNERS" className={classes.text} />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/team">
            <ListItemText primary="TEAM" className={classes.text} />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/contactus">
            <ListItemText primary="CONTACT US" className={classes.text} />
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Fab
        onClick={toggleDrawer("right", true)}
        edge="end"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        size="medium"
      >
        <MenuIcon fontSize="large" />
      </Fab>
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
