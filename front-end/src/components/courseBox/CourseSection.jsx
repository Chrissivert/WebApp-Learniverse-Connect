import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CourseBox from './CourseBox';

function CourseSection({ courses }) {
  const [cheapestPrices, setCheapestPrices] = useState({});

  useEffect(() => {
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
