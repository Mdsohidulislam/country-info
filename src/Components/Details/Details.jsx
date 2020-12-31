import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryDetails from '../CountryDetails/CountryDetails'
const Details = () => {  
    const {name}=useParams();
    const [country,setCountry]=useState([])
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res=>res.json())
        .then(data=>setCountry(data))
    },[]) 
    return (
        <div>  
            {
                country.map(info=><CountryDetails key={info.name} info={info}></CountryDetails>)
            }
        </div>
    );
};

export default Details;