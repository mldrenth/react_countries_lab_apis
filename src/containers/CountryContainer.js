import React, {useState, useEffect} from "react";
import WorldPopulation from "../components/WorldPopulation";
import CountrySelector from "../components/CountrySelector";
import CountryDetails from "../components/CountryDetail";
import FavouriteCountriesList from "../components/FavouriteCountriesList";
import './CountryContainer.css'

const CountryContainer = () => {
    
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [favouriteCountries, setFavouriteCountries] = useState([])
    const [borderCountries, setBorderCountries] = useState([])


    useEffect(() => {
        getCountries();
    },[])

    const getCountries = () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => setCountries(countries))
    }

    const onCountrySelected = (country, newBorderCountries) => {
        setSelectedCountry(country)
        setBorderCountries(newBorderCountries)
        
    }

    
    const onFavouriteCountrySelected = (favouriteCountry) => {
        if (!favouriteCountries.includes(favouriteCountry)) {
            setFavouriteCountries([...favouriteCountries, favouriteCountry])
        }

    }

    return(

        <div id="main-container">
            <div id="country-div">
            {countries ? <WorldPopulation countries={countries}/>
            : null}
            <CountrySelector countries={countries} onCountrySelected={onCountrySelected} />
            {selectedCountry ?<CountryDetails country={selectedCountry} borderCountries={borderCountries} onFavouriteCountrySelected={onFavouriteCountrySelected} />: null}
            </div>
            {favouriteCountries ? <FavouriteCountriesList favouriteCountries={favouriteCountries} />
            : null}
        </div>
    )
}

export default CountryContainer