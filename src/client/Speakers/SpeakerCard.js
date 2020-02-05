import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Fab,
  Typography
} from "@material-ui/core";
import { Facebook, Twitter, Instagram, LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 300
  },
  fab: {
    margin: theme.spacing(1),
    background: "#1A1E21",
    ":hover&": {
      background: "#00a650"
    }
  }
}));

export default function SpeakerCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="Images/PreviousSpeakers/amarpreet_singh.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Speaker Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            CEO, Founder at GBC
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className={classes.fabs}>
          <Fab
            href="https://www.facebook.com/iitrsocialsummit/"
            target="_blank"
            size="small"
            color="primary"
            aria-label="add"
            className={classes.fab}
          >
            <Facebook />
          </Fab>

          <Fab
            href="https://www.instagram.com/iitrsocialsummit/"
            target="_blank"
            size="small"
            color="primary"
            aria-label="add"
            className={classes.fab}
          >
            <Instagram />
          </Fab>
          <Fab
            href="https://www.linkedin.com/company/national-social-summit/?originalSubdomain=in"
            target="_blank"
            size="small"
            color="primary"
            aria-label="add"
            className={classes.fab}
          >
            <LinkedIn />
          </Fab>
          <Fab
            href="https://twitter.com/natsocialsummit"
            target="_blank"
            size="small"
            color="primary"
            aria-label="add"
            className={classes.fab}
          >
            <Twitter />
          </Fab>
        </div>
      </CardActions>
    </Card>
  );
}
