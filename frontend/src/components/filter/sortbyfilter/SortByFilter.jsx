import React, { useState } from 'react';

function SortByFilter({ onSortChange }) {
  const [sortAttribute, setSortAttribute] = useState(''); // State to store the sorting attribute
  const [sortOrder, setSortOrder] = useState('asc');

  const handleAttributeChange = (event) => {
    const selectedAttribute = event.target.value;
    setSortAttribute(selectedAttribute); // Update the sorting attribute state
    onSortChange(selectedAttribute, sortOrder); // Pass the selected attribute and current sort order
  };

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    onSortChange(sortAttribute, newSortOrder);
  };

  return (
    <div className="sort-filter-container">
      <label htmlFor="sortSelect">Sort by:</label>
      <select id="sortSelect" className='sort-dropdown' onChange={handleAttributeChange}>
        <option value="">-- Select an attribute --</option>
        <option value="price">Price</option>
        <option value="credits">Credits</option>
        <option value="title">Title</option>
      </select>
      <button className='sortButton' onClick={toggleSortOrder}>
        {sortAttribute === 'title' ? (sortOrder === 'asc' ? 'A to Z' : 'Z to A') : (sortOrder === 'asc' ? 'Low to High' : 'High to Low')}
      </button>
    </div>
  );
}

export default SortByFilter;
