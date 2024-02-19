import React from 'react';
import PropTypes from 'prop-types';
import './courseBoxStyling.css';
import programmingImage from '../../resources/images/coursebox/computer/programming.jpg';



function CourseBox({ title, duration, price, onClick }) {
  return (
    <a className="course-box" href="#" onClick={onClick}>
      <div className="course-box-upper" style={{backgroundImage: `url(${programmingImage})`}}>
      </div>
      <div className="course-box-lower">
        <h2>{title}</h2>
        <p>Duration: {duration}</p>
        <p>Price: ${price}</p>
      </div>
    </a>
  );
}
  
CourseBox.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

function CourseSection() {
  const courses = [
    { title: 'React Fundamentals', duration: '4 weeks', price: 99 },
    { title: 'Advanced JavaScript', duration: '6 weeks', price: 149 },
    { title: 'Web Design Basics', duration: '3 weeks', price: 79 }
  ];

  const handleCourseClick = () => {
    // Handle the click event for the entire CourseBox
    console.log("CourseBox clicked");
  };

  return (
    <div className="course-section">
      {courses.map((course, index) => (
        <CourseBox key={index} {...course} onClick={handleCourseClick} />
      ))}
    </div>
  );
}

export default CourseSection;
