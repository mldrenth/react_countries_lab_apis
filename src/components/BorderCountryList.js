import React from "react";
import BorderCountryItem from "./BorderCountryItem";

const BorderCountryList = ({countries}) => {

    const countryItems = countries.map((country,index) =>
    {
        return <BorderCountryItem country={country} key={index} />
    })
    const borderPopulation = countries.reduce((prevVal, country) => 
        prevVal + country.population
        
    ,0)

    return(
        <div>
            <h4>Bordering Countries</h4>
            <p>Population of Bordering Countries: {borderPopulation}</p>
            <ul>
                {countryItems}
            </ul>

        </div>
    )
}

export default BorderCountryList