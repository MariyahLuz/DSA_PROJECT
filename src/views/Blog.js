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
import Stack_ from '../assets/stack.png'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import LinkIcon from '@material-ui/icons/Link';

import { Paper } from '@material-ui/core';
import Share from '../assets/Share.js';
import Popper from '@material-ui/core/Popper';

import Layout from "../components/Layout";
import Stack_DS from './Stack.js';
import Queue_DS from './Queue.js';
import PriorityQueue from './PriorityQueue';
import List from './List.js';
import Array_ from './Array.js';
import Alogs from './Searching_algos.js'
import Searching_Binary from './Searching_Binary.js'
import Sorting from './Sorting_algos.js'
import Fibonnacci from './Fibonnacci.js'
import Factorial from './Factorial.js'
import Tree_impl from './Tree_impl.js'


import '../components/style.css'; 
;
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" 
     // className='header'
      >
        <Header title="DataCode" />
           <br/>
           <br/>
           <br/>
       
          <Grid   container spacing={1}> 

             <Grid item xs={12} sm={6} md={4}>  
               <Stack_DS />
             </Grid>
              <Grid item xs={12} sm={6} md={4}>
               <Queue_DS />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
               <PriorityQueue />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <List />
              </Grid> 
               <Grid item xs={12} sm={6} md={4}>
                <Array_ />
              </Grid> 
               <Grid item xs={12} sm={6} md={4}>
                <Alogs />
              </Grid> 
              <Grid item xs={12} sm={6} md={4}>
                <Searching_Binary />
              </Grid> 
               <Grid item xs={12} sm={6} md={4}>
                <Sorting />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Layout />
              </Grid> 
              <Grid item xs={12} sm={6} md={4}>
                <Fibonnacci />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Factorial />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Tree_impl  />
              </Grid> 

              
          </Grid>
            
           </Container>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
            <Footer
              title="DataCode"
              description="Implementing data structures and algorithms"
            />
    </React.Fragment>
  );
}


// class AppointmentFormContainerBasic extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       appointmentChanges: {},
//       start_time: "",
//       end_time: "",
//       notes: "",
//       start_date: "",
//       end_date: "",

//       start_date_edit: "",
//       end_date_edit: "",
//       start_time_edit: "",
//       end_time_edit: "",
//       notes_edit: "",
//     };
    
//   render() {
//     return (
     
//     );
//   }
//   