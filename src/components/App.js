import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import SearchBtn from './SearchBtn';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

import { mockTracks, mockPlaylist } from '../MockData/MockData';


function App() {
  //State & functions for user query string
  const [userQuery, setUserQuery] = useState('');

  // Search Results
  const [results, setResults] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setResults(mockTracks);
  }

  //Playlist is an object
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

  const removeFromPlaylist = (item) => {
    setPlaylist((prevPlaylist) => ({
      ...prevPlaylist,
      tracklist: prevPlaylist.tracklist.filter((track) => track.id !== item.id)
    }));
  }

  const setPlaylistName = (newName) => {
    setPlaylist(prevPlaylist => ({
      ...prevPlaylist,
      name: { newName }
    }));
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Jammming!</h1>
        <SearchBar
          type="Search"
          setUserQuery={setUserQuery} />
        <SearchBtn type="submit" />
      </form>
      <SearchResults
        results={results}
        addToPlaylist={addToPlaylist} />
      <Playlist
        playlist={playlist}
        setPlaylistName={setPlaylistName}
        removeFromPlaylist={removeFromPlaylist} />
    </div>
  );
}

export default App;
