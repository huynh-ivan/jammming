import React from "react";
import Track from "./Track";

function Playlist({ playlistState, removeFromPlaylist }) {
  return (
    <div>
      <ul>
        {playlistState.map(track => {
          return (
            <Track
              name={track.trackName}
              artist={track.trackArtist}
              album={track.album}
              removeFromPlaylist={removeFromPlaylist}
            />
          )
        })
        }
      </ul>
    </div>
  )
}

export default Playlist();