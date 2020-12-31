import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {

  const classes = useStyles();
    const {name,flag,capital,cioc,demonym,gini,nativeName,numericCode,population,region,subregion,area,alpha2Code,alpha3Code,arr,altSpellings,borders,callingCodes,currencies,languages,latlng,regionalBlocs,timezones,topLevelDomain,translations}=props.info;
    const {de,es,fr,ja,it}=translations;
 
    const count=1; 
  return (
    <Card style={{margin:'20px auto'}} className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100%"
          image={flag}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" color='secondary' component="h2">
            {name}
          </Typography>
        <Typography variant='h6'>Native Name : {nativeName}</Typography>
        <Typography variant='h6'>Capital : {capital}</Typography>
        <Typography variant='h6'>Population : {Number(population)}</Typography>
        <Typography variant='h6'>Region : {region}</Typography>
        <Typography variant='h6'>Subregion : {subregion}</Typography>
        <Typography variant='h6'>Numeric Code : {numericCode}</Typography>
        <Typography variant='h6'>Demonym : {demonym}</Typography>
        <Typography variant='h6'>Alpha 2 code : {alpha2Code}</Typography>
        <Typography variant='h6'>Alpha 3 code : {alpha3Code}</Typography>
        <Typography variant='h6'>CIOC : {cioc}</Typography>
        <Typography variant='h6'>GINI : {gini}</Typography>
        <Typography variant='h6'>Area : {area}</Typography> 
        <Typography variant='h6'>Alt Spellings :</Typography> 
        <ul style={{listStyleType:'upper-alpha'}}>
            {
                altSpellings.map(bd=><li key={bd}>{bd}</li>)
            }
        </ul>
        <Typography variant='h6'>Languages :</Typography> 
        <ul style={{listStyleType:'upper-alpha'}}>
            {
                languages.map(bd=>{
                    return(
                        <ul key={bd.name} style={{listStyleType:"circle"}}>
                            <li> Name : {bd.name} <br/> Native Name : {bd.nativeName}</li> 
                        </ul>
                    )
                })
            }
        </ul>   
        <Typography variant='h6'>Currencies :</Typography> 
        <ul style={{listStyleType:'upper-alpha'}}>
            {
                currencies.map(bd=>{
                    return(<div key={bd.name}>
                        <p>Name :  {bd.name}</p>
                        <p>Symbol : <span className='symbol'>{bd.symbol}</span></p>
                        <p>Code : {bd.code}</p>
                    </div>)
                })
            }
        </ul>
        <Typography variant='h6'>Borders :</Typography> 
        <ul style={{listStyleType:'upper-alpha'}}>
            {
                borders.map(bd=><li key={bd}>{bd}</li>)
            }
        </ul>
        <Typography variant='h6'>Translations :</Typography> 
        <ul>
            <li>DE : {de}</li>
            <li>ES : {es}</li>
            <li>JA : {ja}</li>
            <li>IT : {it}</li>
            <li>FR : {fr}</li>
        </ul>
  



        <Typography variant='h6'>Latitude and Longitude :</Typography> 
        <ul style={{listStyleType:'upper-alpha'}}>
            {
                latlng.map(bd=><li key={bd}>{bd}</li>)
            }
        </ul>
        <Typography variant='h6'>Time Zones :</Typography> 
        <ul style={{listStyleType:'upper-alpha'}}>
            {
                timezones.map(bd=><li key={bd}>{bd}</li>)
            }
        </ul>
        
        </CardContent>
      </CardActionArea>
      <CardActions> 
        <Link style={{textDecoration:'none',margin:'0 auto'}} to='/'>
            <Button  variant="outlined" color="secondary">
            back home
            </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
