import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Footer from '../components/Footer';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { Alert, AlertTitle } from '@material-ui/lab';
import Chip from '@material-ui/core/Chip';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';

import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Queue_ from '../assets/prio.gif'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import LinkIcon from '@material-ui/icons/Link';

import { Paper } from '@material-ui/core';
import Share from '../components/Share.js';
import Popper from '@material-ui/core/Popper';
import PriorityQueue from 'javascript-priority-queue';

import Stack_DS from './Stack.js';

const queue = new PriorityQueue('min');

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '68.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
   gridSubsection: {
    marginBottom: theme.spacing(1),
  },
  inputSmall:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    "&::after": {
        borderBottom: '1px solid #949494',
    },
  },
  formLabel:{
    fontSize: '13px',
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '600',
    marginBottom: theme.spacing(1),
  },
 button: {
    backgroundColor: red[500],
    float: 'left',
    margin: theme.spacing(2, 2, 1, 'auto'),
  },
  root_: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0),
    },
  },
   paper: {
    padding: theme.spacing(2),
  }
}));


export default function Blog() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const [ user_value, setValue ] = React.useState("");
  const [ priority_value, setPriority ] = React.useState("");

  const [ popped, setPopped ] = React.useState(false);
  const [ added, setAdded ] = React.useState(false);
  const [ peeked, setPeek ] = React.useState(false);
  const [ peek_value, setPeeked ] = React.useState("");

  const [ notification, setNotification ] = React.useState(false);


  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  const stack_video_link = "https://www.youtube.com/watch?v=wptevk0bshY"

  let items = [];

  const enqueue = (e) => {
    queue.enqueue(user_value, priority_value);
    setNotification(true)
    setAdded(true)
    setPopped(false)
    setPeek(false)
    setValue("")
    setPriority("")

    localStorage.setItem('priority_q', queue.toString());
  }

  const denqueue = (e) => {
    // console.log(user_value)
    // console.log(priority_value)
    queue.dequeue();
    setNotification(true)
    setPopped(true)
    setAdded(false)
    setPeek(false)
    setValue("")
    setPriority("")

    localStorage.setItem('priority_q', queue.toString());
  }
  const peek_func = (e) => {
    if(localStorage.getItem('priority_q', queue.toString())){
      // console.log(queue.peek());
      console.log("queue.peek()");
      setNotification(true)
      setPeek(true)
      setPopped(false)
      setAdded(false)
      setPeeked(queue.peek())
    }
   
  }

  React.useEffect(() => {
    localStorage.removeItem('priority_q')
  }, [])
  


  return (
    <React.Fragment>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            S
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Priority Queue Data structure"
        subheader="Methods: enqueue(), dequeue(), gethead()  Principle: FIFO (First In First Out)"
      />
      <CardMedia
        className={classes.media}
        image={Queue_}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        a priority queue is an abstract data type similar to a regular 
        queue or stack data structure in which each element additionally 
        has a "priority" associated with it. 
        In a priority queue, an element with high priority is served before an element with low priority.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">

          <LinkIcon onClick={handleClick} />
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <Paper className={classes.paper}>
             <Share 
               stack_video_link={stack_video_link}/>
            </Paper> 
          </Popper>

        </IconButton>
        {/*<IconButton aria-label="share">
          <ShareIcon />
        </IconButton>*/}
        <Button 
            variant="outlined" 
            onClick={handleExpandClick}  
            style={{ 'marginLeft': '150px', 'fontSize' : '10px'}}
            color="primary">
            Try it out
        </Button>
       
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
                <Grid item xs={12}>
               <Grid item xs={8}>
                  <Collapse in={notification}>
                        <Alert
                          severity="info"
                          icon={false}
                          action={
                            <IconButton
                              aria-label="close"
                              color="inherit"
                              size="small"
                              onClick={() => {
                                setNotification(false);
                              }}
                            >
                              <CloseIcon fontSize="inherit" />
                            </IconButton>
                          }
                        >
                        
                         {
                            peeked ? (<span>{"Value with lowest priority"} : {peek_value} </span>):("")
                          }
                          {
                            popped ? (<span>{"Deqeued from priority queue"}</span>):("")
                          }
                          {
                            added ? (<span>{"Enqueued to priority queue"}</span>):("")
                          }
                        </Alert>
                    </Collapse>
                </Grid>
              <Grid
                container
                spacing={2}
                className={classes.gridSubsection}
              >
                <Grid item xs={8}>
                  <FormLabel component="label" className={classes.formLabel}>Add data item and its priority </FormLabel>
                   <div style={{ display: 'inline-flex' }}>
                    <Input
                    className={classes.inputSmall}
                    fullWidth
                    placeholder="Add value"
                    disableUnderline
                    name="value"
                    autoComplete="add-value"
                    onChange={(e) => {
                      setValue(e.target.value)
                    }}
                    value={user_value}
                    required
                  />
                  <Input
                    className={classes.inputSmall}
                    fullWidth
                    placeholder="Add priority"
                    disableUnderline
                    name="value"
                    autoComplete="add-value"
                    onChange={(e) => {
                      setPriority(e.target.value)
                    }}
                    value={priority_value}
                    required
                  />
                   </div>

                  
                </Grid>
              </Grid>
            </Grid>

             <Button
              variant="contained"
              //disabled={disabl_}
              color="secondary"
              style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
              onClick={enqueue}
              className={classes.button}
              >
              <span style={{fontWeight: 'bold'}}>{"Enqueue"}</span>
            </Button>
            <Button
              variant="contained"
              //disabled={disabl_}
              color="secondary"
              style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
              onClick={denqueue}
              className={classes.button}
              >
              <span style={{fontWeight: 'bold'}}>{"Dequeue"}</span>
            </Button>
             <Button
              variant="contained"
              //disabled={disabl_}
              color="secondary"
              style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
              onClick={peek_func}
              className={classes.button}
              >
              <span style={{fontWeight: 'bold'}}>{"Peek"}</span>
            </Button>
            
          
             <Grid item xs={12}>
              <Grid
                container
                spacing={2}
                className={classes.gridSubsection}
              >
               
                {
                  localStorage.getItem('priority_q') ? (
                    <Button variant="contained" style={{maxWidth: '150px', minWidth: '150px'}}>
                         {localStorage.getItem('priority_q')}
                    </Button>):("")
                 }
              </Grid>
            </Grid>
        </CardContent>
      </Collapse>
    </Card>         
    </React.Fragment>
  );
}
