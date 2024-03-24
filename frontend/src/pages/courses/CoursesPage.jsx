
import React, { useState } from 'react';
import Courses from './Courses';
import SearchBar from '../../components/searchBar/SearchBar';

function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <SearchBar setSearchQuery={setSearchQuery} />
      <Courses searchQuery={searchQuery} />
    </div>
  );
}

export default CoursesPage;
