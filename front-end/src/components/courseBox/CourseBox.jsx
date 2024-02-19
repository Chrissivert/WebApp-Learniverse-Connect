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
      <div className="course-info">
          <p className="category">Humanities</p>
          <p className="type">Online</p>
        </div>
        {/* Course Title and Description */}
        <div className="course-details">
          <h2 className="title">{title}</h2>
          <p className="description">This course covers fundamental concepts of React programming...</p>
        </div>
        {/* Duration, Price, and Start/End Dates */}
        <div className="course-meta">
          <p className="price">Price: ${price}</p>
          <p className="duration">Duration: {duration}</p>
          <p className="schedule">Starts: 10/02/2024 - Ends: 10/26/2024</p>
        </div>
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
