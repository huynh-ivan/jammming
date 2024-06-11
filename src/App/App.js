import logo from './logo.svg';
import './App.css';
import SearchForm from '../SearchForm';
import React from 'react';

function App() {
  // SearchForm state managed here
  return (
    <>
      <SearchForm />
      <SearchResults />
      <Playlist />
    </>
  );
}

export default App;
