import React from "react";

function Track({ key, track, name, artist, action, album, buttonInnerText, uri }) {
  return (
    <li key={key}>
      <h4>{name}</h4>
      <p>{artist}</p>
      <p>{album}</p>
      <button onClick={() => action(track)}>
        {buttonInnerText}
      </button>
    </li>
  )
}


export default Track;