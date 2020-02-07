import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Aux from "../../hoc/Aux";
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";
import Fade from "react-reveal/Fade";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function allyProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    ".MuiTab-wrapper": {
      fontFamily: "Rubik,sans serif",
      fontSize: "18px",
      "@media (max-width:768px)": {
        fontSize: "12px"
      }
    },
    ".MuiPaper-elevation4": {
      boxShadow: "none"
    }
    // ".MuiAppBar-colorPrimary ": {
    //   backgroundColor: "#ffffff",
    //   color: "#111"
    // }
  },
  root: {
    flexGrow: 1,
    paddingTop: "15vh",
    background: "#f9fafb"
  },
  container: {
    width: "100%",
    paddingRight: "7.5vw",
    paddingLeft: "7.5vw",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "7.5vh",
    "@media(max-width:320px)": {
      paddingRight: "5vw",
      paddingLeft: "5vw"
    }
  },
  header: {
    textAlign: "center",
    position: "relative",
    fontSize: "40px",
    lineHeight: "40px",
    fontFamily: ["'ibm plex serif'", "sarif"].join(","),
    letterSpacing: "-0.03rem",
    fontWeight: "400",
    color: "#2d3034",
    textTransform: "uppercase",
    "@media(max-width:600px)": {
      fontSize: "36px"
    },
    "@media(max-width:320px)": {
      fontSize: "30px"
    }
  },
  line: {
    position: "absolute",
    background: "#46A651",
    width: "80px",
    height: "4px",
    bottom: "-1",
    left: "50%",
    marginLeft: "-47px",
    marginTop: "0",
    marginBottom: "20px",
    boxSizing: "border-box"
  },
  para: {
    marginBottom: "25px",
    marginTop: "50px",
    fontFamily: "Rubik,sans-sarif",
    textAlign: "center",
    color: "#2d3034",
    fontSize: "20px",
    "@media (max-width:600px)": {
      fontSize: "18px",
      lineHeight: "1.7rem"
    }
  },
  tabContent: {
    padding: "70px 85px 0px 85px",
    border: "1px solid #e4e2f4",
    background: "#fff",
    "@media (max-width:600px)": {
      padding: "40px 0px",
      borderLeft: "none",
      borderRight: "none",
      background: "transparent"
    }
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: "-15px",
    marginLeft: "-15px",
    boxSizing: "border-box"
  },
  col: {
    flex: "0 0 50%",
    maxWidth: "50%",
    "@media (max-width:600px)": {
      flex: "none",
      maxWidth: "100%"
    }
  },
  event: {
    marginBottom: "100px",
    position: "relative",
    "@media (max-width:600px)": {
      marginBottom: "30px"
    }
  },
  img: {
    width: "85px",
    height: "85px",
    borderRadius: "4px",
    float: "left",
    marginTop: "38px",
    position: "relative",
    zIndex: "2"
  },
  eventContent: {
    marginLeft: "110px",
    marginRight: "25px",
    "@media (max-width:600px)": {
      marginRight: "15px"
    },
    "@media (max-width:360px)": {
      marginRight: "0"
    }
  },
  time: {
    display: "block",
    color: "#2ecc71",
    fontSize: "18px",
    fontWeight: "300",
    fontFamily: "Rubik,sans-serif",
    margin: "0 0 5px"
  },
  title: {
    fontSize: "17px",
    fontFamily: "'ibm plex serif',sans-serif",
    color: "#2d3034",
    fontWeight: "500",
    "@media (max-width:600px)": {
      margin: "0",
      fontSize: "16px"
    },
    "@media(max-width:320px)": {
      margin: "0",
      fontSize: "15px"
    }
  },
  content: {
    fontWeight: "300",
    marginBottom: "5px",
    lineHeight: "30px",
    color: "#6c7a89",
    fontFamily: "Rubik, sans-serif",
    margin: "0 0 10px",
    "@media (max-width:600px)": {
      lineHeight: "25px",
      marginTop: "5px"
    },
    "@media(max-width:320px)": {
      fontSize: "15px",
      lineHeight: "20px",
      marginTop: "4px"
    }
  },
  author: {
    fontStyle: "italic",
    fontFamily: "Lora, serif",
    fontWeight: "300",
    marginBottom: "5px",
    lineHeight: "26px"
  },
  span: {
    color: "#00a650"
  }
}));

