import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000,
  },
  image: {
    width: 128,
    height: 250,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxHeight: '250px',
    marginLeft: '14em'
  },
  name: {
    textAling: 'center',
    color: theme.palette.text.secondary,
    margin: 'auto',
    fontSize: '3em'
  },
  description: {
    textAling: 'center',
    color: theme.palette.text.secondary,
    margin: 'auto',
    fontSize: '1.5em'
  }
}));



const Header = (props) => {
  const classes = useStyles();
  const { name, img_url, description } = props.attributes

  return (
    <div className={classes.root}>
      <Fade in>
        <Paper elevation={0} className={classes.paper}>
          <Grid container spacing={2}>
            <Grid xs={12} sm={5} md={5} item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={img_url} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm={5} md={7} container>
              <Grid item md container direction="column" spacing={2}>
                <Grid item md>
                  <Typography className={classes.name} gutterBottom variant="subtitle1">
                    {name}
                  </Typography>
                  <Typography className={classes.description} variant="body2" gutterBottom>
                    {description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Fade>
    </div>

  )
}

export default Header