import React, { useCallback, useState } from "react";

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
        type='search'
        onChange={handleChange}
        placeholder="Search for a song!" />
      <button type={props.buttonType} onClick={props.handleSubmit} className="search-btn">
        Search
      </button>
      <button onClick={handleSearch}>View Console</button>
    </div>

  );
}

export default SearchBar;