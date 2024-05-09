import React, { useMemo, useState, useEffect } from "react";
import './Courses.css';
import '../../index.css';
import { Link } from "react-router-dom";
import Coursecard from "../../components/coursecard/Coursecard.jsx";
import { filterLogic } from "./FilterLogic.jsx";
import { paginationUtils } from "../../components/pagination/PaginationUtils.jsx";
import CourseCardSkeleton from "../../components/coursecard/CourseCardSkeleton";

function Courses({ courses, filters: tableFilters, currentPage }) {
  const perPage = 6;
  const [loading, setLoading] = useState(true); // Initially set to true

  const filteredCourses = useMemo(() => {
    setLoading(true); // Set loading to true when filtered courses are updated
    const filtered = filterLogic(courses, tableFilters);
    setLoading(false); // Set loading to false when filtering is done
    return filtered;
  }, [courses, tableFilters]);

  const { paginatedData } = paginationUtils(filteredCourses, currentPage, perPage);

  return (
    <div className="Courses">
      {/* Show skeleton while loading or if no courses are available */}
      {loading || paginatedData.length === 0 ? (
        Array(perPage).fill().map((_, index) => (
          <CourseCardSkeleton key={index}/>
        ))
      ) : (
        paginatedData.map((course) => (
          <Link to={`/course/${course.id}`} key={course.id}>
            <Coursecard course={course}/>
          </Link>
        ))
      )}
    </div>
  );
}

export default Courses;
