import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './courseBoxStyling.css';
import programmingImage from '../../resources/images/coursebox/computer/programming.jpg';

function CourseBox({ title, difficulty, credits, onClick, cheapestPrice }) {
  const roundToTwoDecimalPlaces = (number) => {
    return Math.round(number * 100) / 100;
  };

  return (
    <a className="course-box" href="#" onClick={onClick}>
      <div className="course-box-upper" style={{backgroundImage: `url(${programmingImage})`}}>
      </div>
      <div className="course-box-lower">
        <h2>{title}</h2>
        <p>Difficulty: {difficulty}</p>
        <p>Credits: {credits}</p>
        {cheapestPrice && <p>Cheapest Price: {roundToTwoDecimalPlaces(cheapestPrice)} NOK</p>}
      </div>
    </a>
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
  const [cheapestPrices, setCheapestPrices] = useState({});

  useEffect(() => {
    fetchCourses();
    fetchCheapestPrices();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/courses', {
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

  const fetchCheapestPrices = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/converted-course-prices', {
        credentials: 'include'
      });
      if (!response.ok) {
        throw new Error('Failed to fetch cheapest prices');
      }
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error('Cheapest prices data is not an array');
      }
      const cheapestPricesMap = {};
      data.forEach(price => {
        cheapestPricesMap[price.courseID] = price.price;
      });
      setCheapestPrices(cheapestPricesMap);
    } catch (error) {
      console.error('Error fetching cheapest prices:', error);
    }
  };

  const handleCourseClick = () => {
    console.log("CourseBox clicked");
  };

  return (
    <div className="course-section">
      {courses.map((course, index) => (
        <CourseBox 
          key={index} 
          {...course} 
          onClick={handleCourseClick} 
          cheapestPrice={cheapestPrices[course.courseID]} // Pass cheapest price as prop
        />
      ))}
    </div>
  );
}

export default CourseSection;
