import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Link style={{color:'white'}} to='/'>
            <MenuIcon />
            </Link>
          </IconButton>
          <Typography style={{margin:'0 auto'}} variant="h6" className={classes.title}>
            <Link  style={{color:'white',textDecoration:'none'}} to='/'>
            <Button  color='inherit'>Country information.com</Button>
            </Link>
          </Typography> 
        </Toolbar>
      </AppBar>
    </div>
  );
}
