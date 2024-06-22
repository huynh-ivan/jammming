import React from "react";
import Track from "./Track";
import AddButton from "./AddButton";

//Expect playlistState from App.js
function Playlist({ playlist }) {
  return (
    <div>
      <h3>Playlist</h3>
      <ul>
        {playlist.map(track =>
        (
          <li key={track.id}>
            <h4>{track.trackName}</h4>
            <p>{track.trackArtist}</p>
          </li>
        )
        )}
      </ul>
    </div>
  )
}

export default Playlist;