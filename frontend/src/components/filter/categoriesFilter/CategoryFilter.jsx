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

  const clearSelection = () => {
    setSelectedCategory('');
    onCategoryChange(''); // Notify parent component that the category has been cleared
  };

  return (
    <div>
      <label htmlFor="categorySelect">Category:</label>
      <select id="categorySelect" className="category-select" onChange={handleCategoryChange} value={selectedCategory}>
        {!selectedCategory && <option value="">-- Select a category --</option>}
        {selectedCategory && <option value="" style={{ fontWeight: 'bold' }}>-- REMOVE CATEGORY --</option>}
        {categories.map((category) => (
          <option key={category.id} value={category.subject}>{category.subject}</option>
        ))}
      </select>
    </div>
  );
}
