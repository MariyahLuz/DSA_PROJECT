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
import Stack_ from '../assets/sort.gif'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import LinkIcon from '@material-ui/icons/Link';

import { Paper } from '@material-ui/core';
import Share from '../components/Share.js';
import Popper from '@material-ui/core/Popper';

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

  const [ user_value,     setValue ]          = React.useState("");
  // const [ search_value,   setSearch_input ]   = React.useState("");
  // const [ target_index,   setTarget_index ]   = React.useState("");
  const [ sorted_arr,     setSorted_arr ]     = React.useState("");

  const [ added,          setAdded ]         = React.useState(false);
  const [ popped,         setPopped ]        = React.useState(false);
  const [ notification,   setNotification ]  = React.useState(false);




  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  const stack_video_link = "https://www.youtube.com/watch?v=CgFVgp_VCN8"


 const linear_searc = (e) => {

  var old_data = JSON.parse(localStorage.getItem('sorting'));

    var i = 0;
    const array = [];
    for(i = 0; i < old_data.length; i++){
      // console.log(old_data[i])
      array.push(parseFloat(old_data[i]))
    }

  
    function selectionSort(arr){    

	  for(var i= 0; i < arr.length; ++i){
	      var min = i;
	      for (var j = i; j < arr.length; ++j){
	          if (arr[min] > arr[j]){
	          min = j;
	          }
	      }
	  var temp = arr[min];
	  arr[min] = arr[i];
	  arr[i] = temp;  
	  
	  }
	  return arr;
	 }

    const sorted_array = selectionSort(array);
    setSorted_arr(sorted_array)


  };

  const push = (e) => {
    var new_data = user_value;

    if(localStorage.getItem('sorting') == null){
      localStorage.setItem('sorting', "[]");
    }

    var old_data = JSON.parse(localStorage.getItem('sorting'));

    old_data.push(new_data);
    setNotification(true);
    setValue("")
    setAdded(true);
    setPopped(false);;

    localStorage.setItem('sorting', JSON.stringify(old_data));
    // console.log(old_data)
  }

   const pop = (e) => {
    var new_data = user_value;

    if(localStorage.getItem('sorting') == null){
      localStorage.setItem('sorting', "[]");
    }

    var old_data = JSON.parse(localStorage.getItem('sorting'));
    old_data.pop(new_data);
    setNotification(true);
    setValue("")
    setAdded(false);
    setPopped(true);

    localStorage.setItem('sorting', JSON.stringify(old_data));
    // console.log(old_data)
  }

  React.useEffect(() => {
    localStorage.removeItem('sorting');
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
        title="Sorting Algorithms"
        subheader="Sorting Algorithms will sort the array and return the data items in an ascending order"
      />
      <CardMedia
        className={classes.media}
        image={Stack_}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Simple visualization of how linear search works...
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
                            added ? (<span>{"Added to array"}</span>):("")
                          }
                          {
                            popped ? (<span>{"popped from array"}</span>):("")
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
                    placeholder="Add integer to array"
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
              color="secondary"
              style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
              onClick={push}
              className={classes.button}
              >
              <span style={{fontWeight: 'bold'}}>{"push"}</span>
            </Button>
            <Button
              variant="contained"
              color="secondary"
              style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
              onClick={pop}
              className={classes.button}
              >
              <span style={{fontWeight: 'bold'}}>{"pop"}</span>
            </Button>
          
             <Grid item xs={12}>
              <Grid
                container
                spacing={2}
                className={classes.gridSubsection}
              >
               
                 {
                  JSON.parse(localStorage.getItem('sorting')) ? (
                    <div>
                         {JSON.parse(localStorage.getItem('sorting')).map((value) => (
                               <Button variant="outlined" color="primary">
                                 {value}
                              </Button>
                     ))}
                    </div>):("")
                }
              </Grid>
            </Grid> <br/>

	        {
              JSON.parse(localStorage.getItem('sorting')) ? (
                <Button
	              variant="contained"
	              //disabled={disabl_}
	              color="secondary"
	              style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
	              onClick={linear_searc}
	              className={classes.button}
	              >
	              <span style={{fontWeight: 'bold'}}>{"Sort"}</span>
	            </Button>
               ):("")
	        }

            <br />

            <Grid item xs={12}>
              <Grid
                container
                spacing={2}
                className={classes.gridSubsection}
              >
               <div>
                 {
                  sorted_arr ? (
                  	<div>
                  		<FormLabel component="label" className={classes.formLabel}>Sorted array</FormLabel><br/><br/>
                         {sorted_arr.map((value) => (
                               <Button variant="outlined" color="primary">
                                 {value}
                              </Button>
                     ))}
                    </div>):("")
                 }
                </div>
               <br/>
              </Grid>
            </Grid>



        </CardContent>
      </Collapse>
    </Card>
</React.Fragment>
  );
}

