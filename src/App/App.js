import logo from './logo.svg';
import './App.css';
import SearchForm from '../SearchForm';
import React from 'react';

function App() {
  return (
    <>
      <SearchForm />
      <Tracklist />
      <Playlist />
    </>
  );
}

export default App;
