import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Aux from "../../hoc/Aux";
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
    ".MuiTab-root": {
      minHeight: "60px"
    },
    ".MuiTab-wrapper": {
      fontFamily: ["'ibm plex serif'", "serif"].join(","),
      fontSize: "1.4rem",
      fontWeight: 600,
      color: "#fff",
      "@media (max-width:768px)": {
        fontSize: "1rem"
      }
    },
    ".MuiPaper-elevation4": {
      boxShadow: "none"
    },
    ".MuiTab-fullWidth": {
      maxWidth: "300px",
      flexGrow: "1"
    },
    ".MuiTab-textColorInherit": {
      opacity: 1
    },
    ".MuiAppBar-colorPrimary ": {
      backgroundColor: "#00a650",
      color: "#111"
    },
    ".PrivateTabIndicator-colorSecondary-127": {
      backgroundColor: "#FDD638",
      height: "4px"
    },
    ".PrivateTabIndicator-root-124": {
      height: "3.25px"
    },
    ".Mui-selected": {
      color: "#fff"
    }
  },

  root: {
    flexGrow: 1,
    paddingTop: "15vh",
    background: "#f9fafb"
  },
  container: {
    width: "100%",
    paddingRight: "15vw",
    paddingLeft: "15vw",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "7.5vh",
    "@media(max-width:320px)": {
      paddingRight: "5vw",
      paddingLeft: "5vw"
    }
  },
  appBar: {
    margin: "0 18.5vw 0 18.5vw",
    "@media (max-width:768px)": {
      margin: "0 !important"
    },
    "@media (min-width:1024px) and (max-width:1300px)": {
      margin: "0 13.5vw 0 13.5vw"
    },
    "@media (min-width:1600px)": {
      margin: "0 22.5vw 0 22.5vw"
    },
    "@media (min-width:1900px)": {
      margin: "0 20vw 0 20vw"
    }
  },
  header: {
    textAlign: "center",
    position: "relative",
    fontSize: "3rem",
    lineHeight: "40px",
    fontFamily: ["'ibm plex serif'", "sarif"].join(","),
    letterSpacing: "-0.03rem",
    fontWeight: "600",
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
    color: "#00A650",
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
      <Fade bottom>
        <div className={classes.root}>
          <div className={classes.container}>
            <h1 className={classes.header}> Event schedule </h1>
            <hr className={classes.line} />
            <p className={classes.para}>
              The events will be organized as per the below mentioned itinerary.
              The timings for each event is to be strictly adhered.
            </p>
            <div className={classes.appBar}>
              <AppBar position="static" style={{ borderRadius: "8px 8px 0 0" }}>
                <Tabs
                  variant="fullWidth"
                  value={value}
                  onChange={handleChange}
                  centered
                >
                  <LinkTab label="Day 0 " {...allyProps(0)} />
                  <LinkTab label="Day 1 " {...allyProps(1)} />
                  <LinkTab label="Day 2 " {...allyProps(2)} />
                </Tabs>
              </AppBar>
            </div>
            {/* schedule content below */}
            <div className={classes.tabContent}>
              <TabPanel value={value} index={0}>
                <div className={classes.row}>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/Speakers/sonam_wangchu-min.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>05:30 PM</span>
                        <p className={classes.title}>OPENING CEREMONY</p>
                        <p className={classes.content}>Venue: MAC Auditorium</p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>Sonam Wangchuk</span>
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
                        src="/Images/events_images/case_study-min.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>
                          09:00 AM - 11:30 AM
                        </span>
                        <p className={classes.title}>Case Studies (*3)</p>
                        <p className={classes.content}>Venue: LHC</p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/events_images/mun-min.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>
                          09:00 AM - 05:30 PM
                        </span>
                        <p className={classes.title}>Model United Nations</p>
                        <p className={classes.content}>Venue: Senate Hall</p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/events_images/hackathon-min.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>09:00 AM </span>
                        <p className={classes.title}>SocioThon</p>
                        <p className={classes.content}>Venue: LHC</p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/events_images/street_play-min.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>
                          10:00 AM - 12:30 PM
                        </span>
                        <p className={classes.title}>Nukkad Natak</p>
                        <p className={classes.content}>Venue: UG Floor</p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/events_images/workshop-min.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>
                          10:00 AM - 01:00 PM
                        </span>
                        <p className={classes.title}>Workshops (*2)</p>
                        <p className={classes.content}>Venue: LHC</p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/events_images/work_presentation-min.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>
                          10:00 AM - 01:00 PM
                        </span>
                        <p className={classes.title}>Work Presentation</p>
                        <p className={classes.content}>Venue: LHC</p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/Speakers/lalit_pandey-min.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>
                          02:00 PM - 03:00 PM
                        </span>
                        <p className={classes.title}>Keynote Session</p>
                        <p className={classes.content}>Venue: MAC Auditorium</p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>Dr. Lalit Pande</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/Speakers/ajay_shankar-min.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>
                          03:00 PM - 04:00 PM
                        </span>
                        <p className={classes.title}>Keynote Session</p>
                        <p className={classes.content}>Venue: MAC Auditorium</p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>Mr. Ajay Shankar</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/Speakers/shweta-min.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>
                          04:00 PM - 05:30 PM
                        </span>
                        <p className={classes.title}>Fireside Chat</p>
                        <p className={classes.content}>Venue: MAC Auditorium</p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>
                            Ms. Shweta Kothari & Mr. Pranav Hebbar
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/events_images/cultural_night-min.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>07:00 PM</span>
                        <p className={classes.title}>Cultural Night</p>
                        <p className={classes.content}>Venue: MAC Auditorium</p>
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
                        src="/Images/events_images/b_plan-min.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>
                          09:30 AM - 12:30 PM
                        </span>
                        <p className={classes.title}>Action Plan</p>
                        <p className={classes.content}>Venue: LHC</p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/events_images/policy_case-min.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>
                          09:30 AM - 12:30 PM
                        </span>
                        <p className={classes.title}>Policy Case Competition</p>
                        <p className={classes.content}>Venue: LHC</p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/events_images/mun-min.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>
                          09:30 AM - 01:00 PM
                        </span>
                        <p className={classes.title}>Model United Nations</p>
                        <p className={classes.content}>Venue: Senate Hall</p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/events_images/workshop-min.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>
                          09:30 AM - 12:30 PM
                        </span>
                        <p className={classes.title}>Workshops (*1)</p>
                        <p className={classes.content}>Venue: LHC</p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/events_images/rtc-min.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>10:00 AM - 12:00PM</span>
                        <p className={classes.title}>Round Table Conference</p>
                        <p className={classes.content}>Venue: TBA</p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/SocialConclave/conclave.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>
                          10:30 AM - 01:30 PM
                        </span>
                        <p className={classes.title}>Social Conclave</p>
                        <p className={classes.content}>Venue: MAC Auditorium</p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/Speakers/abhishek_jain-min.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>
                          02:00 PM - 03:00 PM
                        </span>
                        <p className={classes.title}>Keynote Session</p>
                        <p className={classes.content}>Venue: MAC Auditorium</p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>
                            Mr. Abhishek Jain
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/Speakers/chaturvedi-min.jpg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>
                          04:00 PM - 05:00 PM
                        </span>
                        <p className={classes.title}>Keynote Session</p>
                        <p className={classes.content}>Venue: MAC Auditorium</p>
                        <p className={classes.author}>
                          {" "}
                          by{" "}
                          <span className={classes.span}>
                            Mr. Sanjiv Chaturvedi
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.col}>
                    <div className={classes.event}>
                      <img
                        src="/Images/Logo_Main.svg"
                        alt=""
                        className={classes.img}
                      />
                      <div className={classes.eventContent}>
                        <span className={classes.time}>
                          05:30 PM - 06:30 PM
                        </span>
                        <p className={classes.title}>Closing Ceremony</p>
                        <p className={classes.content}>Venue: MAC Auditorium</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </div>
          </div>
        </div>
      </Fade>
    </Aux>
  );
}

export default Timeline;