function Timeline() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Aux>
      <Navbar />
      <Fade bottom>
        <div className={classes.root}>
          <div className={classes.container}>
            <h1 className={classes.header}> Event schedule </h1>
            <hr className={classes.line} />
            <p className={classes.para}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum quis dolor quis arcu aliquam vehicula. Quisque ut
              lobortis velit. Aenean consequat et mi id efficitur. Donec nec sem
              quis metus vestibulum blandit. Aliquam vitae blandit tortor.
            </p>

            <AppBar position="static">
              <Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                centered
              >
                <LinkTab label="Day 1 / Friday, 14" {...allyProps(0)} />
                <LinkTab label="Day 2 / Saturday, 15" {...allyProps(1)} />
                <LinkTab label="Day 3 / Sunday, 16" {...allyProps(2)} />
              </Tabs>
            </AppBar>
            {/* schedule content below */}
            <div className={classes.tabContent}>
              <TabPanel value={value} index={0}>
                <div className={classes.row}>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/PreviousSpeakers/priyanka_raina.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>10:00 - 11.00 </span>
                        <p className={classes.title}>
                          Pellentesque aliquet nibh.
                        </p>
                        <p className={classes.content}>
                          Suspendisse potenti. Sed egestas, ante et vulputate
                          volutpat, eros pede semper est, vitae luctus metus
                          libero eu augue.
                        </p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>Hubert Aguilar</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/PreviousSpeakers/priyanka_raina.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>10:00 - 11.00 </span>
                        <p className={classes.title}>
                          Pellentesque aliquet nibh.
                        </p>
                        <p className={classes.content}>
                          Suspendisse potenti. Sed egestas, ante et vulputate
                          volutpat, eros pede semper est, vitae luctus metus
                          libero eu augue.
                        </p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>Hubert Aguilar</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/PreviousSpeakers/priyanka_raina.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>10:00 - 11.00 </span>
                        <p className={classes.title}>
                          Pellentesque aliquet nibh.
                        </p>
                        <p className={classes.content}>
                          Suspendisse potenti. Sed egestas, ante et vulputate
                          volutpat, eros pede semper est, vitae luctus metus
                          libero eu augue.
                        </p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>Hubert Aguilar</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/PreviousSpeakers/priyanka_raina.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>10:00 - 11.00 </span>
                        <p className={classes.title}>
                          Pellentesque aliquet nibh.
                        </p>
                        <p className={classes.content}>
                          Suspendisse potenti. Sed egestas, ante et vulputate
                          volutpat, eros pede semper est, vitae luctus metus
                          libero eu augue.
                        </p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>Hubert Aguilar</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/PreviousSpeakers/priyanka_raina.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>10:00 - 11.00 </span>
                        <p className={classes.title}>
                          Pellentesque aliquet nibh.
                        </p>
                        <p className={classes.content}>
                          Suspendisse potenti. Sed egestas, ante et vulputate
                          volutpat, eros pede semper est, vitae luctus metus
                          libero eu augue.
                        </p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>Hubert Aguilar</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/PreviousSpeakers/priyanka_raina.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>10:00 - 11.00 </span>
                        <p className={classes.title}>
                          Pellentesque aliquet nibh.
                        </p>
                        <p className={classes.content}>
                          Suspendisse potenti. Sed egestas, ante et vulputate
                          volutpat, eros pede semper est, vitae luctus metus
                          libero eu augue.
                        </p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>Hubert Aguilar</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className={classes.row}>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/PreviousSpeakers/priyanka_raina.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>10:00 - 11.00 </span>
                        <p className={classes.title}>
                          Pellentesque aliquet nibh.
                        </p>
                        <p className={classes.content}>
                          Suspendisse potenti. Sed egestas, ante et vulputate
                          volutpat, eros pede semper est, vitae luctus metus
                          libero eu augue.
                        </p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>Hubert Aguilar</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/PreviousSpeakers/priyanka_raina.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>10:00 - 11.00 </span>
                        <p className={classes.title}>
                          Pellentesque aliquet nibh.
                        </p>
                        <p className={classes.content}>
                          Suspendisse potenti. Sed egestas, ante et vulputate
                          volutpat, eros pede semper est, vitae luctus metus
                          libero eu augue.
                        </p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>Hubert Aguilar</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/PreviousSpeakers/priyanka_raina.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>10:00 - 11.00 </span>
                        <p className={classes.title}>
                          Pellentesque aliquet nibh.
                        </p>
                        <p className={classes.content}>
                          Suspendisse potenti. Sed egestas, ante et vulputate
                          volutpat, eros pede semper est, vitae luctus metus
                          libero eu augue.
                        </p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>Hubert Aguilar</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/PreviousSpeakers/priyanka_raina.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>10:00 - 11.00 </span>
                        <p className={classes.title}>
                          Pellentesque aliquet nibh.
                        </p>
                        <p className={classes.content}>
                          Suspendisse potenti. Sed egestas, ante et vulputate
                          volutpat, eros pede semper est, vitae luctus metus
                          libero eu augue.
                        </p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>Hubert Aguilar</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/PreviousSpeakers/priyanka_raina.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>10:00 - 11.00 </span>
                        <p className={classes.title}>
                          Pellentesque aliquet nibh.
                        </p>
                        <p className={classes.content}>
                          Suspendisse potenti. Sed egestas, ante et vulputate
                          volutpat, eros pede semper est, vitae luctus metus
                          libero eu augue.
                        </p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>Hubert Aguilar</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/PreviousSpeakers/priyanka_raina.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>10:00 - 11.00 </span>
                        <p className={classes.title}>
                          Pellentesque aliquet nibh.
                        </p>
                        <p className={classes.content}>
                          Suspendisse potenti. Sed egestas, ante et vulputate
                          volutpat, eros pede semper est, vitae luctus metus
                          libero eu augue.
                        </p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>Hubert Aguilar</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <div className={classes.row}>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/PreviousSpeakers/priyanka_raina.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>10:00 - 11.00 </span>
                        <p className={classes.title}>
                          Pellentesque aliquet nibh.
                        </p>
                        <p className={classes.content}>
                          Suspendisse potenti. Sed egestas, ante et vulputate
                          volutpat, eros pede semper est, vitae luctus metus
                          libero eu augue.
                        </p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>Hubert Aguilar</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/PreviousSpeakers/priyanka_raina.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>10:00 - 11.00 </span>
                        <p className={classes.title}>
                          Pellentesque aliquet nibh.
                        </p>
                        <p className={classes.content}>
                          Suspendisse potenti. Sed egestas, ante et vulputate
                          volutpat, eros pede semper est, vitae luctus metus
                          libero eu augue.
                        </p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>Hubert Aguilar</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/PreviousSpeakers/priyanka_raina.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>10:00 - 11.00 </span>
                        <p className={classes.title}>
                          Pellentesque aliquet nibh.
                        </p>
                        <p className={classes.content}>
                          Suspendisse potenti. Sed egestas, ante et vulputate
                          volutpat, eros pede semper est, vitae luctus metus
                          libero eu augue.
                        </p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>Hubert Aguilar</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/PreviousSpeakers/priyanka_raina.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>10:00 - 11.00 </span>
                        <p className={classes.title}>
                          Pellentesque aliquet nibh.
                        </p>
                        <p className={classes.content}>
                          Suspendisse potenti. Sed egestas, ante et vulputate
                          volutpat, eros pede semper est, vitae luctus metus
                          libero eu augue.
                        </p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>Hubert Aguilar</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/PreviousSpeakers/priyanka_raina.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>10:00 - 11.00 </span>
                        <p className={classes.title}>
                          Pellentesque aliquet nibh.
                        </p>
                        <p className={classes.content}>
                          Suspendisse potenti. Sed egestas, ante et vulputate
                          volutpat, eros pede semper est, vitae luctus metus
                          libero eu augue.
                        </p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>Hubert Aguilar</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/PreviousSpeakers/priyanka_raina.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>10:00 - 11.00 </span>
                        <p className={classes.title}>
                          Pellentesque aliquet nibh.
                        </p>
                        <p className={classes.content}>
                          Suspendisse potenti. Sed egestas, ante et vulputate
                          volutpat, eros pede semper est, vitae luctus metus
                          libero eu augue.
                        </p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>Hubert Aguilar</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </div>
          </div>
        </div>
      </Fade>
      <Footer />
    </Aux>
  );
}

export default Timeline;
