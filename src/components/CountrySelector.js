import React from 'react';

const CountrySelector = ({countries, onCountrySelected}) => {
    const handleChange = (event) => {
        const chosenCountry = countries[event.target.value];
        const borderingCountriesShort = chosenCountry.borders
        let borderCountries = []
        if (borderingCountriesShort) {
        borderCountries = countries.filter(country => borderingCountriesShort.includes(country["cca3"]))
    }
        onCountrySelected(chosenCountry, borderCountries)        
    }

    
    
    const countryOptions = countries.map((country,index) => {
        return <option value={index} key={index} >{country.name.common}</option>
        
    })
    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Country...</option>
            {countryOptions}
        </select>
    )
}

export default CountrySelector