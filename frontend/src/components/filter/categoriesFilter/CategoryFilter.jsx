import React, { useEffect, useState } from 'react';
import { getCategoriesFromServer } from '../../../services/category-service';

export default function CategoryFilter({ onCategoryChange }) {
  // const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const handleCategoryChange = (event) => {
    const categoryName = event.target.value;
    // setSelectedCategory(categoryName);
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
    <div className='category-container'>
      {/* <label htmlFor="categorySelect" className='category-label'>Category:</label> */}
      <label htmlFor="categorySelect" className='category-label'>Select a category:</label>
      {/* <select id="categorySelect" className="category-select" onChange={handleCategoryChange} value={selectedCategory}> */}
      <select id="categorySelect" className="category-select" onChange={handleCategoryChange}>
        {/* {!selectedCategory && <option value="">-- Select a category --</option>}
        {selectedCategory && <option value="" style={{ fontWeight: 'bold' }}>-- REMOVE CATEGORY --</option>} Thought 'REMOVE CATEGORY' would remove the current category i was on :'( */}
        {<option value="">All Categories</option>}
        {categories.map((category) => (
          <option key={category.id} value={category.subject}>{category.subject}</option>
        ))}
      </select>
    </div>
  );
}
