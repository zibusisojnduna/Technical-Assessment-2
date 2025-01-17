import React from "react"
import SearchBar from "../components/searchbar"

function Location() {
    return(
        <div>
            <h2>Location</h2>
            <p>Please enter your desired location.</p>

            <div>
                <SearchBar/>
            </div>
        </div>
    )
}
export default Location