import React, {useState, useEffect} from "react";
import WorldPopulation from "../components/WorldPopulation";
import CountrySelector from "../components/CountrySelector";
import CountryDetails from "../components/CountryDetail";
import FavouriteCountriesList from "../components/FavouriteCountriesList";

const CountryContainer = () => {
    
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [favouriteCountries, setFavouriteCountries] = useState([])


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

    
    const onFavouriteCountrySelected = (favouriteCountry) => {
        if (!favouriteCountries.includes(favouriteCountry)) {
            setFavouriteCountries([...favouriteCountries, favouriteCountry])
        }

    }

    return(

        <>
            
            {countries ? <WorldPopulation countries={countries}/>
            : null}
            <CountrySelector countries={countries} onCountrySelected={onCountrySelected} />
            {selectedCountry ?<CountryDetails country={selectedCountry} onFavouriteCountrySelected={onFavouriteCountrySelected} />: null}
            {favouriteCountries ? <FavouriteCountriesList favouriteCountries={favouriteCountries} />
            : null}
        </>
    )
}

export default CountryContainer