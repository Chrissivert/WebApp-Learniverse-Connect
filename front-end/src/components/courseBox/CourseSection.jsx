import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './courseBoxStyling.css';
import CourseBox from './CourseBox';

function CourseSection({ searchQuery }) {
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [cheapestPrices, setCheapestPrices] = useState([]);

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

  useEffect(() => {
    const fetchConvertedPrices = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/converted-course-prices', {
          credentials: 'include',
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch converted prices');
        }
  
        const pricesData = await response.json();
        setCheapestPrices(pricesData);
      } catch (error) {
        console.error('Error fetching converted prices:', error);
      }
    };
  
    fetchConvertedPrices();
  }, []);

  CourseSection.propTypes = {
    searchQuery: PropTypes.string.isRequired,
  };

  return (
    <div className="course-section">
      {filteredCourses.map(course => {
        const priceData = cheapestPrices.find(price => price.courseID === course.courseID);
        const cheapestPrice = priceData ? priceData.price : null;
  
        return (
          <CourseBox 
            key={course.courseID} 
            {...course}
            cheapestPrice={cheapestPrice}
          />
        );
      })}
    </div>
  );
}

export default CourseSection;
