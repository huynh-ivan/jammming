import React from "react";

function SearchBar({ value, onChange }) {
  //stateless componenet
  return (
    <div className="searchbar-container">
      <input type="search" placeholder="Search for a song!" value={value} onChange={onChange}>{value}</input>
    </div>
  );
}

export default SearchBar();