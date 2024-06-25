import React from "react";
import Tracklist from "./Tracklist";


function Playlist({ playlist, removeFromPlaylist }) {
  return (
    <div>
      <h3>{playlist.name}</h3>
      <Tracklist
        tracklist={playlist.tracklist}
        action={removeFromPlaylist}
        buttonInnerText='Remove' />
    </div>
  )
}

export default Playlist;