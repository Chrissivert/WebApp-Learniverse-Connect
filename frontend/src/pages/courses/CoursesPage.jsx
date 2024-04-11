import React from 'react';
import Courses from './Courses';
import '../../index.css';
import FilterSection from '../../components/filter/FilterSection';
import Pagination from '../../components/pagination/Pagination';
import useCoursesPageState from './UseCoursesPageState';

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
  } = useCoursesPageState();

  return (
    <div>
      <FilterSection
        onSearchQueryChange={handleSearchQueryChange}
        onPriceChange={handlePriceChange}
        onSortChange={handleSortChange}
        onCategoryChange={handleCategoryChange}
        searchQuery={filters.searchQuery}
        courses={courses} // Pass courses to FilterSection
        filters={filters} // Pass filters to FilterSection
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
