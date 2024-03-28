// FilterSection.js
import React from 'react';
import SearchBar from '../../components/filter/searchBar/SearchBar';
import PriceRangeFilter from '../../components/filter/pricefilter/PriceFilter';
import SortByFilter from './sortbyfilter/SortByFilter';
import CategoryFilter from './categoriesFilter/CategoryFilter';
import AutocompleteBox from '../../components/autocompleteBox/AutoCompleteBox'; // Import AutocompleteBox component

function FilterSection({ onSearchQueryChange, onPriceChange, onSortChange, onCategoryChange, searchQuery, courses }) {
  return (
    <div>
      <PriceRangeFilter onPriceChange={onPriceChange} />
      <SortByFilter onSortChange={onSortChange} />
      <CategoryFilter onCategoryChange={onCategoryChange} />
      <SearchBar setSearchQuery={onSearchQueryChange} />
      <AutocompleteBox searchQuery={searchQuery} courses={courses} />
    </div>
  );
}

export default FilterSection;
