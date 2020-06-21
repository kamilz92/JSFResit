import React from 'react'

const Search = ({fn}) => {
    return ( 
        <div className="search">
            <input onChange={fn} className="search__input" type="text" placeholder="Search for a card" />
        </div>
     );
}
 
export default Search;