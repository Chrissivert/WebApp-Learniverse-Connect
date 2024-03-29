import React from 'react';
import SearchBar from '../../components/filter/searchBar/SearchBar';
import PriceRangeFilter from '../../components/filter/pricefilter/PriceFilter';
import SortByFilter from './sortbyfilter/SortByFilter';
import CategoryFilter from './categoriesFilter/CategoryFilter';
import AutocompleteBox from '../../components/autocompleteBox/AutoCompleteBox'; // Import AutocompleteBox component

function FilterSection({ onSearchQueryChange, onPriceChange, onSortChange, onCategoryChange, courses, filters }) {
  return (
    <div>
      <SearchBar setSearchQuery={onSearchQueryChange} />
      <AutocompleteBox courses={courses} filters={filters} /> {/* Pass both courses and filters to AutocompleteBox */}
      <PriceRangeFilter onPriceChange={onPriceChange} />
      <SortByFilter onSortChange={onSortChange} />
      <CategoryFilter onCategoryChange={onCategoryChange} />
    </div>
  );
}

export default FilterSection;
