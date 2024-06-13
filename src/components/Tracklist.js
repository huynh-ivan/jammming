import React from "react";
import TrackContainer from "./TrackContainer";

//receive state from App.js
function Tracklist({ tracklistState }) {
  return (
    <ul>
      {tracklistState.map(item => {
        return (
          <TrackContainer key={item.id} track={item} />
        )
      })
      }
    </ul>
  )
}

export default Tracklist;