import React from "react";
import Track from "./Track";

//Expect playlistState from App.js
function Playlist({ playlistState }) {
  return (
    <div>
      <ul>
        {playlistState.map(item => {
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
    </div>
  )
}

export default Playlist;