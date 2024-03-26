// Courses.js
import React, { useEffect, useState, useMemo } from "react";
import './Courses.css';
import { Link } from "react-router-dom";
import Coursecard from "../../components/coursecard/Coursecard.jsx";
import { filterAndSortCourses } from "./CoursesUtils.jsx";
import { paginationUtils } from "../../components/pagination/PaginationUtils.jsx";
import CoursesFetch from "./CoursesFetch.jsx";

function Courses({ filters, currentPage }) {
  const [courses, setCourses] = useState([]);
  const [cheapestPrices, setCheapestPrices] = useState({});
  const perPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      const coursesData = await CoursesFetch.fetchCourses();
      setCourses(coursesData);

      const cheapestPricesData = await CoursesFetch.fetchCheapestPrices();
      setCheapestPrices(cheapestPricesData);
    };

    fetchData();
  }, []);

  const filteredCourses = useMemo(() => {
    return filterAndSortCourses(courses, filters, cheapestPrices);
  }, [courses, filters, cheapestPrices]);

  const { paginatedData } = paginationUtils(filteredCourses, currentPage, perPage);

  return (
    <div className="Courses">
      {paginatedData.map((course) => (
        <Link to={`/course/${course.id}`} key={course.id}>
          <Coursecard course={course} cheapestPrice={cheapestPrices[course.id]} />
        </Link>
      ))}
    </div>
  );
}

export default Courses;
