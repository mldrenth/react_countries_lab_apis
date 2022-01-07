import React from "react";

const WorldPopulation = ({countries}) => {
    
    
    const totalPopulation = countries.reduce((previousValue, country) => previousValue + country.population, 0)

    return(
        <p>{totalPopulation}</p>
    );
};

export default WorldPopulation
