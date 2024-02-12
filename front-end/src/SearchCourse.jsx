import React, { useState } from 'react';
import NavigationBar from './components/navbar/Navbar';

function SearchCoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <NavigationBar/>
      <h1>Search Courses Page</h1>
      <input
        type="text"
        placeholder="Search for courses"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button onClick={() => alert(`Searching for: ${searchTerm}`)}>
        Search
      </button>
    </div>
  );
}

export default SearchCoursesPage;
