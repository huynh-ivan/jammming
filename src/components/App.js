import React, { useCallback, useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import Spotify from '../utils/Spotify';
import { mockTracks, mockPlaylist } from '../MockData/MockData';


function App() {
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
  const [playlistName, setPlaylistName] = useState('New Playlist')

  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) // check for dupe tracks in current playlist
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );


  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id === track.id)
    );
  }, [])

  const updatePlaylistName = useCallback((newName) => {
    setPlaylistName(newName);
  }, []);
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
