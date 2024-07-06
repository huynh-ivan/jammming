import React from "react";
import Tracklist from "./Tracklist";

// this component stores the function(s) that update both the tracklist and playlist. 
// it is stateless in that it doesn't manage state itself

function SearchResults(props) {
  return (
    <div className="SearchResults">
      <h3>Search Results</h3>
      <Tracklist
        tracks={props.results}
        onAdd={props.onAdd} />
    </div>
  )
}

export default SearchResults;