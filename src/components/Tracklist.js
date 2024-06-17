import React from "react";
import Track from "./Track";
import TrackContainer from "./TrackContainer";

//receive state from App.js
function Tracklist({ tracklistState }) {
  // track containers in the Tracklist should update the state of the playlist

  // need to pass tracklist an "Add to playlist" handler

  // handler should be passed down from App.js
  return (
    <ul>
      {tracklistState.map(item => {
        return (
          <li>
            <div className="trackContainer">
              <Track
                name={item.trackName}
                artist={item.trackArtist}
                album={item.trackAlbum} />
            </div>
          </li>
        )
      })
      }
    </ul>
  )
}

export default Tracklist;