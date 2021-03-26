import React, {useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import moment from "moment";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core';
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Fade from '@material-ui/core/Fade';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      width: '90%',
    },
    button:{
      color: '#bdb9ac'
    },
    comment:{
      fontSize: '15px',
      color: theme.palette.text.secondary,
    },
    section: {
      height: "100%",
      paddingTop: 5,
      backgroundColor: "#fff"
    }
  }));
const Comments = (props) => {
    const classes = useStyles();
    const defaultValues = {
      user: "",
      comment: "",
      score: 5,
      restaurant_id: props.restaurantId,
    };

    const [formValues, setFormValues] = useState(defaultValues)
    const [reviews, setReviews] = useState([])
    const [open, setOpen] = React.useState(false);
    const [update , setUpdate] = useState(false)

// This are the reviews
  useEffect( () => {
       setReviews(props.reviews)
       setUpdate(true)
   }, [reviews])


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };


    const handleSubmit = async(event) => {

          event.preventDefault();

          try{

            const createdReview= await axios.post('/api/v1/reviews/', formValues)

            reviews.push(createdReview.data.data)
           
           setOpen(true);

          }catch(error){  
      
          }
        };
    
    return(

        <Grid  container spacing={3}>

<Grid style={{margin:'auto'}} item md={8}  item xs={11} >
<Paper elevation={0} className={classes.paper} style={{display:"flex"}} >
    <h2 >Check the latests user reviews or leave your own comments!</h2>
</Paper>
</Grid>
      {
            reviews.map(review => {
                return (  
                    <Grid key={review.id} style={{margin:"auto"}} item md={8}  item xs={11}>
                     <Fade in>
                    <Paper elevation={10} className={classes.paper} style={{display:"flex"}} >
                    {review.attributes.user} - dated {moment(review.attributes.created_at).format("YYYY-MM-DD")}
                    <br></br>
                    <br></br>
                    {review.attributes.comment}
                    </Paper>
                    </Fade>
                   </Grid>
                )
            })
      }
        
        <Grid style={{margin:'auto'}} item md={8}  item xs={11} >
<Paper elevation={7} className={classes.paper} style={{display:"flex"}} >
  <div style={{width:"100%"}}> 
    
  <form style={{width:"100%"}}  onSubmit={handleSubmit}>
<FormControl style={{width:"100%"}}>
  <InputLabel htmlFor="my-input">User</InputLabel>
  <Input 
  value={formValues.user}
  onChange={handleInputChange} 
  name="user"
  required 
  id="my-input" 
  aria-describedby="my-helper-text"/>
  <br></br>
  <TextField
          id="outlined-multiline-static"
          label="Comentario"
          multiline
          name="comment"
          rows={7}
          columns={20}
          style={{
            width: '100%'
        }}
          value={formValues.comment}
          onChange={handleInputChange}
          required
          variant="outlined"
        />
<br></br>
<Button variant="contained" className="Button" type="submit">
  Submit
</Button>
</FormControl>
</form>
    
     </div>

</Paper>
</Grid>
<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Your Comment was successfully posted!
        </Alert>
      </Snackbar>
        </Grid>
    )
}

export default Comments