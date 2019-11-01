import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  ListItemText,
  ListItemIcon,
  ListItem,
  Divider,
  List,
  Drawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: 300
  },
  drawer: {
    background: '#00a650'
  },
  paper: {
    background: 'black',
    color: 'white'
  },
  menuButton: {
    color: 'black'
  }
});

function MenuDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
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
        {['Home', 'Events', 'Partners', 'Team', 'About', 'Contact'].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
              <Divider light="true" />
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer('right', true)}
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
        onClose={toggleDrawer('right', false)}
      >
        {sideList('right')}
      </Drawer>
    </div>
  );
}

export default MenuDrawer;
