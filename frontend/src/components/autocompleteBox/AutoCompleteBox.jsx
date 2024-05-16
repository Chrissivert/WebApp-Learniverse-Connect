import React from 'react';
import { Link } from 'react-router-dom';
import { filterLogic } from '../../pages/courses/FilterLogic';

function AutocompleteBox({ courses, filters }) {
  // Filter and sort courses based on filters
  const filteredAndSortedCourses = filterLogic(courses, filters);

  // Check if the search query is empty
  if (!filters.searchQuery.trim() || filteredAndSortedCourses.length === 0) {
    return null; // If empty or no matching courses, return null to indicate no suggestions
  }

  // Define the maximum number of items to display
  const maxItemsToShow = 5;

  return (
    <div className="autocomplete-scrollable">
      {filteredAndSortedCourses.slice(0, maxItemsToShow).map((course) => (
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
