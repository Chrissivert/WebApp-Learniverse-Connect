// FilterSection.js
import React from 'react';
import SearchBar from '../../components/filter/searchBar/SearchBar';
import PriceRangeFilter from '../../components/filter/pricefilter/PriceFilter';
import SortByFilter from './sortbyfilter/SortByFilter';
// import Category from './categoriesFilter/Category';

function FilterSection({ onSearchQueryChange, onPriceChange, onSortChange, onCategoryChange }) {
  return (
    <div>
      <SearchBar setSearchQuery={onSearchQueryChange} />
      <PriceRangeFilter onPriceChange={onPriceChange} />
      <SortByFilter onSortChange={onSortChange} />
      {/* <Category onCategoryChange={onCategoryChange} /> */}
    </div>
  );
}

export default FilterSection;
