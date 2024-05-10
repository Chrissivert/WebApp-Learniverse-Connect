import React, { useState } from 'react';
import './categoryFilter.css';

function CategoryFilter({ onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    const categoryName = event.target.value;
    console.log(categoryName);
    setSelectedCategory(categoryName);
    onCategoryChange(categoryName); // Pass categoryName instead of category ID
  };

  return (
    <div>
      <label htmlFor="categorySelect"></label>
      <select id="categorySelect" className="category-select" onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">-- Select a category --</option>
        <option value="Information Technologies">Information Technologies</option>
        <option value="Digital Marketing">Digital Marketing</option>
        <option value="Business and Entrepreneurship">Business and Entrepreneurship</option>
        <option value="Data Science and Analytics">Data Science and Analytics</option>
      </select>
    </div>
  );
}

export default CategoryFilter;
