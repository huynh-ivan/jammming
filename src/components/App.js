import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchBtn from './SearchBtn';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

import { mockTracks } from '../MockData/MockData';


function App() {
  const [userQuery, setUserQuery] = useState('');


  const [results, setResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setResults(mockTracks);
  }

  const [playlist, setPlaylist] = useState({
    name: 'whapps',
    tracklist: []
  });

  const addToPlaylist = (item) => {
    setPlaylist((prevPlaylist) => ({
      ...prevPlaylist,
      tracklist: [...prevPlaylist.tracklist, item]
    }));
  };

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
        results={results}
        addToPlaylist={addToPlaylist} />
      <Playlist
        playlist={playlist} />
    </div>
  );
}

export default App;
