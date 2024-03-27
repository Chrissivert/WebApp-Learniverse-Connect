// FilterSection.js
import React from 'react';
import SearchBar from '../../components/filter/searchBar/SearchBar';
import PriceRangeFilter from '../../components/filter/pricefilter/PriceFilter';
import SortByFilter from './sortbyfilter/SortByFilter';
import CategoryFilter from './categoriesFilter/CategoryFilter';

function FilterSection({ onSearchQueryChange, onPriceChange, onSortChange, onCategoryChange }) {
  return (
    <div>
      <SearchBar setSearchQuery={onSearchQueryChange} />
      <PriceRangeFilter onPriceChange={onPriceChange} />
      <SortByFilter onSortChange={onSortChange} />
      <CategoryFilter onCategoryChange={onCategoryChange} />
    </div>
  );
}

export default FilterSection;
