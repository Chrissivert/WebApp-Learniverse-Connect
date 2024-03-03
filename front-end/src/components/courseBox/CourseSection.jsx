import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './courseBoxStyling.css';
import CourseBox from './CourseBox'; // Import CourseBox component

function CourseSection({ searchQuery }) {
  const [courses, setCourses] = useState([]);
  const [cheapestPrices, setCheapestPrices] = useState({});
  const [filterBy, setFilterBy] = useState(null); // State to track the filter criteria
  const [filteredCourses, setFilteredCourses] = useState([]); // State to hold filtered courses

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/courses', {
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }

        const coursesData = await response.json();
        if (!Array.isArray(coursesData)) {
          throw new Error('Courses data is not an array');
        }

        setCourses(coursesData);
        setFilteredCourses(coursesData); // Initialize filteredCourses with all courses
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    const fetchConvertedPrices = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/converted-course-prices', {
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch converted prices');
        }

        const pricesData = await response.json();
        if (!Array.isArray(pricesData)) {
          throw new Error('Converted prices data is not an array');
        }

        const cheapestPricesMap = pricesData.reduce((acc, price) => {
          acc[price.courseID] = price.price;
          return acc;
        }, {});

        setCheapestPrices(cheapestPricesMap);
      } catch (error) {
        console.error('Error fetching converted prices:', error);
      }
    };

    fetchCourses();
    fetchConvertedPrices();
  }, []);

  useEffect(() => {
    // Update filtered courses whenever searchQuery or courses change
    const filterCourses = (courses, criteria) => {
      switch (criteria) {
        case 'credits':
          return courses.slice().sort((a, b) => a.credits - b.credits);
        case 'price':
          return courses.slice().sort((a, b) => {
            const priceA = cheapestPrices[a.courseID] || Infinity;
            const priceB = cheapestPrices[b.courseID] || Infinity;
            return priceA - priceB;
          });
        case 'alphabetical':
          return courses.slice().sort((a, b) => a.title.localeCompare(b.title));
        default:
          return courses.slice();
      }
    };

    const newFilteredCourses = searchQuery
      ? filterCourses(courses.filter(course => course.title.toLowerCase().includes(searchQuery.toLowerCase())), filterBy)
      : filterCourses(courses, filterBy);

    setFilteredCourses(newFilteredCourses);
  }, [searchQuery, courses, filterBy, cheapestPrices]);

  const handleFilterChange = (criteria) => {
    setFilterBy(criteria);
  };

  return (
    <div className="course-section">
      <div>
        <button onClick={() => handleFilterChange('credits')}>Filter by Credits</button>
        <button onClick={() => handleFilterChange('price')}>Filter by Price</button>
        <button onClick={() => handleFilterChange('alphabetical')}>Filter Alphabetically</button>
      </div>
      {filteredCourses.map(course => (
        <CourseBox
          key={course.courseID}
          {...course}
          cheapestPrice={cheapestPrices[course.courseID]}
        />
      ))}
    </div>
  );
}

CourseSection.propTypes = {
  searchQuery: PropTypes.string.isRequired, // Add searchQuery prop type
};

export default CourseSection;
