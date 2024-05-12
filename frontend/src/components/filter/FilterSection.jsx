import React from 'react';
import SearchBar from '../../components/filter/searchBar/SearchBar';
import PriceRangeFilter from '../../components/filter/pricefilter/PriceFilter';
import SortByFilter from './sortbyfilter/SortByFilter';
import CategoryFilter from './categoriesFilter/CategoryFilter';
import AutocompleteBox from '../../components/autocompleteBox/AutoCompleteBox'; // Import AutocompleteBox component
import './filterSection.css'; // Import CSS file for FilterSection component

function FilterSection({ onSearchQueryChange, onPriceChange, onSortChange, onCategoryChange, courses, filters, maxPrice }) {
  return (
    <div>
      <SearchBar setSearchQuery={onSearchQueryChange} />
      <AutocompleteBox courses={courses} filters={filters} /> {/* Pass both courses and filters to AutocompleteBox */}
      <div className="filter-row">
        <PriceRangeFilter onPriceChange={onPriceChange} maxPrice={maxPrice} /> {/* Pass maxPrice as a prop */}
        <SortByFilter onSortChange={onSortChange} />
        <CategoryFilter onCategoryChange={onCategoryChange} />
      </div>
    </div>
  );
}

export default FilterSection;
