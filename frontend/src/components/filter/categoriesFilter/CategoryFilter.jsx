import React, { useEffect, useState } from 'react';
import { getCategoriesFromServer } from '../../../services/category-service';

export default function CategoryFilter({ onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const handleCategoryChange = (event) => {
    const categoryName = event.target.value;
    setSelectedCategory(categoryName);
    onCategoryChange(categoryName);
  };

  /**
   * Fetches the categories in a list
   */
  async function fetchCategories() {
    const response = await getCategoriesFromServer();
    setCategories(response.data);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <label htmlFor="categorySelect"></label>
      <select id="categorySelect" className="category-select" onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">-- Select a category --</option>
        {categories.map((category) => (
          <option key={category.id} value={category.subject}>{category.subject}</option>
        ))}
      </select>
    </div>
  );
}