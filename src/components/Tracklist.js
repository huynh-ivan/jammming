import React from "react";
import Track from "./Track";

//receive state from App.js
function Tracklist({ tracklist, addToPlaylist }) {
  return (
    <div>
      <h3>Results</h3>
      <ul>
        {tracklist.map(track =>
          <li key={track.id}>
            <h4>{track.trackName}</h4>
            <p>{track.trackArtist}</p>
            <button onClick={() => addToPlaylist(track)}>
              Add
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Tracklist;