import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  social: {
    marginLeft: "10px",
    paddingBottom: "20px",
    marginBottom: "20px",
  },
  icon: {
    outline: "none",
    border: "none",
  },
  share: {
    fontWeight: "bold",
    fontSize: "20px",
  },
}));

export default function InsetList(props) {
  const classes = useStyles();
  const shareUrl = "https://homepetvet.com";
  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      <Typography
        className={classes.share}
        variant="caption"
        display="block"
        gutterBottom
      >
        Video link
      </Typography>
      {/*<ListItem button>
        <FacebookShareButton url={shareUrl} className={classes.icon}>
          <FacebookIcon size={32}  round={true} className={classes.icon} />
          <span className={classes.social}>{" Facebook"}</span>
        </FacebookShareButton>
        {/* <ListItemText primary=" Facebook" className={classes.social}/> 
      </ListItem>
      <ListItem button>
        <TwitterShareButton url={shareUrl} className={classes.icon}>
          <TwitterIcon size={32} className={classes.icon} round={true} />
          <span className={classes.social}>{" Twitter"}</span>
        </TwitterShareButton>
        {/* <ListItemText primary="Twitter" className={classes.social} /> 
      </ListItem>
      <ListItem button>
        <WhatsappShareButton url={shareUrl} className={classes.icon} >
          <WhatsappIcon size={32} round={true} className={classes.icon}/>
          <span className={classes.social}>{" Whatsapp"}</span>
        </WhatsappShareButton>
        {/* <ListItemText primary=" Whatsapp" className={classes.social} /> 
      </ListItem>*/}

      <ListItem>
        <a href={props.stack_video_link}>{props.stack_video_link}</a>
      </ListItem>
    </List>
  );
}
