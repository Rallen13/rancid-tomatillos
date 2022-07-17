import React from 'react';
import './Search.css'

const Search = ({searchValue, changeSearch}) => {

    return (
        <form>
            <input
            className='searchField'
            type='text'
            placeholder='search'
            name='searchValue'
            value={searchValue}
            onChange={event => changeSearch(event.target.value)} />
        </form>
    )
}

export default Search