import React, {useState, useEffect, Fragment} from 'react'
import Header from './Header'
import axios from 'axios'
import LinearProgress from '@material-ui/core/LinearProgress';
import Comments from './Comments'
import RestaurantImages from './RestaurantImages'

const Restaurant = (props) => {
  
    const [restaurant , setRestaurant] = useState({})
    const [review , setReview] = useState({})
    const [restaurantId , setRestaurantId] = useState({})
    const [loaded, setLoaded] = useState(false)

 useEffect(async() => {
      const slug = props.match.params.slug
      const url = `/api/v1/restaurants/${slug}`
  
try{
  const foundRestaurant= await axios.get(url)
  setRestaurantId(foundRestaurant.data.data.id)
  setRestaurant(foundRestaurant.data)
  setLoaded(true)
}catch(error){
  console.log(error)
}
    }, [])


    return <div>
       <div>
       { !loaded ? <LinearProgress color="secondary" /> : 

       <div>

              <div><Header attributes={restaurant.data.attributes}/></div>
             <br></br>
             <br></br>
            <div><RestaurantImages/></div>
             <br></br>
             <br></br>
            <div><Comments restaurantId={restaurantId}  reviews={restaurant.included}/></div>
       
       </div>
       
            } 
        
      
        </div>
    </div>
}

export default Restaurant