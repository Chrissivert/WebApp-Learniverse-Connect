import React, { useState, useEffect } from 'react';
import './searchBar.css';

function SearchBar({ searchQuery, setSearchQuery }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchQuery) {
        setResults([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:8081/api/search?query=${searchQuery}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setResults(data);
      } catch (error) {
        setError('Error searching courses. Please try again later.');
        console.error('Error searching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search courses..."
      />
      
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      
      <div className="autocomplete-box">
        {results.map((result) => (
          <div key={result.id} className="autocomplete-item" onClick={() => setSearchQuery(result.title)}>
            {result.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
