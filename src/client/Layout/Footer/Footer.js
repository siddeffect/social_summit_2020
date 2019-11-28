import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles(theme => ({
  root: {
    background: "#111111",
    height: 400,
    display: "flex",
    padding: "150px 200px 150px 200px"
  },
  contentBox: {
    display: "flex",
    flexGrow: 2,
    flexDirection: "column"
  },
  header: {
    color: "#46A651",
    fontSize: "40px",
    fontFamily: "Serif"
  },
  themeContent: {
    margin: "40px 100px 0 0",
    maxWidth: "600px",
    color: "#545D5F",
    fontSize: "1.1em"
  },
  fabs: {
    marginTop: 100,
    display: "flex",
    flexDirection: "row"
  },
  fab: {
    margin: theme.spacing(1),
    background: "#1A1E21",
    ":hover&": {
      background: "#00a650"
    }
  },
  emailLinkBox: {
    flexGrow: 1
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
    verticalAlign: "middle"
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <div className={classes.contentBox}>
        <h1 className={classes.header}>Let's Innovate for the Nature</h1>

        <div className={classes.themeContent}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          accusamus similique nostrum soluta vitae, odit consequuntur aspernatur
          cumque laudantium eveniet obcaecati alias veniam repudiandae
          doloribus. Illo iure beatae ipsum voluptatum hic, id autem nihil
          consequatur dolore sed dolorem fugit sequi. Et quasi accusantium nisi
          tenetur debitis voluptatibus ipsum iusto quisquam.
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
      </div>
    </footer>
  );
}
