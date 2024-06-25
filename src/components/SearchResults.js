import React from "react";
import Tracklist from "./Tracklist";

// this component stores the function(s) that update both the tracklist and playlist. 
// it is stateless in that it doesn't manage state itself

function SearchResults({ results, addToPlaylist }) {
  return (
    <div>
      <h3>Search Results</h3>
      <Tracklist
        tracklist={results}
        action={addToPlaylist}
        buttonInnerText='add' />
    </div>
  )
}

export default SearchResults;