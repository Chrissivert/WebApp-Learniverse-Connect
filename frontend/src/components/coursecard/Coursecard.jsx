import React from "react";
import "./Coursecard.css";
import GetImage from "../crudTest/post/image/GetImage";

export default function Coursecard({ course }) {

  return (
    <div className="course-card">
      <div className="image-section">
        <GetImage imageId={course.id}/>
      </div>
      <div className="info-section">
        <h2>{course.title}</h2>
        <p>Start Date: {course.startDate}</p>
      </div>
    </div>
  )
}