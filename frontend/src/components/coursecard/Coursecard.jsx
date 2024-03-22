import React from "react";
import './Coursecard.css'

function Coursecard({ course }) {
  return (
    <div className="coursecard">
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">Start Date: {course.startDate}</p>
        <p className="card-text">Related Certification: {course.relatedCertification}</p>
      </div>
    </div>
  );
}

export default Coursecard;