import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { TextField } from "@material-ui/core";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    paddingRight: "12.5vw",
    paddingLeft: "12.5vw",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "10vh",
    "@media(min-width:1024px) and(max-width:1800px)": {
      paddingRight: "10vw",
      paddingLeft: "10vw"
    }
  },
  header: {
    textAlign: "center",
    position: "relative",
    fontSize: "45px",
    lineHeight: "40px",
    fontFamily: "Rubik,sans-sarif",
    fontWeight: "500",
    color: "#2d3034",
    "@media(max-width:600px)": {
      fontSize: "40px"
    }
  },
  line: {
    position: "absolute",
    background: "#46A651",
    width: "80px",
    height: "2.5px",
    bottom: "-1",
    left: "50%",
    marginLeft: "-35px",
    marginTop: "0",
    boxSizing: "border-box"
  },
  box: {
    paddingTop: "30px",
    textAlign: "center"
  },
  info: {
    paddingBottom: "10px"
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    flexDirection: "row",
    boxSizing: "border-box"
  },
  col: {
    position: "relative",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    width: "30%",
    "@media (max-width:600px)": {
      width: "95vw",
      paddingBottom: "15px"
    }
  },
  input: {
    width: "100%",
    padding: "12px 20px",
    background: "#f9fafb",
    color: "#6c7a89",
    fontSize: "18px",
    fontFamily: "Rubik, sans-serif",
    fontWeight: "300",
    lineHeight: "24px",
    outline: "none",
    border: "1px solid #e4e2f4",
    margin: "0 0 24px",
    transition: "all 0.2s ease-in-out",
    borderRadius: "2px"
  },
  textArea: {
    width: "93%",
    padding: "20px 25px",
    background: "#f9fafb",
    color: "#6c7a89",
    fontSize: "18px",
    fontFamily: "Rubik, sans-serif",
    fontWeight: "300",
    lineHeight: "24px",
    outline: "none",
    border: "1px solid #e4e2f4",
    transition: "all 0.2s ease-in-out",
    borderRadius: "2px",
    height: "180px",
    marginBottom: "24px",
    "@media(min-width:1920px)": {
      width: "93%"
    },
    "@media(min-width:1360px) and (max-width:1650px)": {
      width: "92.25%"
    },
    "@media(min-width:1024px) and (max-width:1300px)": {
      width: "91.5%"
    },
    "@media (max-width:600px)": {
      height: "150px"
    }
  },
  submit: {
    color: "#fff",
    fontSize: "18px",
    fontFamily: "Rubik, sans-serif",
    textTransform: "uppercase",
    padding: "11px 38px",
    background: "#46A651",
    fontWeight: "400",
    borderRadius: "2px",
    transition: "all 0.2s ease-in-out",
    border: "none",
    marginBottom: "5vh",
    ":hover&": {
      // opacity: "1"
    }
  }
}));

function ContactHome() {
  const classes = useStyles();

  return (
    <Fade bottom>
      <div className={classes.root}>
        <h1 className={classes.header}> Get in touch</h1>
        <hr className={classes.line} />
        <div className={classes.box}>
          <div className={classes.info}>
            <div className={classes.row}>
              <div className={classes.col}>
                <input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className={classes.input}
                  required
                ></input>
              </div>
              <div className={classes.col}>
                <input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Your Email"
                  className={classes.input}
                  required
                ></input>
              </div>
              <div className={classes.col}>
                <input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Subject"
                  className={classes.input}
                ></input>
              </div>
            </div>
            <textarea
              name="comment"
              id="comment"
              placeholder="Message"
              className={classes.textArea}
            ></textarea>
            <div>
              <input
                type="submit"
                value="send"
                id=""
                className={classes.submit}
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default ContactHome;
