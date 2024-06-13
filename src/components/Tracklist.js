import React from "react";
import Track from "./Track";

function Tracklist({ results }) {
  return (
    <ul>
      {results.map(result => {
        return (
          <Track
            key={result.id}
            name={result.trackName}
            artist={result.trackArtist}
            album={result.trackAlbum} />
        )
      })
      }
    </ul>
  )
}

export default Tracklist;