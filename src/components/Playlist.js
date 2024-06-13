import React from "react";
import TrackContainer from "./TrackContainer";

function Playlist({ playlistState }) {
  return (
    <div>
      <ul>
        {playlistState.map(item => {
          return (
            <TrackContainer key={item.id} track={item} />
          )
        })
        }
      </ul>
    </div>
  )
}

export default Playlist;