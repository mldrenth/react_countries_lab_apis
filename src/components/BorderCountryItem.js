import React from "react";

const BorderCountryItem = ({country}) => {
    
    return(
        <li>
            {country.name.common}
        </li>
    )
}

export default BorderCountryItem