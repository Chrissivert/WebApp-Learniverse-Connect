import React from 'react';
import Courses from './Courses';
import FilterSection from '../../components/filter/FilterSection';
import Pagination from '../../components/pagination/Pagination';
import useCoursesPageState from './UseCoursesPageState';

function CoursesPage() {
  const {
    filters,
    currentPage,
    totalPages,
    handleSortChange,
    handlePageChange,
    handleSearchQueryChange,
    handlePriceChange,
  } = useCoursesPageState();

  return (
    <div>
      <FilterSection
        onSearchQueryChange={handleSearchQueryChange}
        onPriceChange={handlePriceChange}
        onSortChange={handleSortChange}
      />
      <Courses
        filters={filters}
        currentPage={currentPage}
      />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
}

export default CoursesPage;
