import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function CourseBox({ title, difficulty, credits, onClick, cheapestPrice }) {
  const roundToTwoDecimalPlaces = (number) => {
    return Math.round(number * 100) / 100;
  };

  return (
    <div className="course-box" onClick={onClick}>
      <div className="course-box-lower">
        <h2>{title}</h2>
        <p>Difficulty: {difficulty}</p>
        <p>Credits: {credits}</p>
        {<p>Cheapest Price: {roundToTwoDecimalPlaces(cheapestPrice)} NOK</p>}
      </div>
    </div>
  );
}

CourseBox.propTypes = {
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  credits: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  cheapestPrice: PropTypes.number // Add prop type for cheapest price
};

function CourseSection() {
  const [courses, setCourses] = useState([]);
  const [sortBy, setSortBy] = useState(''); // State for sorting option

  const fetchCourses = async () => {
    try {
      let url = 'http://localhost:8081/api/courses';
      if (sortBy) {
        url += `?sortBy=${sortBy}`;
      }

      const response = await fetch(url, {
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Failed to fetch courses');
      }

      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [sortBy]);

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortBy(value);
  };

  const handleCourseClick = () => {
    console.log("CourseBox clicked");
  };

  return (
    <div className="course-section">
      <select value={sortBy} onChange={handleSortChange}>
        <option value="">Sort by...</option>
        <option value="credits">Credits</option>
        <option value="price">Price</option>
        <option value="title">Alphabetically</option>
      </select>
      {courses.map((course, index) => (
        <CourseBox 
          key={index} 
          {...course} 
          onClick={handleCourseClick} 
          cheapestPrice={course.cheapestPrice}
        />
      ))}
    </div>
  );
}

export default CourseSection;
