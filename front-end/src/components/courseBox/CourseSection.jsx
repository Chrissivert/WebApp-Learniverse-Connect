import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './courseBoxStyling.css';
import CourseBox from './CourseBox'; // Import CourseBox component

function CourseSection({ searchQuery }) {
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    const fetchFilteredCourses = async () => {
      try {
        let url = 'http://localhost:8081/api/courses';
        if (searchQuery) {
          url = `http://localhost:8081/api/search?query=${encodeURIComponent(searchQuery)}`;
        }

        const response = await fetch(url, { credentials: 'include' });
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const coursesData = await response.json();
        setFilteredCourses(coursesData);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchFilteredCourses();
  }, [searchQuery]);

  return (
    <div className="course-section">
      {/* Render your filtered courses here */}
      {filteredCourses.map(course => (
        <CourseBox key={course.courseID} {...course} />
      ))}
    </div>
  );
}

CourseSection.propTypes = {
  searchQuery: PropTypes.string.isRequired, // Add searchQuery prop type
};

export default CourseSection;
