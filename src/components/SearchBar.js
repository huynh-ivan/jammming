import React from "react";

function SearchBar({ type, setUserQuery }) {
  const handleChange = (event) => {
    console.log(event.target.value);
    setUserQuery(event.target.value);
  }

  return (
    <input
      type={type}
      onChange={handleChange}
      placeholder="Search for a song!" />
  );
}

export default SearchBar;