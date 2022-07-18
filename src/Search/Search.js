import React from "react";
import "./Search.css";

const Search = ({ searchValue, changeSearch }) => {
  return (
    <form>
      <span className="material-icons search" aria-label="search">
        search
      </span>
      <input
        className="search-field"
        type="text"
        placeholder="search"
        name="searchValue"
        value={searchValue}
        onChange={(event) => changeSearch(event.target.value)}
      />
    </form>
  );
};

export default Search;
