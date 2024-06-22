import React from "react";

function Track({ key, track, name, artist, addToPlaylist }) {
  return (
    <li key={key}>
      <h4>{name}</h4>
      <p>{artist}</p>
      <button onClick={() => addToPlaylist(track)}>
        Add
      </button>
    </li>
  )
}


export default Track;