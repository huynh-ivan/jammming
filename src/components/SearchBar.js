import React, { useCallback, useState } from "react";
import "../css_modules/SearchBar.css"

function SearchBar(props) {
  const [term, setTerm] = useState('')

  const handleChange = useCallback((event) => {
    setTerm(event.target.value)
  })

  const handleSearch = useCallback(() => {
    props.onSearch(term);
  }, [props.onSearch, term])


  return (
    <div className="search-bar">
      <input
        onChange={handleChange}
        placeholder="Search for a song!" />
      <button onClick={handleSearch} className="SearchButton">Search</button>
    </div>

  );
}

export default SearchBar;