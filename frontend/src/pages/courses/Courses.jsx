import React, { useState, useEffect } from "react";
import './Courses.css';
import '../../index.css';
import { Link } from "react-router-dom";
import Coursecard from "../../components/coursecard/Coursecard.jsx";
import CourseCardSkeleton from "../../components/coursecard/CourseCardSkeleton.jsx";

function Courses({ courses }) {
  const [loading, setLoading] = useState(true); // Initially set to true

  useEffect(() => {
    // Set loading to true when courses are updated
    setLoading(true);
    
    // If there are courses, set loading to false
    if (courses.length > 0) {
      setLoading(false);
    }
  }, [courses]);
  return (
    <div className="courses">
      {/* Show skeleton while loading or if no courses are available */}
      {loading ? (
        Array(6).fill().map((_, index) => (
          <div className="coursecards-skeleton" key={index}>
            <CourseCardSkeleton/>
          </div>
        ))
      ) : (
        courses.map((course) => (
          <div className="coursecards">
            <Link to={`/course/${course.id}`} key={course.id}>
              <Coursecard course={course}/>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default Courses;
