import React from 'react';

const CountryDetails = ({country}) => {
    
    return (
        <div>
            <h3>{country.name.common}</h3>
            <img src={country.flags.png}></img>
        </div>

    )
}

export default CountryDetails;