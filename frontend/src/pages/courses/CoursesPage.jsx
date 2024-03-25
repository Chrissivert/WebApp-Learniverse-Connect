import React, { useState } from 'react';
import Courses from './Courses';
import SearchBar from '../../components/filter/searchBar/SearchBar';
import PriceRangeFilter from '../../components/filter/pricefilter/PriceFilter';

function CoursesPage() {
  const [filters, setFilters] = useState({
    searchQuery: '',
    minPrice: 0,
    maxPrice: 100000,
  });

  return (
    <div>
      <SearchBar setSearchQuery={(query) => setFilters({...filters, searchQuery: query})} />
      <PriceRangeFilter minPrice={0} maxPrice={100000} onPriceChange={(min, max) =>
    setFilters({...filters, minPrice: min, maxPrice: max})
  }
/>

      <Courses filters={filters} />
    </div>
  );
}

export default CoursesPage;
