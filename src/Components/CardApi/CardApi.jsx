import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const CardApi = () => {
    const [country,setCountry]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res=>res.json())
        .then(data=>setCountry(data))
    },[])  
    let count=1;
    return (
        <div>
            {
                country.map(country=><Card count={count++} flag={country.flag} name={country.name} info={country} key={country.name}></Card>)
            }
        </div>
    );
};

export default CardApi;