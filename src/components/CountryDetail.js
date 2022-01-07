import React from 'react';
import BorderCountryList from './BorderCountryList';

const CountryDetails = ({country, borderCountries, onFavouriteCountrySelected}) => {
    
    const handleClick = () => {
        onFavouriteCountrySelected(country)
    }



    return (
        <div>
            <h3>{country.name.common}</h3>
            <img src={country.flags.png}></img>
            {borderCountries ? <BorderCountryList countries={borderCountries}/>: null}
            <button onClick={handleClick}>Add Country to Favourites</button>
        </div>

    )
}

export default CountryDetails;