import './SearchBar.css';
import React, {useState} from 'react';

const SearchBar = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleTermChange = e => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }

    const search = () => {
        props.onSearch(searchTerm);
    }
    return(
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange}/>
            <button className="SearchButton" onClick={search}>SEARCH</button>
        </div>
    );
}

export default SearchBar;