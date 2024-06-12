import React from "react";

function SearchBar({ userQuery, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value)
    console.log('the current value is', userQuery);
  }

  return (
    <input
      type="search"
      placeholder="Search for a song!"
      value={userQuery}
      onChange={handleChange}
    />
  );
}

export default SearchBar;