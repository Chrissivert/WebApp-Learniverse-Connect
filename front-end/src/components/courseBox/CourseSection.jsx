import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './courseBoxStyling.css';
import CourseBox from './CourseBox'; // Import CourseBox component

function CourseSection() {
  const [courses, setCourses] = useState([]);
  const [cheapestPrices, setCheapestPrices] = useState({});

  useEffect(() => {
    // Fetching courses
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
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    // Fetching cheapest prices
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

    fetchCourses().then(fetchConvertedPrices);
  }, []);

  const handleCourseClick = (courseId) => {
    console.log("CourseBox clicked", courseId);
  };

  return (
    <div className="course-section">
      {courses.map(course => (
        <CourseBox
          key={course.courseID} // Assuming each course has a unique `courseID`
          {...course}
          onClick={() => handleCourseClick(course.courseID)} // Passing `courseID` to handleCourseClick
          cheapestPrice={cheapestPrices[course.courseID]} // Assuming the ID field is `courseID`
        />
      ))}
    </div>
  );
}  

CourseSection.propTypes = {
  // Removed courses from propTypes since we're fetching inside the component now
};

export default CourseSection;
