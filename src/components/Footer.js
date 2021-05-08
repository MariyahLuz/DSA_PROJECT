import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'; 


const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'grey',
    marginTop: theme.spacing(3),
    padding: theme.spacing(1, 0),
    paddingTop: theme.spacing(8),
    height: '300px'
  },
  title: {
    fontSize: '25px',
    fontWeight: 'bold',
    color: 'white'
  },
  descrip: {
    fontSize: '15px',
    fontWeight: 'bold',
    color: 'white'
  },
  color: {
    color: 'yellow'
  },
  color_: {
    color: 'white'
  },
  description: {
    marginBottom: '20px',
    color: 'white'
  }
}));

function Footer(props) {
  const classes = useStyles();
  const { description, title} = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="left" className={classes.title} gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="white"
          component="p"
          className={classes.description}
        >
         
        </Typography>

        <Grid container spacing={1}>
        <Grid item xs={12} 
          md={3}
          sm={3}
          xl={4}>
             <Typography className={classes.color_} variant="h7" align="left" gutterBottom>
                 <span className={classes.descrip}> {description} </span><br />
                 {'Copyright © '} {' '}
                  {new Date().getFullYear()}
                  {'.'} Konecthub tech organization based ug
              </Typography>
            
        </Grid>

       

        <Grid item xs={12} 
          md={3}
          sm={3}
          xl={4}>

              <Typography variant="h6" align="left" gutterBottom>
                <span className={classes.color}>Call us:</span>   <span className={classes.color_}> +32 488 94 44 48</span>
              </Typography>
               
        </Grid>

      

        <Grid item xs={12} 
          md={3}
          sm={3}
          xl={4}>
           
              <Typography variant="h6" align="left" gutterBottom>
                 <span className={classes.color}>Find us:</span>   <span className={classes.color_}> www.datacode.com</span>
              </Typography>
             
        </Grid>

         

        <Grid item xs={12} 
          md={3}
          sm={3}
          xl={4}>
              <Typography variant="h6" align="left" gutterBottom>
               <span className={classes.color}>Email us:</span>  <span className={classes.color_}> contact@datacode.com</span> 
              </Typography>
        </Grid> 

        </Grid>
      </Container>
    </footer>
  );
}



export default Footer;
