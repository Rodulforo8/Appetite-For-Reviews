import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import { BrowserRouter as Link } from 'react-router-dom'
import companyLogo from '../../images/linkedin_banner_image_1';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  toolbar: {
    minHeight: 40,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    margin: 'auto',
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: '20px'
  },
  logo: {
    margin: 'auto'
  },
  slogan: {
    textAlign: 'center'
  }
}));

const HeaderLogo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: '#ae2a2f' }} position="static">
        <Toolbar className={classes.toolbar}>
          <a href="/">
            <img style={{ height: "160px", margin: 'auto', cursor: "pointer" }} href="/" src={companyLogo} alt="Agoline Logo" />
          </a>
          <br></br>
        </Toolbar>
        <div className={classes.slogan}>
          <h3>The best online users cuisine reviews you can find!</h3>
        </div>
      </AppBar>
    </div>
  );
}

export default HeaderLogo