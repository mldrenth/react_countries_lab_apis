import React, {useState, useEffect} from "react";
import WorldPopulation from "../components/WorldPopulation";
import CountrySelector from "../components/CountrySelector";

const CountryContainer = () => {
    
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null)

    useEffect(() => {
        getCountries();
    },[])

    const getCountries = () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => setCountries(countries))
    }

    const onCountrySelected = (country) => {
        setSelectedCountry(country)
    }


    return(

        <>
            
            {countries ? <WorldPopulation countries={countries}/>
            : null}
            <CountrySelector countries={countries} onCountrySelected={onCountrySelected} />
            {/* <CountryDetails /> */}
            {/* <FavouriteCountries /> */}
        </>
    )
}

export default CountryContainer