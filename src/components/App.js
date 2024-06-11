import logo from './logo.svg';
import './App.css';
import SearchForm from '../SearchForm';
import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchBtn from '../SearchBtn/SearchBtn';

function App() {
  const [userQuery, setUserQuery] = useState('')

  // Define the handleChange handler for SearchBar here
  handleChange = (event) => {
    setUserQuery(event.target.value);
  }

  // Define the handleSubmit handler here
  handleSubmit = (event) => {
    event.preventDefault(); // prevent the default behavior
    // submit should make a POST call to the spotify API 
    // receive the response
    // parse the response
    // store the response
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Jammming!</h1>
        <SearchBar value={queryString} onChange={handleChange} />
        <SearchBtn />
      </form>
      <Tracklist />
      <Playlist />
    </div>
  );
}

export default App;
