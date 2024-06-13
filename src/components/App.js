import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchBtn from './SearchBtn';
import Tracklist from './Tracklist';
import Playlist from './Playlist.js'
import { mockTracks } from '../MockData/MockData';


function App() {
  const [userQuery, setUserQuery] = useState('')
  const [tracklistState, setTracklistState] = useState([])
  const [playlistState, setPlaylistState] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    setTracklistState(mockTracks)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Jammming!</h1>
        <SearchBar
          type="Search"
          userQuery={userQuery}
          onChange={setUserQuery} />
        <SearchBtn type="submit" />
      </form>
      <div className='Results'>
        <h3>Results</h3>
        <Tracklist tracklistState={tracklistState} />
      </div>
      <div className='playlist'>
        <h3>Playlist</h3>
        <Playlist playlistState={playlistState} setter={setPlaylistState} />
      </div>
    </div>
  );
}

export default App;
