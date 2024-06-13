import React from "react";

function SearchBar({ type, userQuery, onChange }) {
  const handleChange = (event) => {
    console.log(event.target.value);
    onChange(event.target.value);
  }

  return (
    <input
      type={type}
      value={userQuery}
      onChange={handleChange}
      placeholder="Search for a song!" />
  );
}

export default SearchBar;