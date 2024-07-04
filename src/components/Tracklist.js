import React from 'react';
import Track from './Track';

function Tracklist({ tracklist, action, buttonInnerText }) {
  return (
    <div>
      <ul>
        {tracklist.map((item) => {
          return (
            <Track
              key={item.id}
              track={item}
              name={item.name}
              album={item.album}
              artist={item.artist}
              action={action}
              buttonInnerText={buttonInnerText}
              uri={item.uri}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Tracklist;