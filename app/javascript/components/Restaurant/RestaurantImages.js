import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  imagesContainer: {
    // backgroundColor: 'black',
    width: '80%',
    margin: 'auto'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxHeight: '250px',
    height: '170px',
    width: '100%'
  },
  section: {
    height: "100%",
    paddingTop: 5,
    backgroundColor: "#fff"
  }
}));

const RestaurantImages = () => {
  const classes = useStyles();

  const images = [
    {
      id: 1,
      url: "https://th.bing.com/th/id/R71b63e800c98014564e07785ea0a4313?rik=3%2bW7H4YFkleJOQ&riu=http%3a%2f%2fsiblighting.com%2fwp-content%2fuploads%2f2016%2f12%2fRestaurant-lighting-ideas.jpg&ehk=lIuWrdabOu4I1ECeBycKVYt4S8ToR0MGqLpoemNqNsw%3d&risl=&pid=ImgRaw",
    },
    {
      id: 2,
      url: "https://cdn.vox-cdn.com/thumbor/Ehxh3KcqVwtYaTytZLYG7DWKxOE=/0x0:3500x2356/1200x800/filters:focal(1470x898:2030x1458)/cdn.vox-cdn.com/uploads/chorus_image/image/57087011/blb15055_37566149182_o.0.jpg",
    },
    {
      id: 3,
      url: "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2019/02/cemffj.jpg",
    },
  ]
  const imagesGrid = images.map(item => {
    return (
      <Grid key={item.id} item xs={12} item sm={4} item md={4} >
        <Fade in>
          <Paper className={classes.paper}>
            <img className={classes.img} src={item.url}></img>
          </Paper>
        </Fade>
      </Grid>
    )
  })

  return (
    <div className={classes.imagesContainer}>
      <Grid container spacing={3} >{imagesGrid}</Grid>
    </div>
  );
}

export default RestaurantImages