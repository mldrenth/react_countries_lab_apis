import React from "react";
import ListItem from "./ListItem";

const FavouriteCountriesList = ({favouriteCountries}) => {

    const countryItems = favouriteCountries.map((country, index) => {
        return <ListItem country={country} key={index} />
    })

    return(
        <>
            <ul>
                {countryItems}
            </ul>
        </>
    )
    
}







export default FavouriteCountriesList