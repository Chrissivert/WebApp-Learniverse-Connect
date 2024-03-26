import React, { useState } from 'react';

function TableFilter({ onSortChange }) {
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
    // Pass the current sorting attribute and the new sort order
    onSortChange(sortAttribute, newSortOrder);
  };

  return (
    <div>
      <label htmlFor="sortSelect">Sort by:</label>
      <select id="sortSelect" onChange={handleAttributeChange}>
        <option value="">-- Select an attribute --</option>
        <option value="price">Price</option>
        <option value="credits">Credits</option>
      </select>
      <button onClick={toggleSortOrder}>
        {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
      </button>
    </div>
  );
}

export default TableFilter;
