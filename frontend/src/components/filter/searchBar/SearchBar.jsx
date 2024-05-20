import React, { useState } from 'react';
import CurrencyInfoPopup from '../../currencySelector/CurrencyInfoPopup';

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <form className="search-container" role="search">
      <label htmlFor="searchInput" className="visually-hidden"></label>
      <input
        id="searchInput"
        className="search-input"
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search courses..."
        aria-label="Search courses"
      />
      <div className="info-popup">
      <CurrencyInfoPopup />
      </div>
    </form>
  );
}

export default SearchBar;