import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function CourseFilter({ onSortChange }) {
  const [sortBy, setSortBy] = useState('');

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortBy(value);
    onSortChange(value);
  };

  return (
    <select value={sortBy} onChange={handleSortChange}>
      <option value="">Sort by...</option>
      <option value="credits">Credits</option>
      <option value="price">Price</option>
      <option value="title">Alphabetically</option>
    </select>
  );
}

CourseFilter.propTypes = {
  onSortChange: PropTypes.func.isRequired,
};

export default CourseFilter;
