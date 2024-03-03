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
        <h3>{title}</h3>
        <p>Difficulty: {difficulty}</p>
        <p>Credits: {credits}</p>
        {cheapestPrice && <p>Cheapest Price: {roundToTwoDecimalPlaces(cheapestPrice)} NOK</p>}        
      </div>
    </a>
  );
}

CourseBox.propTypes = {
  courses: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  credits: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  cheapestPrice: PropTypes.number // Add prop type for cheapest price
};

CourseSection.defaultProps = {
  courses: [],
};

function CourseSection({ courses }) {
  const [cheapestPrices, setCheapestPrices] = React.useState({});

  React.useEffect(() => {
    const fetchConvertedPrices = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/converted-course-prices', {
          credentials: 'include'
        });

        if (!response.ok) {
          throw new Error('Failed to fetch converted prices');
        }

        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('Converted prices data is not an array');
        }

        const cheapestPricesMap = {};
        data.forEach(price => {
          cheapestPricesMap[price.courseID] = price.price;
        });

        setCheapestPrices(cheapestPricesMap);
      } catch (error) {
        console.error('Error fetching converted prices:', error);
      }
    };

    fetchConvertedPrices();
  }, []);

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
          cheapestPrice={cheapestPrices[course.courseID]} // Make sure cheapestPrices is defined
        />
      ))}
    </div>
  );
}

CourseSection.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CourseSection;