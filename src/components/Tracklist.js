import React from 'react';
import Track from './Track';

function Tracklist(props) {
  return (
    <div className='TrackList'>
      {props.tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={props.onAdd}
            isRemoval={props.isRemoval}
            onRemove={props.onRemove}
          />
        )
      })}
    </div>
  );
}

export default Tracklist;