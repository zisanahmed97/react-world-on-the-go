import React from 'react';
import "./country.css"

const Country = ({country}) => {
    console.log()

    const handleVisited=()=>{
        console.log("clicked")
    }
    return (
        <div className='country'>
             <img src={country.flags.flags.png} alt={country.flags.flags.png} />
            <h2>Name: {country.name.official}</h2>
            <button onClick={handleVisited}>not visit</button>
        </div>
    );
};

export default Country;