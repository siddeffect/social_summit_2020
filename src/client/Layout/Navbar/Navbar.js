import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Fab } from '@material-ui/core';
import { Facebook, Twitter, Instagram } from '@material-ui/icons';

const fabTheme = createMuiTheme({
  overrides: {
    MuiFab: {
      primary: {
        backgroundColor: '#00a650'
      }
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100px !important'
  },
  appBar: {
    background: '#e0e0e0',
    boxShadow: 'none'
  },
  title: {
    flexGrow: 1,
    color: 'black'
  },
  button: {
    background: 'black',
    marginEnd: '20px',
    ':hover&': {
      background: '#00a650'
    }
  },
  fab: {
    margin: theme.spacing(1),
    background: '#0e1113',
    ':hover&': {
      background: '#00a650'
    }
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            LOGO
          </Typography>
          <Button color="inherit" className={classes.button}>
            Register
          </Button>
          <Button color="inherit" className={classes.button}>
            Login
          </Button>
          <ThemeProvider theme={fabTheme}>
            <Fab
              size="small"
              color="primary"
              aria-label="add"
              className={classes.fab}
            >
              <Facebook />
            </Fab>
          </ThemeProvider>
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
        </Toolbar>
      </AppBar>
    </div>
  );
}
