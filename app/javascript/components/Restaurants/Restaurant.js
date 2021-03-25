import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    img: {
      margin: 'auto',
      display: 'block',
      maxHeight: '160px',
      height:'122px'
    },
  }));
const Restaurant = (props) => {
    const classes = useStyles();
    return (
        <div className="card">
            <div className="restaurant-logo">
                <a href={`/restaurants/${props.attributes.slug}`}>
                <img className={classes.img} src={props.attributes.img_url} alt={props.attributes.name}></img>
                </a>
             
            </div>
            <div className="restaurant-name">
               <h1> {props.attributes.name}</h1>
                </div>
                <div className="restaurant-description">
               <h3> {props.attributes.description}</h3>
                </div>
            <div className="restaurant-link">
                <Link to={`/restaurants/${props.attributes.slug}`}>View Details</Link>
            </div>
        </div>
    )
}

export default Restaurant