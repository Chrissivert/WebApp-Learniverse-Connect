import React from 'react';
import { Link } from 'react-router-dom';
import { filterLogic } from '../../pages/courses/FilterLogic';

function AutocompleteBox({ courses, filters }) {
  // Filter and sort courses based on filters
  const filteredAndSortedCourses = filterLogic(courses, filters);

  // Function to highlight the matching text
  const highlightText = (text, query) => {
    // If the query is empty or not found in the text, return the original text
    if (!query.trim() || !text.toLowerCase().includes(query.toLowerCase())) {
      return text;
    }

    // Split the text into parts based on the query
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    
    // Map each part to add <strong> tag to the matched parts
    return parts.map((part, index) => (
      part.toLowerCase() === query.toLowerCase() ? <strong key={index}>{part}</strong> : part
    ));
  };

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
            {/* Call highlightText function to highlight the matching text */}
            {highlightText(course.title, filters.searchQuery)}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AutocompleteBox;
