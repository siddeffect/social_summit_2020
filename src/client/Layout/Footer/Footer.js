<<<<<<< HEAD
import React from 'react'
import styles from './footer.module.css'
import { makeStyles,withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Facebook, Twitter, Instagram } from '@material-ui/icons';
=======
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
>>>>>>> 1e85bfe0ed1930955f4efaa1002e27d51747afbb

const useStyles = makeStyles(theme => ({
  root: {
    background: "#111111",
    height: 400,
    display: "flex",
    padding: "150px 200px 150px 200px",
    ["@media (max-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      height: 500,
      padding: "20px 20px 15px 20px",
      flexDirection: "column"
    }
  },
  contentBox: {
    display: "flex",
    flexGrow: 2,
    flexDirection: "column"
  },
  header: {
    color: "#46A651",
    fontSize: "40px",
    fontFamily: "Serif",
    ["@media (max-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      fontSize: "24px"
    }
  },
  themeContent: {
    margin: "40px 100px 0 0",
    maxWidth: "600px",
    color: "#545D5F",
    fontSize: "1.1em",
    ["@media (max-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      fontSize: "0.9em",
      margin: "10px 40px 0 0"
    }
  },
  fabs: {
    marginTop: 100,
    display: "flex",
    flexDirection: "row",
    ["@media (max-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      marginTop: 20
    }
  },
  fab: {
    margin: theme.spacing(1),
    background: "#1A1E21",
    ":hover&": {
      background: "#00a650"
    }
  },
  emailLinkBox: {
    flexGrow: 1,
    ["@media (max-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      paddingBottom: 40
    }
  },
  links: {
    display: "flex",
    flexDirection: "row",
    listStyleType: "none"
  },
  link: {
    margin: 10
  },
  icon: {
    color: "#fff",
    marginRight: "20px"
  },
  text: {
    color: "#fff",
    verticalAlign: "middle",
    ["@media (max-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      fontSize: "12px"
    }
  }
}));

export default function Footer() {
<<<<<<< HEAD
    const classes = useStyles();
    return (
      

        <div className={styles.outercontainer}>
            <div className={styles.container1}>

              <h1 className={styles.footerheadline}>Lorem voluptua vero</h1>
              <p className={styles.subtextheadline}>Lorem voluptua vero voluptua justo no. Sanctus The stately burden in agreeing laden my velvet voluptua vero</p>

            </div>
            
            <div className={styles.container2}>
            <p>The wished i the entrance bird nevermore, he hear now and desert in, by dirges what i as minute and Lorem voluptua vero voluptua justo no. Sanctus The stately Lorem voluptua vero voluptua justo no. Sanctus The stately burden in agreeing laden my velvet voluptua veroLorem voluptua vero voluptua justo no. Sanctus The stately burden in agreeing laden my velvet voluptua vero.</p>

              <div className={styles.icons}>

                <div >
                  <a href = "#" target = "_blank" rel="noopener noreferrer" style={{color:'#ffffff'}}>
                  <Facebook/>
                  </a>
                </div>

                <div>
                  <a href = "#" target = "_blank" rel="noopener noreferrer" style={{color:'#ffffff'}}>
                  <Twitter/>
                  </a>
                </div>
                
                <div>
                  <a href = "#" target = "_blank" rel="noopener noreferrer" style={{color:'#ffffff'}}>
                  <Instagram/>
                  </a>
                </div>

              </div>
            </div>

            <div className={styles.container3}>
                <form className={classes.root} noValidate autoComplete="off">
                    <CssTextField
                        id="outlined-secondary"
                        label="Email Address"
                        variant="outlined"
                        color="primary"
                        borderColor='#248a24'
                        className={classes.margin}
                    />
                </form>

                <Button className={classes.button}>
                Sign In
                </Button>
            </div>

            <div className={styles.container4}>
              <div className={styles.links}>
              
                  <div><strong><a href = "#" target = "_blank"  style={{color: 'green'},{'text-decoration':'none'}}>Home</a></strong></div>
                  <div><strong><a href = "#" target = "_blank"  style={{color: 'white'},{'text-decoration':'none'}}>Events</a></strong></div>
                  <div><strong><a href = "#" target = "_blank"  style={{color: 'white'},{'text-decoration':'none'}}>Partners</a></strong></div>
                  <div><strong><a href = "#" target = "_blank"  style={{color: 'white'},{'text-decoration':'none'}}>Team</a></strong></div>
                  <div><strong><a href = "#" target = "_blank"  style={{color: 'white'},{'text-decoration':'none'}}>About</a></strong></div>
               
              </div>
=======
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <div className={classes.contentBox}>
        <h1 className={classes.header}>Let's Innovate for the Nature</h1>

        <div className={classes.themeContent}>
          National social summit-2020, IIT Roorkee, aims for the upliftment of
          the nation by identifying and working on problems on the ground level.
          It is a two-day serving of collaborative workshops, networking, and an
          insight from the industry’s thought leader!
        </div>
        <div className={classes.fabs}>
          <Fab
            size="small"
            color="primary"
            aria-label="add"
            className={classes.fab}
          >
            <Facebook />
          </Fab>
>>>>>>> 1e85bfe0ed1930955f4efaa1002e27d51747afbb

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
        </div>
      </div>
      <div className={classes.emailLinkBox}>
        <div className={classes.emailBox}>
          <h2 className={classes.header}>Contact</h2>
        </div>
        <div className={classes.contactInfo}>
          <div>
            <PhoneIcon className={classes.icon} />
            <span className={classes.text}>+91-9572851250</span>
          </div>
          <div>
            <EmailIcon className={classes.icon} />
            <span className={classes.text}>socialsummit.contact@gmail.com</span>
          </div>
          <div>
            <LocationOnIcon className={classes.icon} />
            <span className={classes.text}>
              NSS Office, 2nd floor, Multi Activity Centre (MAC), IIT Roorkee
              ZIP - 247667
            </span>
          </div>
        </div>
<<<<<<< HEAD
        
    )
=======
      </div>
    </footer>
  );
>>>>>>> 1e85bfe0ed1930955f4efaa1002e27d51747afbb
}
