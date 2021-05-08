import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Form from 'react-bootstrap/Form'
import FormLabel from "react-bootstrap/FormLabel";
import Col from "react-bootstrap/Col";

import Button from "@material-ui/core/Button";
import Input from '@material-ui/core/Input';

import { red } from '@material-ui/core/colors';

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

const InputForm = (props) => {

    const classes = useStyles();

    let {tree} = props;
    let [enabled, setEnabled] = useState(false);

    const handleInput = (event) => {
        event.preventDefault();
        tree.insert(event.target.input.value.toLowerCase());
        event.target.input.value = '';
        props.update(tree.toGraph());
        setEnabled(false);
    };

    const handleChange = (event) => {
        event.preventDefault();
        let value = event.target.value.toLowerCase();
        setEnabled(value.length !== 0);
    };

    return (
        <div className={"pt-5"}>
            <Form onSubmit={e => handleInput(e)}>
                <FormLabel htmlFor={"input"}>Enter word or number</FormLabel>
                <Form.Row>
                    <Col>
                
                   <Input
                        className={classes.inputSmall}
                        type={"text"} id="input"
                        placeholder={"add value"}
                        onChange={handleChange}
                        fullWidth
                        disableUnderline
                        name="value"
                        autoComplete="add-value"
                        required
                  />
                    </Col>
                     <br />
                    <Col>
                        <input type={"submit"} style={{ "marginTop" : '20px' }} className={"btn btn-primary add-btn"} value={"add"} disabled={!enabled}/>
                    </Col>
                     <br />
                </Form.Row>
            </Form>
        </div>
    );
};

export {InputForm}
