import React, { useCallback, useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import Spotify from '../utils/Spotify';
import { mockTracks, mockPlaylist } from '../MockData/MockData';


function App() {

  // useEffect(() => {
  //   Spotify.getAccessToken();
  // }, [])

  //State & functions for user query string
  const [userQuery, setUserQuery] = useState('');

  // Search Results

  const [results, setResults] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setResults(mockTracks);
  }

  const search = useCallback((userQuery) => {
    Spotify.search(userQuery).then(setResults)
  }, [])

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
      <h1>Jammming!</h1>
      <SearchBar
        buttonType="submit"
        type="search"
        setUserQuery={setUserQuery}
        handleSubmit={handleSubmit}
        onSearch={search} />
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
