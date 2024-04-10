import React, { useMemo } from "react";
import './Courses.css';
import { Link } from "react-router-dom";
import Coursecard from "../../components/coursecard/Coursecard.jsx";
import { filterLogic } from "./FilterLogic.jsx";
import { paginationUtils } from "../../components/pagination/PaginationUtils.jsx";

function Courses({ courses, filters: tableFilters, currentPage }) {
  const perPage = 6;

  const filteredCourses = useMemo(() => {
    return filterLogic(courses, tableFilters);
  }, [courses, tableFilters]);
  
  const { paginatedData } = paginationUtils(filteredCourses, currentPage, perPage);

  return (
    <div className="Courses">
      {paginatedData.map((course) => (
        <Link to={`/course/${course.id}`} key={course.id}>
          <Coursecard course={course}/>
        </Link>
      ))}
    </div>
  );
}

export default Courses;
