import React from 'react';
import PropTypes from 'prop-types';
import "./courseBoxStyling.css";


function CourseBox({ title, duration, price }) {
    return (
      <div className="course-box">
        <h2>{title}</h2>
        <p>Duration: {duration}</p>
        <p>Price: ${price}</p>
      </div>
    );
  }
  
  CourseBox.propTypes = {
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  };

function CourseSection() {
  const courses = [
    { title: 'React Fundamentals', duration: '4 weeks', price: 99 },
    { title: 'Advanced JavaScript', duration: '6 weeks', price: 149 },
    { title: 'Web Design Basics', duration: '3 weeks', price: 79 }
  ];

  return (
    <div className="course-section">
      {courses.map((course, index) => (
        <CourseBox key={index} {...course} />
      ))}
    </div>
  );
}

export default CourseSection;
