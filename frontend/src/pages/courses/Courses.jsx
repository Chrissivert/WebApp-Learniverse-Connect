import React, { useState, useEffect } from "react";
import './Courses.css';
import '../../index.css';
import { Link } from "react-router-dom";
import Coursecard from "../../components/coursecard/Coursecard.jsx";
import CourseCardSkeleton from "../../components/coursecard/CourseCardSkeleton.jsx";
import CurrencyInfoPopup from "../../components/currencySelector/CurrencyInfoPopup.jsx";


function Courses({ courses }) {
  const [favoritedCourses, setFavoritedCourses] = useState([]);
  const [loading, setLoading] = useState(true); // Initially set to true
  const [visibleCourses, setVisibleCourses] = useState([]);

  // Function to toggle the favorited state of a course
  const toggleFavorite = (courseId) => {
    if (favoritedCourses.includes(courseId)) {
      setFavoritedCourses(favoritedCourses.filter(id => id !== courseId));
    } else {
      setFavoritedCourses([...favoritedCourses, courseId]);
    }
  };

  const favorites = localStorage.getItem("favorites");
  console.log(favorites + "favorites")


  // Effect to handle loading state based on courses
  useEffect(() => {
    // Set loading to true when courses are updated
    const filteredCourses = courses.filter(course => !course.hidden);
    setVisibleCourses(filteredCourses);
    setLoading(true);
    
    // If there are courses, set loading to false
    if (filteredCourses.length > 0) {
      setLoading(false);
    }
  }, [courses]);

  

  return (
    <div className="courses">
      {/* Show skeleton while loading or if no courses are available */}
      {loading ? (
        // Render skeleton cards
        Array(6).fill().map((_, index) => (
          <div className="coursecards-skeleton" key={index}>
            <CourseCardSkeleton/>
          </div>
        ))
      ) : (
        // Render actual course cards
        visibleCourses.map((course) => (
          console.log(JSON.stringify(course) +"courseadawda"),
          console.log(JSON.stringify(favoritedCourses) +"favoritedCourses"),
          <div className="coursecards" key={course.id}>
            {/* Link to the course detail page */}
            {/* <Link to={`/course/${course.id}`}> */}
            <a href={`/course/${course.id}`}>
              {/* Render CourseCard component */}
              <Coursecard
                course={course}
                favorited={favorites ? favorites.includes(course.id) : false}
                onFavoriteToggle={() => toggleFavorite(course.id)} // Pass toggle function
              />
            {/* </Link> */}
            </a>
          </div>
        ))
      )}
    </div>
  );
}

export default Courses;
