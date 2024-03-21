import React, { useState } from 'react';
import NavigationBar from '../../components/navbar/Navbar';

function SearchCoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]); // State for suggestions

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Example: Generate suggestions based on the current input value
    generateSuggestions(value);
  };

  // Function to generate suggestions based on the input value
  const generateSuggestions = (query) => {
    // Example: List of suggestions
    const suggestionsList = ['Math', 'Science', 'History', 'Programming', 'Art'];

    // Filter suggestions based on the input value
    const filteredSuggestions = suggestionsList.filter(suggestion =>
      suggestion.toLowerCase().includes(query.toLowerCase())
    );

    setSuggestions(filteredSuggestions); // Update suggestions state
  };

  return (
    <div>
      <h1>Search Courses Page</h1>
      <input
        type="text"
        placeholder="Search for courses"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {/* Render suggestions */}
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
      <button onClick={() => alert(`Searching for: ${searchTerm}`)}>
        Search
      </button>
    </div>
  );
}

export default SearchCoursesPage;
