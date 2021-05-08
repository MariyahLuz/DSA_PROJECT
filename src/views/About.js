import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
//import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from '../components/Header';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedPost from '../components/FeaturedPost';
import Main from '../components/Main.js';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import image1 from '../assets/homepage/pius.jpg'
import image2 from '../assets/homepage/maria.jpg'

import image4 from '../assets/homepage/sem.jpg'
import image6 from '../assets/homepage/calvin.jpg'
import image8 from '../assets/homepage/jona.jpg'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(5),
    marginRight: theme.spacing(25),
    marginLeft: theme.spacing(30),
  },
}));

const mainFeaturedPost = {
  title: 'About Datacode' ,
  description:
    "This a hands on approach to implement the various data structures and algorithms visually in the frontend",
  imageText: 'main image description',
};

const featuredPosts = [
  {
    title: 'Pius Tumwebaze',
    date: 'Nov 12',
    description:
      "Lead developer for Datacode",
     image: image1,
    imageText: 'Image Text',
  },
  {
    title: 'Balunga Mariam',
    date: 'Nov 11',
    description:
      "Group leader and coodinator",
    image: image2,
    imageText: 'Image Text',
  },
];
const posts = [
  {
    title: 'Kiggundu Jonathan',
    description:"UI designer for Datacode",
     image: image8,
    imageText: 'Image Text',
  },
  {
    title: 'Ssemugga Ronald',
    description:"developer",
    image: image4,
    imageText: 'Image Text',
  },
  {
    title: 'Mutatina Atuhire Calvin',
    description:"ux designer",
    image: image6,
    imageText: 'Image Text',
  },
];
const sidebar = {
  title: 'About',
  description:
    "Tomorrow Solution Malawi welcomes you. We are an Agricultural organisation aiming at educating and rescuing people as well as carrying out farm activites",
  social: [
    { name: 'Whatsapp', icon: WhatsAppIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="DataCode" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={1}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={-1} className={classes.mainGrid}>
            <Main title="Recent From TSM" posts={posts} />
          </Grid>
        </main>
      </Container>
      <Footer
        title="DataCode"
        description="Implementng data structures and algoriithm"
      />
    </React.Fragment>
  );
}
 