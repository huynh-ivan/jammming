import React from "react";
import Playlist from "./Playlist";

function Track({ key, name, artist, album }) {
  return (
    <li key={key}>
      <h4>{name}</h4>
      <p>{artist}</p>
      <p>{album}</p>
    </li>
  )
}

export default Track;