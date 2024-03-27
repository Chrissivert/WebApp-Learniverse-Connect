import React, { useMemo } from "react";
import './Courses.css';
import { Link } from "react-router-dom";
import Coursecard from "../../components/coursecard/Coursecard.jsx";
import { filterAndSortCourses } from "./CoursesUtils.jsx";
import { paginationUtils } from "../../components/pagination/PaginationUtils.jsx";

function Courses({ courses, filters: tableFilters, currentPage, selectedCategory }) {
  const perPage = 5;
  console.log(courses + "dadnadakld")

  const filteredCourses = useMemo(() => {
    return filterAndSortCourses(courses, tableFilters, selectedCategory);
  }, [courses, tableFilters, selectedCategory]);
  
  const { paginatedData } = paginationUtils(filteredCourses, currentPage, perPage);

  return (
    <div className="Courses">
      {paginatedData.map((course) => (
        <Link to={`/course/${course.id}`} key={course.id}>
          <Coursecard course={course} />
        </Link>
      ))}
    </div>
  );
}

export default Courses;
