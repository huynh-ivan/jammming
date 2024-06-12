import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchBtn from './SearchBtn';
import { mockTracks } from '../MockData/MockData';

function App() {
  const [userQuery, setUserQuery] = useState('')
  const [queryResults, setQueryResults] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    setQueryResults(mockTracks);
    console.log(queryResults);
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
    </div>
  );
}

export default App;
