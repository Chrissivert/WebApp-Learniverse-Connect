import React, { useState } from 'react';
import SortByCourseSection from './SortCourseSection';
import SearchCourses from './SearchBar';

function SearchCoursesPage() {

  return (
    <div>
      <h1>Search Courses Page</h1>
      <SearchCourses/>
      <SortByCourseSection/>
    </div>
  );
}

export default SearchCoursesPage;
