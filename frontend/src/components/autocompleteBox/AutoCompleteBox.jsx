import React from 'react';
import { Link } from 'react-router-dom';
import './autoCompleteBox.css';

function AutocompleteBox({ searchQuery, courses }) {
  // Filter courses based on searchQuery
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!searchQuery.trim() || filteredCourses.length === 0) {
    return null;
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
