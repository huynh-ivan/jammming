import React, { useCallback } from "react";
import Tracklist from "./Tracklist";


function Playlist(props) {
  const handleChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange]
  );

  return (
    <div className="Playlist">
      <input onChange={handleChange} defaultValue={"New Playlist"} />
      <Tracklist
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove} />
      <button className="Playlist-save" onClick={props.onSave}>
        Save to Spotify
      </button>
    </div>
  );
};

export default Playlist;