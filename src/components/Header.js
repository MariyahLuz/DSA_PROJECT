import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
//import IconButton from '@material-ui/core/IconButton';
//import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import tech from '../assets/tech.png'
//import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    //backgroundColor: 'black',
  },
  paper: {
    height: 65,
    width: 150,
    //borderRadius: '40%',
    backgroundColor: '#f1f1f1',
    backgroundImage: `url(${tech})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: 'flex',
    margin: 'auto',
  },
  toolbarTitle: {
    flex: 1,
    color: 'blue',
    fontWeight: 'bold'
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
   active: {
    fontSize: '17px',
    color: 'blue',
    fontWeight: 'bold'
  }
}));

function Header(props) {
  const classes = useStyles();
  const { title } = props;

  const [active_1, setActive_1] = React.useState(false);
  const [active_2, setActive_2] = React.useState(false);
  const [active_3, setActive_3] = React.useState(false);
  const [active_4, setActive_4] = React.useState(false);

  React.useEffect(() => {
    if(window.location.pathname === "/") {
      setActive_1(true)
      setActive_2(false)
      setActive_3(false)
      setActive_4(false)
    }else if(window.location.pathname === "/more_sorting"){
      setActive_1(false)
      setActive_2(true)
      setActive_3(false)
      setActive_4(false)
    }else if(window.location.pathname === "/tower"){
      setActive_1(false)
      setActive_2(false)
      setActive_3(true)
      setActive_4(false)
    }
    else if(window.location.pathname === "/about"){
      setActive_1(false)
      setActive_2(false)
      setActive_3(false)
      setActive_4(true)
    }
  }, []);
  

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Paper className={classes.paper} elevation={0} />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        {/*<IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
         <Button variant="outlined" size="small">
          Sign in
        </Button>*/}
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
         <Grid item xs={2}> </Grid>
         {
           active_1 ? (<Link to="/"  style={{ textDecoration: 'none', color: 'grey' }}>
            <span  className={classes.active} >HOME</span>
          </Link>) : (<Link to="/"  style={{ textDecoration: 'none', color: 'grey' }}>
            <span  className={classes.link} >HOME</span>
          </Link>)
         }
         {
           active_2 ? (<Link to="/more_sorting"  style={{ textDecoration: 'none', color: 'grey' }}>
            <span  className={classes.active} >SORTING </span>
          </Link>) : (<Link to="/more_sorting"  style={{ textDecoration: 'none', color: 'grey' }}>
            <span  className={classes.link} >SORTING </span>
          </Link>)
         }
         
          {
           active_3 ? (<Link to="/tower"  style={{ textDecoration: 'none', color: 'grey' }}>
            <span  className={classes.active} >TOWERS OF HANOI </span>
          </Link>) : (<Link to="/tower"  style={{ textDecoration: 'none', color: 'grey' }}>
            <span  className={classes.link} >TOWERS OF HANOI </span>
          </Link>)
         }
         {
           active_4 ? (<Link to="/about"  style={{ textDecoration: 'none', color: 'grey' }}>
            <span  className={classes.active} >ABOUT </span>
          </Link>) : (<Link to="/about"  style={{ textDecoration: 'none', color: 'grey' }}>
            <span  className={classes.link} >ABOUT </span>
          </Link>)
         }
         
         
        <Grid item xs={2}> </Grid>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;

