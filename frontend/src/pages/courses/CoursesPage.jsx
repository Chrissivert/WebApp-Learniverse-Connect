import React from 'react';
import Courses from './Courses';
import '../../index.css';
import FilterSection from '../../components/filter/FilterSection';
import Pagination from '../../components/pagination/Pagination';
import coursesPageLogic from './coursesPageLogic';

function CoursesPage() {
  const {
    filters,
    currentPage,
    totalPages,
    courses,
    handleSortChange,
    handlePageChange,
    handleSearchQueryChange,
    handlePriceChange,
    handleCategoryChange,
  } = coursesPageLogic();

  // Add console logs here
  console.log("Filters:", filters);
  console.log("Courses:", courses);

  return (
    <div>
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
        currentPage={currentPage}
        courses={courses}
      />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
}

export default CoursesPage;
