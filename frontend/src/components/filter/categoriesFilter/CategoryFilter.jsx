import React, { useState, useEffect } from 'react';
import './categoryFilter.css';

function CategoryFilter({ onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (

    
    <div>
      <label htmlFor="categorySelect"></label>
      <select id="categorySelect" className="category-select" onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">-- Select a category --</option>
        <option value="Databases">Databases</option>
        <option value="Programming">Programming</option>
        <option value="Cloud Services">Cloud Services</option>
        <option value="Web Development">Web Development</option>
        <option value="SEO and Marketing">SEO and Marketing</option>
        <option value="Machine Learning">Machine Learning</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
}

export default CategoryFilter;