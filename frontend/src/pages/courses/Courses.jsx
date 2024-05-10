import React, { useState, useEffect } from "react";
import './Courses.css';
import '../../index.css';
import { Link } from "react-router-dom";
import Coursecard from "../../components/coursecard/Coursecard.jsx";
import CourseCardSkeleton from "../../components/coursecard/CourseCardSkeleton.jsx";

function Courses({ courses }) {
  const [loading, setLoading] = useState(true); // Initially set to true

  useEffect(() => {
    setLoading(true); // Set loading to true when courses are updated
    setLoading(false); // Set loading to false when courses are received
  }, [courses]);

  // Add console log to check the courses
  console.log("Courses received in Courses component:", courses);

  return (
    <div className="Courses">
      {/* Show skeleton while loading or if no courses are available */}
      {loading || courses.length === 0 ? (
        Array(courses.length).fill().map((_, index) => (
          <CourseCardSkeleton key={index}/>
        ))
      ) : (
        courses.map((course) => (
          <Link to={`/course/${course.id}`} key={course.id}>
            <Coursecard course={course}/>
          </Link>
        ))
      )}
    </div>
  );
}

export default Courses;
