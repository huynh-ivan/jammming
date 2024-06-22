import React from "react";
import Track from "./Track";

//receive state from App.js
function Tracklist({ tracklist, addToPlaylist }) {
  return (
    <div>
      <h3>Results</h3>
      <ul>
        {tracklist.map(track =>
          <Track
            key={track.id}
            name={track.trackName}
            artist={track.trackArtist}
            track={track}
            addToPlaylist={addToPlaylist} />
        )}
      </ul>
    </div>
  )
}

export default Tracklist;