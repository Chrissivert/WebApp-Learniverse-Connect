import React, { useState } from 'react';
import Courses from './Courses';
import FilterSection from '../../components/filter/FilterSection';
import Pagination from '../../components/pagination/Pagination';
import useCoursesPageState from './UseCoursesPageState';
import Categories from '../../components/filter/categoriesFilter/Categories';

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

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Categories onSelectCategory={handleCategoryChange} />

      <FilterSection
        onSearchQueryChange={handleSearchQueryChange}
        onPriceChange={handlePriceChange}
        onSortChange={handleSortChange}
      />
      <Courses
        filters={{ ...filters, category: selectedCategory }} // Pass selected category to Courses
        currentPage={currentPage}
      />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
}

export default CoursesPage;
