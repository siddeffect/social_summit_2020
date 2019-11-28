import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    height: 920,
    display: "flex"
  },
  contentBox: {
    // eslint-disable-next-line
    backgroundImage: "url(" + "/Images/Hollowed-Boxes.svg" + ")",
    display: "flex",
    flexGrow: 2,
    flexDirection: "column",
    padding: "150px 0px 150px 200px"
  },
  header: {
    color: "#ffffff",
    fontSize: "5em",
    fontFamily: ["'Pacifico'", "cursive"].join(",")
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
    fontSize: "1.1em"
  },
  button: {
    marginTop: "40px",
    width: "300px",
    height: "60px",
    color: "#fff",
    fontSize: "1.2em"
  },
  imageBox: {
    // eslint-disable-next-line
    backgroundImage: "url(" + "/Images/hero_2.png" + ")",
    textAlign: "center",
    flexGrow: 1,
    padding: "150px 200px 150px 200px"
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
          Rebuilding Nature <br /> Througn Innovation
        </h1>
        <div className={classes.line} />

        <div className={classes.themeContent}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          accusamus similique nostrum soluta vitae, odit consequuntur aspernatur
          cumque laudantium eveniet obcaecati alias veniam repudiandae
          doloribus. Illo iure beatae ipsum voluptatum hic, id autem nihil
          consequatur dolore sed dolorem fugit sequi. Et quasi accusantium nisi
          tenetur debitis voluptatibus ipsum iusto quisquam.
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
