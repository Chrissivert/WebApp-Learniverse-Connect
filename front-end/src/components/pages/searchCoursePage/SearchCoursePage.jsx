import React, { useState } from 'react';
// import SortByCourseSection from './SortCourseSection';
import SearchCourses from './SearchBar';
import CourseSection from '../../courseBox/CourseSection';

function SearchCoursesPage() {

  return (
    <div>
      <h1>Search Courses Page</h1>
      <SearchCourses/>
      <CourseSection/>
    </div>
  );
}

export default SearchCoursesPage;
