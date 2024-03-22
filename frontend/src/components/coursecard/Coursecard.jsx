import React from "react";

function Coursecard({ course }) {
  return (
    <div className="coursecard">
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">ID: {course.id}</p>
        <p className="card-text">Duration: {course.duration}</p>
        <p className="card-text">Description: {course.description}</p>
      </div>
    </div>
  );
}

export default Coursecard;