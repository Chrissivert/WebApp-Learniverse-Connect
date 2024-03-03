import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CourseSection from './CourseSection'; // Import CourseSection component

function SearchCoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h1>Search Courses Page</h1>
      <SearchBar onSearch={handleSearch} />
      <CourseSection searchQuery={searchQuery} />
    </div>
  );
}

export default SearchCoursesPage;
