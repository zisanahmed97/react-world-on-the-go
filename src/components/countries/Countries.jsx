import React, { use, useState } from 'react';
import Country from '../country/Country';
import "./countries.css"

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    const [visitedCountries, setVisitedCountries]=useState([]);
    const handleVisitedCountries =(country)=>{
        console.log("visited",country)
    }
    // console.log(countries)
    return (
        <div>
            <h1>Countries:{countries.length}</h1>
            <div className='countries'>
             {
                countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
            }
            </div>
           
        </div>
    );
};

export default Countries;