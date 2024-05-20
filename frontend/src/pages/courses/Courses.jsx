import React, { useState, useEffect } from "react";
import './Courses.css';
import '../../index.css';
import { Link } from "react-router-dom";
import Coursecard from "../../components/coursecard/Coursecard.jsx";
import CourseCardSkeleton from "../../components/coursecard/CourseCardSkeleton.jsx";

function Courses({ courses }) {
  const [loading, setLoading] = useState(true); // Initially set to true
  const [visibleCourses, setVisibleCourses] = useState([]);

  useEffect(() => {
    // Filter out hidden courses
    const filteredCourses = courses.filter(course => !course.hidden);
    setVisibleCourses(filteredCourses);
    console.log(visibleCourses);
    
    // If there are courses, set loading to false
    if (filteredCourses.length > 0) {
      setLoading(false);
    } else {
      setLoading(true);
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
        visibleCourses.map((course) => (
          <div className="coursecards" key={course.id}>
            <Link to={`/course/${course.id}`}>
              <Coursecard course={course}/>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default Courses;
