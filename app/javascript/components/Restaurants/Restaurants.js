import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import Restaurant from '../Restaurants/Restaurant'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    restaurantsContainer: {
      // backgroundColor: 'black',
      width: '80%',
      margin: 'auto'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      width: '90%',
    },
    section: {
      height: "100%",
      paddingTop: 5,
      backgroundColor: "#fff"
    }
  }));

const Restaurants = () => {
    const classes = useStyles();
    const [restaurants, setRestaurants] = useState([])

    useEffect( async() => {

try{

    const restaurants = await axios.get('/api/v1/restaurants.json')
     
    setRestaurants(restaurants.data.data)

}catch(error){
    console.log(error)
}

    }, [restaurants.length])

    const restaurantsGrid = restaurants.map(item => {
        return(
          <Grid key={item.attributes.name} item  xs={12} item sm={3} item md={4} >

<Paper className={classes.paper}><Restaurant className={classes.section}  attributes={item.attributes}/></Paper>
      
            </Grid>
        )
    })

    return(
  <div className={classes.restaurantsContainer}>
    {restaurants.length == 0 ? <LinearProgress color="secondary" />:<Grid container spacing={3} >{restaurantsGrid}</Grid>}
  </div>
)
}

export default Restaurants