import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const img='https://scontent.fdac2-1.fna.fbcdn.net/v/t1.0-0/p600x600/118895636_726500551239016_9122683742673339306_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGXWnUImsgIJxUUzaLLocW7GSVDc0_d7twZJUNzT93u3MhcFniCrAtHtMWKYGJB1VP5Hk9x1JQHngc2SZ2IOxGZ&_nc_ohc=YA07_5BEh70AX9zY913&_nc_ht=scontent.fdac2-1.fna&tp=6&oh=7afa4b67307db3f5da41126b9019e12d&oe=6012C13E'


export default function RecipeReviewCard(props) { 
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  const [count,setCount]=useState(true)

  return (
    <Card style={{margin:'10px auto'}} className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img style={{height:'50px'}} src={img}></img>
          </Avatar>
        }
        action={
          <IconButton  aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="MD SOHIDUL ISLAM"
        subheader="December 31, 2020"
      />
      <CardMedia style={{border:'1px solid black'}}
        className={classes.media}
        image={props.flag}
        title={props.name}
      />
      <CardContent>
        <h5 style={{color:'#F50057'}}>Country Name : {props.name}</h5>
      </CardContent>
      <CardActions disableSpacing> 

      <Link to={`/country/${props.name}`} style={{margin:'0 auto',textDecoration:'none'}}>
      <Button variant="outlined" color="secondary">
        {props.name} details here
      </Button>
      </Link>
      </CardActions>
    </Card>
  );
}
