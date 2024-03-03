import React, { useState, useEffect } from 'react';
import CourseBox from '../../courseBox/CourseBox';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:8081/api/search?query=${query}`, {
          credentials: 'include'
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
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search courses..."
      />
      <button onClick={() => setQuery(query)} disabled={loading}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div>
        {results.length > 0 ? (
          results.map((course, index) => (
            <CourseBox key={index} {...course} />
          ))
        ) : (
          <p>No courses found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
