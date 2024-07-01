import React from "react";
import Tracklist from "./Tracklist";


function Playlist({ playlist, removeFromPlaylist, setPlaylistName }) {
  return (
    <div>
      <input onChange={(e) => setPlaylistName(e.target.value)}>{playlist.name.value}</input>
      <Tracklist
        tracklist={playlist.tracklist}
        action={removeFromPlaylist}
        buttonInnerText='Remove' />
    </div>
  )
}

export default Playlist;