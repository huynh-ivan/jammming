import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchBtn from './SearchBtn';
import Tracklist from './Tracklist';
import { mockTracks } from '../MockData/MockData';


function App() {
  const [userQuery, setUserQuery] = useState('')
  const [queryResults, setQueryResults] = useState([])
  const [playlistState, setPlaylistState] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    setQueryResults(mockTracks)
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
        <Tracklist results={queryResults} addToPlaylist={setPlaylistState} />
      </div>
      <div className='Playlist'>
        <h3>Playlist</h3>
        <Playlist playlistState={playlist} removeFromPlaylist={setPlaylistState} />
      </div>
    </div>
  );
}

export default App;
