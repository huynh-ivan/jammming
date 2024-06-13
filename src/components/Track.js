import React from "react";

function Track(props) {
  return (
    <li key={props.key}>
      <h4>{props.name}</h4>
      <p>{props.artist}</p>
      <p>{props.album}</p>
    </li>
  )
}

export default Track;