import React from "react";
import LinkedList from "./LinkedList"

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
import Queue_ from '../assets/queue.png'
import Linked_ from '../assets/linked.gif'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import LinkIcon from '@material-ui/icons/Link';

import { Paper } from '@material-ui/core';
import Share from '../components/Share.js';
import Popper from '@material-ui/core/Popper';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const list = new LinkedList()

console.log(list)

export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = list
        this.addToHead = this.addToHead.bind(this);
        this.remove = this.remove.bind(this);
        this.removeFromHead = this.removeFromHead.bind(this);

    }

    componentDidMount() {
        this._inputElement.focus();
    }

    addToHead(e) {
        if (this._inputElement.value !== "") {
            this.setState(list.addToHead(this._inputElement.value))
        };

        this._inputElement.value = "";
        console.log(list)
        e.preventDefault()
        this._inputElement.focus()
    }



    removeFromHead(e) {
        list.removeFromHead()
        this.setState(list)
        e.preventDefault()
        console.log(list)
    };

    remove(e) {
        if (this._inputDelete.value !== "") {
            list.remove(this._inputDelete.value)
        };

        this._inputDelete.value = "";
        this.setState(list)
        console.log(list)
        e.preventDefault();
        this._inputDelete.focus()

    }

    render() {

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

        let current = this.state.head;

        let items = [];
        var i = 0;

        while (current !== "null") {
            console.log(current.value)
            console.log(current.next)
            if(current.next === "null"){
                console.log("yes")
                items.push(
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button>{current.value}</Button>
                      <Button 
                         style={{
                                border: '1px solid',
                            }}
                      ></Button>
                      <ArrowForwardIcon 
                          style={{
                                marginTop: '7px',
                            }}/>
                      <span 
                        style={{
                                marginTop: '9px',
                            }}>NULL
                      </span>
                    </ButtonGroup>
                );
            }else{
                items.push(
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button>{current.value}</Button>
                      <Button 
                         style={{
                                border: '1px solid',
                            }}
                      ></Button>
                      <ArrowForwardIcon 
                          style={{
                                marginTop: '7px',
                            }}/>
                    </ButtonGroup>
                );
            }
            
            current = current.next;
           
        }
        return (

            <div className="linkedListMain">

              <React.Fragment>
                    <Card className={useStyles.root}>
                      <CardHeader
                        avatar={
                          <Avatar aria-label="recipe" className={useStyles.avatar}>
                             LS
                          </Avatar>
                        }
                        // action={
                        //   <IconButton aria-label="settings">
                        //     <MoreVertIcon />
                        //   </IconButton>
                        // }
                        title="Linked List Data structure"
                        subheader="Methods: enqueue(), dequeue(), gethead()  Principle: FIFO (First In First Out)"
                      />
                     <img src={Linked_} alt="linked list" width="370" height="170"/>
                      <CardMedia
                        className={useStyles.media}
                       // image={Queue_}
                        title="Paella dish"
                      />
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        A linked list is a sequence of data structures, which are connected together via links.
                         Linked List is a sequence of links 
                        which contains items. Each link contains a connection to another link
                        </Typography>

                        <br/>
                        <Button 
                        variant="outlined" 
                        // onClick={handleExpandClick}  
                        style={{ 'marginLeft': '100px', 'fontSize' : '10px'}}
                        color="primary">
                        Try it out
                      </Button>
                        <Grid item xs={8}>    
                        <form onSubmit={this.addToHead}>
                          <input
                            ref={(a) => this._inputElement = a}
                            style={{
                                fontSize: '13px',
                                color: '#1b1f23',
                                border: '2px solid #cfd7de',
                                borderRadius: '5px',
                                padding: '10px',
                                marginTop: '5px',
                            }}
                            fullWidth
                            placeholder="Add value to linked list"
                            disableUnderline
                            name="value"
                            required
                          />

                           <button
                              type="submit"
                              style={{
                                maxWidth: '80px', 
                                maxHeight: '35px', 
                                minWidth: '80px', 
                                minHeight: '35px',
                               // backgroundColor: red[500],
                                float: 'left',
                                margin: '15px',

                            }}
                              // onClick={push}
                              >
                              <span style={{fontWeight: 'bold'}}>{"Add value"}</span>
                            </button>

                        </form>
                        </Grid>
                         <Grid item xs={8}>
                         <form  onSubmit={this.remove}>
                          <input
                            ref={(a) => this._inputDelete = a}
                            style={{
                                fontSize: '13px',
                                color: '#1b1f23',
                                border: '2px solid #cfd7de',
                                borderRadius: '5px',
                                padding: '10px',
                                marginTop: '5px',
                            }}
                            fullWidth
                            placeholder="Delete Specific item"
                            disableUnderline
                            name="value"
                            required
                          />

                           <button
                              type="submit"
                              style={{
                                maxWidth: '80px', 
                                maxHeight: '35px', 
                                minWidth: '80px', 
                                minHeight: '35px',
                               // backgroundColor: red[500],
                                float: 'left',
                                margin: '15px',

                            }}
                              // onClick={push}
                              >
                              <span style={{fontWeight: 'bold'}}>{"Delete"}</span>
                            </button>

                        </form> 
                        </Grid>
                        <Grid item xs={8}>
                            <button id="removeHead" 
                               onClick={this.removeFromHead}
                                style={{
                                    maxWidth: '150px', 
                                    maxHeight: '35px', 
                                    minWidth: '150px', 
                                    minHeight: '35px',
                                   // backgroundColor: red[500],
                                    float: 'left',
                                    margin: '15px',

                                }}
                               >
                                Remove Head
                             </button>
                        </Grid>

                      
                </CardContent>
                </Card>   
                 <Grid item xs={12}>
                     <div>
                        {items}
                     </div>
                </Grid>      
             </React.Fragment>
            </div>
        );
    }

}

