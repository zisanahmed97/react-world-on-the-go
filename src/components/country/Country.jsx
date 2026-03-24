import React, { useState } from 'react';
import "./country.css"

const Country = ({country , handleVisitedCountries}) => {
    const [visited , setVisited] =useState(false)
    // console.log()

    const handleVisited=()=>{
      if(visited){
        setVisited(false);
      }else{
        setVisited(true)
      }
      handleVisitedCountries(country);
    }
    return (
        <div className={`country ${visited && 'country-update'}`}>
             <img src={country.flags.flags.png} alt={country.flags.flags.png} />
            <h2>Name: {country.name.official}</h2>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;