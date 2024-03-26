import { useState } from 'react';

function useCoursesPageState() {
  const [filters, setFilters] = useState({
    searchQuery: '',
    minPrice: 0,
    maxPrice: 100000,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5); // Number of courses per page - hardcoded

  const handleSortChange = (sortBy, sortOrder) => {
    setFilters({ ...filters, sortBy, sortOrder });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  const handleSearchQueryChange = (query) => {
    setFilters({ ...filters, searchQuery: query });
  };

  const handlePriceChange = (min, max) => {
    setFilters({ ...filters, minPrice: min, maxPrice: max });
  };

  return {
    filters,
    currentPage,
    perPage,
    handleSortChange,
    handlePageChange,
    handleSearchQueryChange,
    handlePriceChange,
  };
}

export default useCoursesPageState;
