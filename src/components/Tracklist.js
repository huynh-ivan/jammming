import React from 'react';
import Track from './Track';

function Tracklist({ tracklist, action }) {
  return (
    <div>
      <ul>
        {tracklist.map((item) => {
          return (
            <Track
              key={item.id}
              track={item}
              name={item.trackName}
              album={item.trackAlbum}
              artist={item.trackArtist}
              action={action}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Tracklist;