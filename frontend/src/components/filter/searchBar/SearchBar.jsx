import React, { useState, useEffect } from 'react';

function SearchBar({ searchQuery, setSearchQuery }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);

  const highlightMatch = (title) => {
    const index = title.toLowerCase().indexOf(searchQuery.toLowerCase());
    if (index !== -1) {
      return (
        <>
          {title.substring(0, index)}
          <span className="highlight">{title.substring(index, index + searchQuery.length)}</span>
          {title.substring(index + searchQuery.length)}
        </>
      );
    }
    return title;
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!searchQuery) {
        setResults([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:8081/api/search?query=${searchQuery}`, {
        });

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
  
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
  
      {searchQuery && results.length === 0 && <p>No results found.</p>}
  
      {results.length > 0 && (
        <div className="result-box">
          <ul>
            {results.map((result) => (
              <li key={result.courseID} onClick={() => setSearchQuery(result.title)}>
                {highlightMatch(result.title)}
              </li>
            ))}
          </ul>
        </div>
      )}
  
    </div>
  );
}

export default SearchBar;
