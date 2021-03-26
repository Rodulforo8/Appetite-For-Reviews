import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    height:'200px'
  },
}));

const RestaurantImages =() => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid style={{ margin: 'auto'}} item xs={11} sm={2}>
        <Fade in>
          <Paper elevation={0} className={classes.paper} style={{display:"flex"}} >
          <img className={classes.img} src="https://th.bing.com/th/id/R71b63e800c98014564e07785ea0a4313?rik=3%2bW7H4YFkleJOQ&riu=http%3a%2f%2fsiblighting.com%2fwp-content%2fuploads%2f2016%2f12%2fRestaurant-lighting-ideas.jpg&ehk=lIuWrdabOu4I1ECeBycKVYt4S8ToR0MGqLpoemNqNsw%3d&risl=&pid=ImgRaw" alt="ramdom"></img>

          </Paper>
          </Fade>
        </Grid>
        <Grid style={{ margin: 'auto'}} item xs={11} sm={2}>
        <Fade in>
          <Paper elevation={0} className={classes.paper} style={{display:"flex"}} >
                   <img className={classes.img} src="https://cdn.vox-cdn.com/thumbor/Ehxh3KcqVwtYaTytZLYG7DWKxOE=/0x0:3500x2356/1200x800/filters:focal(1470x898:2030x1458)/cdn.vox-cdn.com/uploads/chorus_image/image/57087011/blb15055_37566149182_o.0.jpg" alt="ramdom"></img>
          </Paper>
          </Fade>
        </Grid>
        <Grid style={{ margin: 'auto'}} item xs={11} sm={2}>
                  <Fade in>
          <Paper elevation={0} className={classes.paper} style={{display:"flex"}} >
                   <img className={classes.img} src="https://img.theculturetrip.com/768x/smart/wp-content/uploads/2019/02/cemffj.jpg" alt="ramdom"></img>
          </Paper>
          </Fade>
        </Grid>
        <Grid style={{ margin: 'auto'}} item xs={11} sm={2}>
        <Fade in>
          <Paper elevation={0} className={classes.paper} style={{display:"flex"}} >
                   <img className={classes.img} src="https://th.bing.com/th/id/Ra157e4a64bdded130e784f334532a0f5?rik=xqcXKY%2bXieE%2fCA&riu=http%3a%2f%2f4.bp.blogspot.com%2f_XMch6G-Xirw%2fS-QlN6L2CVI%2fAAAAAAAAAC4%2fBvDKRD07LvU%2fs1600%2f_DSC0062.jpg&ehk=GBIJMDcA4LQBmNbWyTUvfZVgaSGsoKELEL5gY2BJGzY%3d&risl=&pid=ImgRaw" alt="ramdom"></img>
          </Paper>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
}

export default RestaurantImages