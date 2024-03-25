import React, { useState } from 'react';
import Courses from './Courses';
import SearchBar from '../../components/filter/searchBar/SearchBar';
import PriceRangeFilter from '../../components/filter/pricefilter/PriceFilter';

function CoursesPage() {
  const [filters, setFilters] = useState({
    searchQuery: '',
    minPrice: undefined,
    maxPrice: undefined
  });

  return (
    <div>
      <SearchBar setSearchQuery={(query) => setFilters({...filters, searchQuery: query})} />
      <PriceRangeFilter onPriceChange={(min, max) => setFilters({...filters, minPrice: min, maxPrice: max})} />
      <Courses filters={filters} />
    </div>
  );
}

export default CoursesPage;
