import React, { useEffect, useState } from "react";
import './Courses.css';
import { Link } from "react-router-dom";
import Coursecard from "../../components/coursecard/Coursecard.jsx";
import { filterAndSortCourses } from "./CoursesUtils.jsx";
import CoursesFetch from "./CoursesFetch.jsx";
import { paginationUtils } from "../../components/pagination/PaginationUtils.jsx";

function Courses({ filters, currentPage}) {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [cheapestPrices, setCheapestPrices] = useState({});
  const perPage = 5; // Number of courses per page - hardcoded

  useEffect(() => {
    const fetchData = async () => {
      const coursesData = await CoursesFetch.fetchCourses();
      setCourses(coursesData);

      const cheapestPricesData = await CoursesFetch.fetchCheapestPrices();
      setCheapestPrices(cheapestPricesData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updatedFilteredCourses = filterAndSortCourses(courses, filters, cheapestPrices, filters.sortBy, filters.sortOrder);
    const { paginatedData } = paginationUtils(updatedFilteredCourses, currentPage, perPage);
    setFilteredCourses(paginatedData);
  }, [courses, filters, cheapestPrices, currentPage]);

  return (
    <div className="Courses">
      {filteredCourses.map((course) => (
        <Link to={`/course/${course.id}`} key={course.id}>
          <Coursecard course={course} cheapestPrice={cheapestPrices[course.id]} />
        </Link>
      ))}
    </div>
  );
}

export default Courses;
