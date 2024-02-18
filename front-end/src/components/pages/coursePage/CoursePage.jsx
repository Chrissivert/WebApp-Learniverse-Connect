import React from 'react';
import './coursePage.css';
import '@fortawesome/fontawesome-free/css/all.css';

function CourseDetails() {
  return (
    <div className="course-section">
      <div className="course-box-upper">
        <div className="course-info">
          <h2>Title of the Course</h2>
          <p>Price: $XX</p>
          <p>Duration: XX weeks</p>
          <p>Location: XYZ</p>
        </div>
        <div className="course-image" style={{backgroundImage: 'url(course_image.jpg)'}}>
        </div>
      </div>

      <div className="course-box-lower">
        <div className="course-description">
          <h2>About the Course</h2>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquet.</p>
        </div>
        <div className="course-info">
          <h2>Course Information</h2>
          <ul>
            <li>
              <i className="fas fa-chalkboard-teacher"></i> Difficulty:Advanced
            </li>
            <li>
              <i className="fas fa-award"></i> Credits: 10
            </li>
            <li>
              <i className="fas fa-flag"></i> Language: English
            </li>
          </ul>
          <div className="apply-button">
            <button>Apply Here</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
