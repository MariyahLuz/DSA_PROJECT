import React, {useCallback, useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Graph from "react-graph-vis";
import {InputForm} from "./InputForm";
import {BinaryTree} from "./BinaryTree";
import Col from "react-bootstrap/Col";
import {options} from "./config";
import Row from "react-bootstrap/Row";
import Button from "@material-ui/core/Button";

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
    color: 'white'
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

let TreeGraph = (props) => {

    const classes = useStyles();

    const defaultTree = {
        edges: [],
        nodes: []
    };

    let [tree, setTree] = useState(new BinaryTree(null));

    let [representation, setRepresentation] = useState({
        edges: [],
        nodes: []
    });
    let [network, setNetwork] = useState(null);
    let [divElement, setDiv] = useState(null);

    let handleResize = useCallback(() => {
        if (network) {
            let newOptions = options;
            newOptions.height = `${divElement.clientHeight}px`;
            network.setOptions(newOptions);
            network.fit();
        }
    }, [network, divElement]);


    useEffect(() => {
        window.addEventListener('resize', handleResize);
    });

    useEffect(() => {
        handleResize();
    });

    const update = (newVal) => {
        setRepresentation(newVal);
        if (network) {
            network.setData(newVal);
        }
    };

    const clear = () => {
        update(defaultTree);
        setTree(new BinaryTree(null));
    };

    return (
        <React.Fragment>
            <Col md={12} className={"mb-2"}>
                <InputForm update={update} tree={tree}/>
                
                <Row className={"mt-3"}>
                    <Col>
                        <Button 
                            className={classes.button}
                        onClick={() => {
                            clear()
                        }}>
                            Clear tree
                        </Button>
                    </Col>
                </Row>
            </Col>

            <Col>
                <div style={{height: '80vh'}}
                     ref={(divElement) => {
                         setDiv(divElement)
                     }}
                     className={"border border-dark"}>
                    <Graph
                        options={props.options}
                        updateTrigger={representation}
                        graph={{edges: [], nodes: []}}
                        getNetwork={network => {
                            setNetwork(network)
                        }}/>
                </div>
            </Col>
        </React.Fragment>
    );
};


export {TreeGraph}
