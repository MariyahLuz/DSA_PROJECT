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
import Array_ from '../assets/Array.png'
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
    paddingTop: '61.25%', // 16:9
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

  // const [ firstName, setFirstName ] = useState("");

  class Array {
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
  const [ stack_def, setStack ] = React.useState(JSON.parse(localStorage.getItem('data_s')));
  const [ first, setFirst ] = React.useState(false);
  const [ added, setAdded ] = React.useState(false);
  const [ popped, setPopped ] = React.useState(false);
  const [ notification, setNotification ] = React.useState(false);


  var array_;
  array_ = new Array();

  const push = (e) => {
    var new_data = user_value;

    if(localStorage.getItem('data_a') == null){
      localStorage.setItem('data_a', "[]");
    }

    var old_data = JSON.parse(localStorage.getItem('data_a'));
    // checking if value is of the same data type

    // const age = parseFloat(age_);
    
   
    old_data.push(new_data);


    const array = [];
    for(var i = 0; i < old_data.length; i++){
      console.log(old_data[i])
      array.push(parseFloat(old_data[i]))
    }
    console.log(array)
    // linearSearch(array,2)
    // console.log(binarySearch(array,2,0,array.length-1))
    // console.log(selectionSort(array))
    console.log(mergeSort(array));
    var sortedArray = quickSort(array, 0, array.length - 1);
    console.log(sortedArray);

    setNotification(true);
    setValue("")
    setAdded(true);
    setPopped(false);;

    localStorage.setItem('data_a', JSON.stringify(old_data));
    console.log(old_data)
    return array
  }

  // React.useEffect(() => {
  // //   const linearSearch = (list, item) => {
  // //     for (const [i, element] of list.entries()) {
  // //       if (element === item) {
    
  // //         console.log(i)
  // //       }
  // //     }
  // //   }    
  // //  linearSearch(push())
  // }, [])
  
  const linearSearch = (list, item) => {
    for (var i=0;i<list.length; i++) {
      if (list[i] === item) {
  
        console.log(i)
      }
    }
  }  

  let binarySearch = function (arr, x, start, end) {
       
    // Base Condition
    if (start > end) return false;
   
    // Find the middle index
    let mid=Math.floor((start + end)/2);
   
    // Compare mid with given key x
    if (arr[mid]===x) return mid;
          
    // If element at mid is greater than x,
    // search in the left half of mid
    if(arr[mid] > x) 
        return binarySearch(arr, x, start, mid-1);
    else
  
        // If element at mid is smaller than x,
        // search in the right half of mid
        return binarySearch(arr, x, mid+1, end);
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

  function insertionSort(arr){
    for(var i=1;i<arr.length;i++){
        var value = arr[i];
        var j=i;
        while(j>0 && arr[j-1] < value){
            arr[j] = arr[j-1];
            j-=1;
        }
        arr[j] = value;
    
    }
    return arr;
    }

    const merge = (arr1, arr2) => {
      let sorted = [];
    
      while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
        else sorted.push(arr2.shift());
      };
    
      return sorted.concat(arr1.slice().concat(arr2.slice()));
    };
    
    const mergeSort = arr => {
      if (arr.length <= 1) return arr;
      let mid = Math.floor(arr.length / 2),
          left = mergeSort(arr.slice(0, mid)),
          right = mergeSort(arr.slice(mid));
    
      return merge(left, right); 
    };

  //quicksort algorithm

var items = [5,3,7,6,2,9];
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
// var sortedArray = quickSort(items, 0, items.length - 1);
// console.log(sortedArray); //prints [2,3,5,6,7,9]

  const pop = (e) => {
   // var new_data = document.getElementbyId('input').value;
    var new_data = user_value;

    if(localStorage.getItem('data_a') == null){
      localStorage.setItem('data_a', "[]");
    }

    var old_data = JSON.parse(localStorage.getItem('data_a'));
    old_data.pop(new_data);
    setNotification(true);
    setValue("")
    setAdded(false);
    setPopped(true);

    localStorage.setItem('data_a', JSON.stringify(old_data));
    console.log(old_data)
  }


  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  const array_video_link = "https://www.youtube.com/watch?v=AT14lCXuMKI"


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
        title="Array Data structure"
        subheader="A primtive data type for storing value of a similar type"
      />
      <CardMedia
        className={classes.media}
        image={Array_}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        an array data structure, or simply an array, is a data structure consisting of a collection 
        of elements (values or variables), each identified by at least one array index or key
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">

          <LinkIcon onClick={handleClick} />
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <Paper className={classes.paper}>
             <Share 
               array_video_link={array_video_link}/>
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
                            added ? (<span>{"added to array"}</span>):("")
                          }
                          {
                            popped ? (<span>{"removed from array"}</span>):("")
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
              <span style={{fontWeight: 'bold'}}>{"add"}</span>
            </Button>
            <Button
              variant="contained"
              //disabled={disabl_}
              color="secondary"
              style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
              onClick={pop}
              className={classes.button}
              >
              <span style={{fontWeight: 'bold'}}>{"remove"}</span>
            </Button>
          
             <Grid item xs={12}>
              <Grid
                container
                spacing={2}
                className={classes.gridSubsection}
              >
               
                 {
                  JSON.parse(localStorage.getItem('data_a')) ? (
                    <button>
                         {"{"} {JSON.parse(localStorage.getItem('data_a')).map((value) => (
                               <span variant="outlined" color="primary">
                                 {value},
                              </span>
                     ))} {"}"}
                    </button>):("")
                 }
              </Grid>
            </Grid>
        </CardContent>
      </Collapse>
    </Card>
</React.Fragment>
  );
}

