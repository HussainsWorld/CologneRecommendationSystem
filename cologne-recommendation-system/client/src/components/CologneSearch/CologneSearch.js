import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CologneSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`/api/cologne/search?query=${searchTerm}`);
      setResults(res.data);
    } catch (error) {
      console.error('Search error', error);
    }
  };

  return (
    <div>
      <h2>Search Cologne</h2>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((result) => (
          <li key={result._id}>{result.name} - {result.brand}</li>
        ))}
      </ul>
    </div>
  );
};

export default CologneSearch;
