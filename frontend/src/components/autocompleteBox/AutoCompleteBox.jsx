import React from 'react';
import { Link } from 'react-router-dom';
import './autoCompleteBox.css';

function AutocompleteBox({ courses, filters }) {
  // Filter courses based on search query and other filters
  const filteredCourses = courses.filter(course =>
    (!filters.searchQuery || course.title.toLowerCase().includes(filters.searchQuery.toLowerCase())) &&
    course.cheapestPrice >= filters.minPrice &&
    course.cheapestPrice <= filters.maxPrice &&
    (!filters.category || // Check if category is undefined or empty
      (course.categories && // Check if course.categories exists
        course.categories.includes(filters.category))
    )
  );

  // Check if the search query is empty
  if (!filters.searchQuery.trim() || filteredCourses.length === 0) {
    return null; // If empty, return null to indicate no suggestions
  }

  // Define the maximum number of items to display
  const maxItemsToShow = 5;

  return (
    <div className="autocomplete-scrollable">
      {filteredCourses.slice(0, maxItemsToShow).map((course) => (
        <Link to={`/course/${course.id}`} key={course.id} className="autocomplete-item-link">
          <div className="autocomplete-item">
            {course.title}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AutocompleteBox;
