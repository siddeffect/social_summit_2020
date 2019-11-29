import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    height: "985px",
    display: "flex",
    ["@media (max-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      height: "700px",
      width: "auto"
    }
  },
  contentBox: {
    // eslint-disable-next-line
    backgroundImage: "url(" + "/Images/Subtle-Prism.svg" + ")",
    display: "flex",
    flexGrow: 2,
    flexDirection: "column",
    padding: "150px 0px 150px 100px",
    ["@media (max-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      padding: "60px 30px 15px 30px"
    }
  },
  header: {
    color: "#ffffff",
    fontSize: "5.5em",
    fontFamily: ["'Raleway'", "sans-serif"].join(","),
    ["@media (max-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      fontSize: "2.4em"
    }
  },
  line: {
    width: "80px",
    height: "4px",
    backgroundColor: "#00a650"
  },
  themeContent: {
    margin: "20px 50px 0 0",
    maxWidth: "600px",
    color: "#545D5F",
    fontSize: "1.3em",
    fontFamily: ["'Roboto'", "sans-serif"].join(","),
    ["@media (max-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      fontSize: "1em"
    }
  },
  button: {
    marginTop: "40px",
    width: "300px",
    height: "60px",
    color: "#fff",
    fontSize: "1.2em",
    ["@media (max-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "150px",
      height: "40px",
      fontSize: "1.0em",
      marginTop: "20px"
    }
  },
  imageBox: {
    // eslint-disable-next-line
    backgroundImage: "url(" + "/Images/hero_image.jpg" + ")",
    backgroundSize: "cover",
    textAlign: "center",
    flexGrow: 1,
    padding: "150px 200px 150px 200px",
    ["@media (max-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      display: "none"
    }
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#00a650" }
  }
});

export default function Hero() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <div className={classes.contentBox}>
        <h1 className={classes.header}>
          Rebuilding Nature <br /> Through Innovation
        </h1>
        <div className={classes.line} />

        <div className={classes.themeContent}>
          Environment, being an envelope of society, is susceptible to every
          societal action foremost. Rapidly increasing ways of hampering
          environment need innovations to mould these ways to rebuild nature,
          holding hands with the needs of the present. Keeping the same in mind,
          social summit-2020 invites delegates from all over India having an
          ignition of ‘rebuilding nature through innovation’.
        </div>
        <div>
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
            >
              REGISTER
            </Button>
          </ThemeProvider>
        </div>
      </div>
      <div className={classes.imageBox}></div>
    </footer>
  );
}
