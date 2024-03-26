// Updated CoursesPage component with pagination controls
import React, { useState } from 'react';
import Courses from './Courses';
import SearchBar from '../../components/filter/searchBar/SearchBar';
import PriceRangeFilter from '../../components/filter/pricefilter/PriceFilter';
import TableFilter from '../../components/filter/sortbyfilter/TableFilter';
import Pagination from '../../components/pagination/Pagination';

function CoursesPage() {
  const [filters, setFilters] = useState({
    searchQuery: '',
    minPrice: 0,
    maxPrice: 100000,
    sortBy: null,
    sortOrder: null,
  });

  const [currentPage, setCurrentPage] = useState(1);

  const handleSortChange = (sortBy, sortOrder) => {
    setFilters({ ...filters, sortBy, sortOrder });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <SearchBar setSearchQuery={(query) => setFilters({ ...filters, searchQuery: query })} />
      <PriceRangeFilter
        minPrice={0}
        maxPrice={100000}
        onPriceChange={(min, max) =>
          setFilters({ ...filters, minPrice: min, maxPrice: max })
        }
      />
      <TableFilter onSortChange={handleSortChange} />
      <Courses filters={filters} currentPage={currentPage} onPageChange={handlePageChange} />
      <Pagination currentPage={currentPage} totalPages={10} onPageChange={handlePageChange} />
    </div>
  );
}

export default CoursesPage;
