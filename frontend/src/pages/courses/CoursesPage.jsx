import React from 'react';
import Courses from './Courses';
// import '../../index.css';
import './Courses.css';
import FilterSection from '../../components/filter/FilterSection';
import coursesPageLogic from './coursesPageLogic';

function CoursesPage() {
  const {
    filters,
    courses,
    handleSortChange,
    handleSearchQueryChange,
    handlePriceChange,
    handleCategoryChange,
  } = coursesPageLogic();

  return (
    <div className='courses-page-container'>
      <FilterSection
        onSearchQueryChange={handleSearchQueryChange}
        onPriceChange={handlePriceChange}
        onSortChange={handleSortChange}
        onCategoryChange={handleCategoryChange}
        courses={courses}
        filters={filters}
        maxPrice={filters.maxPrice}
      />
      <Courses
        filters={filters}
        courses={courses}
      />
    </div>
  );
}

export default CoursesPage;
