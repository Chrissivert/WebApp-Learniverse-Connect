import React from 'react';
import SearchBar from '../../components/filter/searchBar/SearchBar';
import PriceRangeFilter from '../../components/filter/pricefilter/PriceFilter';
import SortByFilter from './sortbyfilter/SortByFilter';
import CategoryFilter from './categoriesFilter/CategoryFilter';
import AutocompleteBox from '../../components/autocompleteBox/AutoCompleteBox'; // Import AutocompleteBox component
import './filterSection.css'; // Import CSS file for FilterSection component

export default function FilterSection({ onSearchQueryChange, onPriceChange, onSortChange, onCategoryChange, courses, filters, maxPrice }) {
  return (
    <section className='filter-section-container'>
      <SearchBar setSearchQuery={onSearchQueryChange} />
      <AutocompleteBox courses={courses} filters={filters} /> {/* Pass both courses and filters to AutocompleteBox */}
      <div className="filter-row" role="group" aria-labelledby="filterHeading">
        <h2 id="filterHeading" className="visually-hidden"></h2>
        <PriceRangeFilter onPriceChange={onPriceChange} maxPrice={maxPrice} /> {/* Pass maxPrice as a prop */}
        <SortByFilter onSortChange={onSortChange} />
        <CategoryFilter onCategoryChange={onCategoryChange} />
      </div>
    </section>
  );
}
