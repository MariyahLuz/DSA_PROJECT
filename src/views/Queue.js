import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import Header from '../components/Header';
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
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
import Queue_ from '../assets/queue.gif'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import LinkIcon from '@material-ui/icons/Link';

import { Paper } from '@material-ui/core';
import Share from '../assets/Share.js';
import Popper from '@material-ui/core/Popper';

// import Stack_DS from './Stack.js';

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
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
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
    marginLeft: theme.spacing(2),
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

  // const [ firstName, setFirstName ] = useState("");

  class Stack {
    constructor() {
      this._storage = [];
      this._length = 0; // this is our length 
    }

    push(value) {
      // so add the value to the top of our stack
      this._storage[this._length] = value;
      // since we added a value, we should also increase the length by 1
      this._length++;
    }
    /// .....
  }  

  const [ user_value, setValue ] = React.useState("");
  const [ stack_def, setStack ] = React.useState(JSON.parse(localStorage.getItem('data_q')));
  const [ first, setFirst ] = React.useState(false);
  const [ added, setAdded ] = React.useState(false);
  const [ popped, setPopped ] = React.useState(false);
  const [ notification, setNotification ] = React.useState(false);
  const [ retrieve, setRetrieve ] = React.useState(false);
  const [ stack_size, setStack_size ] = React.useState("");
  const [ is_empt, setIs_Empty ] = React.useState(false);
  const [ is_empt_, setIs_Empty_ ] = React.useState(false);
 


  var stack_;
  stack_ = new Stack();

  const push = (e) => {
    var new_data = user_value;

    if(localStorage.getItem('data_q') == null){
      localStorage.setItem('data_q', "[]");
    }

    var old_data = JSON.parse(localStorage.getItem('data_q'));
    // checking if value is of the same data type
    console.log(typeof new_data)


    old_data.push(new_data);
    setNotification(true);
    setValue("")
    setAdded(true);
    setPopped(false);
     setRetrieve(false);
    setStack_size(null)
    setIs_Empty(false);
    setIs_Empty_(false);

    localStorage.setItem('data_q', JSON.stringify(old_data));
    console.log(old_data)
  }


  const pop = (e) => {

    if(localStorage.getItem('data_q') == null){
      localStorage.setItem('data_q', "[]");
    }

    var old_data = JSON.parse(localStorage.getItem('data_q'));
    if(old_data.length === 0){
    	return false
    }
    var new_data = user_value;

    old_data.splice(0, 1); // removes element to first be added
    setNotification(true);
    setValue("")
    setAdded(false);
    setPopped(true);
    setRetrieve(false);
    setStack_size(null)
    setIs_Empty(false);
    setIs_Empty_(false);

    localStorage.setItem('data_q', JSON.stringify(old_data));
    console.log(old_data)
  }

   const render_array = (e) => {
    setRetrieve(true);
    // setPeek(null);
    setStack_size(null)
    setIs_Empty(false);
    setIs_Empty_(false);
  }

  const sizing = (e) => {
    var old_data = JSON.parse(localStorage.getItem('data_q'));
    setRetrieve(false);
    if(old_data){
       setStack_size(old_data.length)
    }
    setIs_Empty(false);
    setIs_Empty_(false);
   
  }

   const is_empty = (e) => {
    var old_data = JSON.parse(localStorage.getItem('data_q'))
    console.log(old_data)
    setRetrieve(false);
    setStack_size(null)
    if(old_data === null || old_data.length === 0){
      setIs_Empty(true)
      console.log(old_data)
    }else{
      setIs_Empty_(true)
    }
  }

   React.useEffect(() => {
    localStorage.removeItem('data_q')
  }, [])
  



  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  const stack_video_link = "https://www.youtube.com/watch?v=CgFVgp_VCN8"


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
        title="Queue Data structure"
        subheader="Methods: enqueue(), dequeue(), gethead()  Principle: FIFO (First In First Out)"
      />
      <CardMedia
        className={classes.media}
        image={Queue_}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          A queue is a homogeneous collection of elements in which deletions can only take place at the front end, known as dequeue and insertions can take place only at the rear end. FIFO
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
            style={{ 'marginLeft': '100px', 'fontSize' : '10px'}}
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
                            added ? (<span>{"Enqeued "}</span>):("")
                          }
                          {
                            popped ? (<span>{"Dequeued "}</span>):("")
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
                  <FormLabel component="label" className={classes.formLabel}>Add value</FormLabel>
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
                </Grid>
              </Grid>
            </Grid>

             <Button
              variant="contained"
              //disabled={disabl_}
              color="secondary"
              style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
              onClick={push}
              className={classes.button}
              >
              <span style={{fontWeight: 'bold'}}>{"Enqeue"}</span>
            </Button>
            <Button
              variant="contained"
              //disabled={disabl_}
              color="secondary"
              style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
              onClick={pop}
              className={classes.button}
              >
              <span style={{fontWeight: 'bold'}}>{"Denqeue"}</span>
            </Button>
            <Button
                variant="contained"
                //disabled={disabl_}
                color="secondary"
                style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
                onClick={render_array}
                className={classes.button}
              >
              <span style={{fontWeight: 'bold'}}>{"retrieve"}</span>
            </Button>
            <Button
                variant="contained"
                //disabled={disabl_}
                color="secondary"
                style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
                onClick={sizing}
                className={classes.button}
              >
              <span style={{fontWeight: 'bold'}}>{"size"}</span>
            </Button>
             <Button
                variant="contained"
                //disabled={disabl_}
                color="secondary"
                style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
                onClick={is_empty}
                className={classes.button}
              >
              <span style={{fontWeight: 'bold'}}>{"isEmpty"}</span>
            </Button>
          
             <Grid item xs={12}>
              <Grid
                container
                spacing={2}
                className={classes.gridSubsection}
              >
               
                  {
                    retrieve === true ? 
                    (
                      <div>
                        <Grid
                          container
                          spacing={2}
                          className={classes.gridSubsection}
                        >
                         
                            {
                              JSON.parse(localStorage.getItem('data_q')) ? (
                                <div>
                                     {JSON.parse(localStorage.getItem('data_q')).map((value) => (
                                           <Button variant="outlined" color="primary">
                                             {value}
                                          </Button>
                                 )).reverse()}
                                </div>):("")
                             }
                        </Grid>
                      </div>
                    ) 
                    : null
                  }
                  {
                    stack_size ? 
                    (
                      <div>
                        <Grid
                          container
                          spacing={2}
                          className={classes.gridSubsection}
                        >
                        <FormLabel style={{ 'marginTop' : '10px' }} component="label" className={classes.formLabel}>Size of Queue</FormLabel>
                         <br />
                         <br />
                          <div className={classes.root_}>
                            <ButtonGroup
                              orientation="vertical"
                              color="primary"
                              aria-label="vertical outlined primary button group"
                            >
                               <Button style={{ 'marginLeft' : '10px' }} variant="outlined" color="primary">
                                 {stack_size}
                              </Button>
                            </ButtonGroup>
                          </div>
                        </Grid>
                      </div>
                    ) 
                    : null
                 }
                  {
                    is_empt === true ? 
                    (
                      <div>
                        <Grid
                          container
                          spacing={2}
                          className={classes.gridSubsection}
                        >
                        <FormLabel style={{ 'marginTop' : '10px' }} component="label" className={classes.formLabel}>Queue is empty: </FormLabel>
                         <br />
                         <br />
                          <div className={classes.root_}>
                            <ButtonGroup
                              orientation="vertical"
                              color="primary"
                              aria-label="vertical outlined primary button group"
                            >
                               <Button style={{ 'marginLeft' : '10px' }} variant="outlined" color="primary">
                                 {"True"}
                              </Button>
                            </ButtonGroup>
                          </div>
                        </Grid>
                      </div>
                    ) 
                    : null
                 }
                  {
                    is_empt_ === true ? 
                    (
                      <div>
                        <Grid
                          container
                          spacing={2}
                          className={classes.gridSubsection}
                        >
                        <FormLabel style={{ 'marginTop' : '10px' }} component="label" className={classes.formLabel}>Queue is empty: </FormLabel>
                         <br />
                         <br />
                          <div className={classes.root_}>
                            <ButtonGroup
                              orientation="vertical"
                              color="primary"
                              aria-label="vertical outlined primary button group"
                            >
                               <Button style={{ 'marginLeft' : '10px' }} variant="outlined" color="primary">
                                 {"False"}
                              </Button>
                            </ButtonGroup>
                          </div>
                        </Grid>
                      </div>
                    ) 
                    : null
                 }

              </Grid>
            </Grid>
        </CardContent>
      </Collapse>
    </Card>         
    </React.Fragment>
  );
}
