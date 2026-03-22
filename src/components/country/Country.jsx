import React from 'react';

const Country = ({country}) => {
    console.log()
    return (
        <div>
             <img src={country.flags.flags.png} alt={country.flags.flags.png} />
            <h2>Name: {country.name.official}</h2>
        </div>
    );
};

export default Country;