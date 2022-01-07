import React from 'react';

const CountryDetails = ({country, onFavouriteCountrySelected}) => {
    
    const handleClick = () => {
        onFavouriteCountrySelected(country)
    }



    return (
        <div>
            <h3>{country.name.common}</h3>
            <img src={country.flags.png}></img>
            <p></p>
            <button onClick={handleClick}>Add Country to Favourites</button>
        </div>

    )
}

export default CountryDetails;