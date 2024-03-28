import React from 'react';
import Courses from './Courses';
import FilterSection from '../../components/filter/FilterSection';
import Pagination from '../../components/pagination/Pagination';
import useCoursesPageState from './UseCoursesPageState';
import AutocompleteBox from '../../components/autocompleteBox/AutoCompleteBox';


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
    <div className="autocomplete-container">
      <FilterSection
        onSearchQueryChange={handleSearchQueryChange}
        onPriceChange={handlePriceChange}
        onSortChange={handleSortChange}
        onCategoryChange={handleCategoryChange}
        searchQuery={filters.searchQuery}
        courses={courses}
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
