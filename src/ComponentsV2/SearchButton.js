import React from 'react'
import '../assets/v2/search-box.styles.css'

function SearchButton({ placeholder, handleChange }) {
    return (

        <input
            className={"search"}
            type='search'
            placeholder={placeholder}
            onChange={handleChange} />

    )
}

export default SearchButton
