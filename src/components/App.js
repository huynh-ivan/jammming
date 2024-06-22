import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchBtn from './SearchBtn';
import SearchResults from './SearchResults';
import Tracklist from './Tracklist';
import Playlist from './Playlist.js'
import { mockTracks } from '../MockData/MockData';


function App() {
  const [userQuery, setUserQuery] = useState('');



  const [tracklist, setTracklist] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTracklist(mockTracks);
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
      <SearchResults
        tracklist={tracklist}
        setTracklist={setTracklist}
        playlist={playlist}
        setPlaylist={setPlaylist} />
    </div>
  );
}

export default App;
