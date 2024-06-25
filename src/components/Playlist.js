import React from "react";
import Tracklist from "./Tracklist";


function Playlist({ playlist }) {
  return (
    <div>
      <h3>{playlist.name}</h3>

      <Tracklist tracklist={playlist.tracklist} />

    </div>
  )
}

export default Playlist;