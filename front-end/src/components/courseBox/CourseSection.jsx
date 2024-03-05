import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './courseBoxStyling.css';
import CourseBox from './CourseBox';
import SortButtons from '../../SortButtons';

function CourseSection({ searchQuery }) {
  const [courses, setCourses] = useState([]);
  const [sortBy, setSortBy] = useState();
  const [coursePrice, setCoursePrice] = useState([]);

  useEffect(() => {
    const fetchFilteredCourses = async () => {
      try {
        const response = await fetch(`http://localhost:8081/api/search?query=${encodeURIComponent(searchQuery)}&sortBy=${sortBy}`, { credentials: 'include' });
        
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }

        const apiCourses = await response.json();
        setCourses(apiCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchFilteredCourses();
  }, [searchQuery, sortBy]);

  useEffect(() => {
    const fetchConvertedPrices = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/converted-course-prices', {
          credentials: 'include',
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch converted prices');
        }
  
        const apiPrices = await response.json();
        setCoursePrice(apiPrices);
      } catch (error) {
        console.error('Error fetching converted prices:', error);
      }
    };
  
    fetchConvertedPrices();
  }, []);

  const handleSortBy = (sortByValue) => {
    setSortBy(sortByValue);
  };

  return (
    <div className="course-section">
      <SortButtons handleSortBy={handleSortBy} />
      {courses.map(course => {
        const priceData = coursePrice.find(price => price.courseID === course.courseID);
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

CourseSection.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default CourseSection;
