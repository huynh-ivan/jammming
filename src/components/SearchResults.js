import React from "react";
import Playlist from "./Playlist";
import Tracklist from "./Tracklist";

// this component stores the function(s) that update both the tracklist and playlist. 
// it is stateless in that it doesn't manage state itself

function SearchResults({ tracklist, setTracklist, playlist, setPlaylist }) {

  const addToPlaylist = (item) => {
    const updatedTracklist = tracklist.filter(track => track.id !== item.id);

    const updatedPlaylist = [...playlist, item];

    setTracklist(updatedTracklist);
    setPlaylist(updatedPlaylist);
  }

  return (
    <div>
      <Tracklist tracklist={tracklist} addToPlaylist={addToPlaylist} />
      <Playlist playlist={playlist} />
    </div>
  )

}

export default SearchResults;