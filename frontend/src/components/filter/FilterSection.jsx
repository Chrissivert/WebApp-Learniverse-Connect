// FilterSection.js
import React from 'react';
import SearchBar from '../../components/filter/searchBar/SearchBar';
import PriceRangeFilter from '../../components/filter/pricefilter/PriceFilter';
import TableFilter from '../../components/filter/sortbyfilter/TableFilter';

function FilterSection({ onSearchQueryChange, onPriceChange, onSortChange }) {
  return (
    <div>
      <SearchBar setSearchQuery={onSearchQueryChange} />
      <PriceRangeFilter onPriceChange={onPriceChange} />
      <TableFilter onSortChange={onSortChange} />
    </div>
  );
}

export default FilterSection;
