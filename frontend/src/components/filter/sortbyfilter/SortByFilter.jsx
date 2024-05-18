import React, { useState, useEffect } from 'react';

export default function SortByFilter({ onSortChange }) {
  const [sortAttribute, setSortAttribute] = useState('title');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    onSortChange(sortAttribute, sortOrder);
  }, []);

  const handleAttributeChange = (event) => {
    const selectedAttribute = event.target.value;
    setSortAttribute(selectedAttribute);
    onSortChange(selectedAttribute, sortOrder);
  };

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    onSortChange(sortAttribute, newSortOrder);
  };

  return (
    <div className="sort-filter-container">
      <label htmlFor="sortSelect">Select to sort by:</label>
      <select id="sortSelect" className='sort-dropdown' value={sortAttribute} onChange={handleAttributeChange}>
        <option value="title">Title</option>
        {/* <option value="price">Price</option> */}
        <option value="credits">Credits</option>
      </select>
      <button className='sortButton' onClick={toggleSortOrder}>
        {sortAttribute === 'title' ? (sortOrder === 'asc' ? 'A to Z' : 'Z to A') : (sortOrder === 'asc' ? 'Low to High' : 'High to Low')}
      </button>
    </div>
  );
}