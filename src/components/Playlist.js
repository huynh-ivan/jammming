import React from "react";
import Track from "./Track";

function Playlist({ playlistState, removeFromPlaylist }) {
  // if I import Track into Playlist, it's state should inherit from the parent, 
  return (
    <div>
      <ul>
        {playlistState.map(track => {
          return (
            <Track
              key={track.id}
              name={track.trackName}
              artist={track.trackArtist}
              album={track.album}
            />
          )
        })
        }
      </ul>
      {/* <SavePlaylistButton /> */}
    </div>
  )
}

export default Playlist;