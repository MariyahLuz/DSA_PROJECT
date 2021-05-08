import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 545,
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
    backgroundColor: 'green',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function Main(props) {
  const classes = useStyles();

  const { posts } = props;


  return (
   <div>
       

 <Grid container spacing={1}>
    {posts.map((post, i) => (
      <Grid item key={i} xs={12} sm={6} md={4}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                T
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={post.title}
            subheader={post.date} 
          />
          <CardMedia
            className={classes.media}
            image={post.image}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
               {post.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button size="small" color="primary">
              Read More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      ))}
    </Grid>
   </div> 
  );
}
