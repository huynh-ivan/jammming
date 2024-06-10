import React from "react";
import SearchBar from "./SearchBar/SearchBar";

function SearchForm() {
  // I think state should be managed by the form element?
  return (
    <form>
      <h1>Jammming</h1>
      <SearchBar />
      <SearchBtn />
    </form>
  );
}

export default SearchForm();