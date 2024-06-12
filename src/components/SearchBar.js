import React from "react";

function SearchBar(props) {
  //stateless componenet
  return (
    <input
      type="search"
      placeholder="Search for a song!"
      value={props.userQuery}
      onChange={props.handleChange}>
    </input>
  );
}

export default SearchBar;