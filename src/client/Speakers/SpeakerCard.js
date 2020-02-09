import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  IconButton
} from "@material-ui/core";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Language
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 275
  },
  name: {
    color: "#494949",
    textTransform: "uppercase"
  },
  content: {
    minHeight: 150
  },
  iconList: {
    display: "block",
    textAlign: "center"
  },
  icon: {
    margin: theme.spacing(1),
    color: "#545454",
    fontSize: "2rem",
    ":hover&": {
      color: "#00a650"
    }
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#00a650" }
  }
});

export default function SpeakerCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Link to={props.route}>
        <CardActionArea>
          <CardMedia className={classes.media} image={props.photoRoute} />
          <CardContent className={classes.content}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.name}
            >
              {props.name}
            </Typography>
            <ThemeProvider theme={theme}>
              <Typography variant="body2" color="primary" component="p">
                {props.shortDesignation}
              </Typography>
            </ThemeProvider>
            <br />
            <Typography variant="body2" color="textSecondary" component="p">
              {props.designation}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions className={classes.iconList}>
        <div>
          {props.socialHandleLink.facebook ? (
            <IconButton
              href={props.socialHandleLink.facebook}
              target="_blank"
              size="small"
            >
              <Facebook className={classes.icon} />
            </IconButton>
          ) : null}
          {props.socialHandleLink.instagram ? (
            <IconButton
              href={props.socialHandleLink.instagram}
              target="_blank"
              size="small"
            >
              <Instagram className={classes.icon} />
            </IconButton>
          ) : null}
          {props.socialHandleLink.linkedin ? (
            <IconButton
              href={props.socialHandleLink.linkedin}
              target="_blank"
              size="small"
            >
              <LinkedIn className={classes.icon} />
            </IconButton>
          ) : null}
          {props.socialHandleLink.twitter ? (
            <IconButton
              href={props.socialHandleLink.twitter}
              target="_blank"
              size="small"
            >
              <Twitter className={classes.icon} />
            </IconButton>
          ) : null}
          {props.socialHandleLink.wikipedia ? (
            <IconButton
              href={props.socialHandleLink.wikipedia}
              target="_blank"
              size="small"
            >
              <Language className={classes.icon} />
            </IconButton>
          ) : null}
        </div>
      </CardActions>
    </Card>
  );
}
