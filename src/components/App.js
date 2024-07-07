import React, { useCallback, useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import Spotify from '../utils/Spotify';

import "../css_modules/App.css";


function App() {
  // Search Results
  const [results, setResults] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setResults)
  }, [])

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
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, [])

  const updatePlaylistName = useCallback((newName) => {
    setPlaylistName(newName);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName('New PLaylist');
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);


  return (
    <div>
      <h1>Jammming!</h1>
      <div className='main-app'>
        <SearchBar onSearch={search} />
        <div className='App-playlist'>
          <SearchResults
            results={results}
            onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist} />
        </div>
      </div>
    </div>
  );
};

export default App;
