import React from "react";
import ListItem from "./ListItem";

const FavouriteCountriesList = ({favouriteCountries}) => {

    const countryItems = favouriteCountries.map((country, index) => {
        return <ListItem country={country} key={index} />
    })

    return(
        <div id="favourites-div">
            <h3>My Favourite Countries:</h3>
            <ul>
                {countryItems}
            </ul>
        </div>
    )
    
}







export default FavouriteCountriesList