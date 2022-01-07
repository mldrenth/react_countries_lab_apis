import React, {useState, useEffect} from "react";
import WorldPopulation from "../components/WorldPopulation";

const CountryContainer = () => {
    
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    },[])

    const getCountries = () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => setCountries(countries))
    }


    return(

        <>
            
            {countries ? <WorldPopulation countries={countries}/>
            : null}
            {/* <CountrySelector /> */}
            {/* <CountryDetails /> */}
            {/* <FavouriteCountries /> */}
        </>
    )
}

export default CountryContainer