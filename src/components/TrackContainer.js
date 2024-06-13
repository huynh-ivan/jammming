import React from "react";
import Track from "./Track"

// TrackContainer receives state from either Tracklist or Playlist

function TrackContainer({ track }) {
  return (
    <div className="TrackContainer">
      <Track
        id={track.id}
        name={track.trackName}
        artist={track.trackArtist}
        album={track.trackAlbum} />
      {/* <Button /> */}
    </div>
  )
}

export default TrackContainer;