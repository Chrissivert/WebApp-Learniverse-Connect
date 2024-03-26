import React, { useEffect, useState } from "react";
import './Courses.css';
import { Link } from "react-router-dom";
import Coursecard from "../../components/coursecard/Coursecard.jsx";
import { filterAndSortCourses } from "./CoursesUtils.jsx";
import CoursesFetch from "./CoursesFetch.jsx";
import { paginationUtils } from "../../components/pagination/PaginationUtils.jsx";
import Pagination from "../../components/pagination/Pagination.jsx";

function Courses({ filters, currentPage, perPage, onPageChange }) {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [cheapestPrices, setCheapestPrices] = useState({});
  const [totalPages, setTotalPages] = useState(0); // Added state for total pages
  
  useEffect(() => {
    loadCourses();
    fetchCheapestPrices();
  }, []);

  useEffect(() => {
    const updatedFilteredCourses = filterAndSortCourses(courses, filters, cheapestPrices, filters.sortBy, filters.sortOrder);
    setFilteredCourses(updatedFilteredCourses);
  }, [filters, courses, cheapestPrices]);

  const loadCourses = async () => {
    const data = await CoursesFetch.fetchCourses();
    setCourses(data);
  };

  const fetchCheapestPrices = async () => {
    const cheapestPrices = await CoursesFetch.fetchCheapestPrices();
    setCheapestPrices(cheapestPrices);
  };

  // Calculate index range for current page
  const { paginatedData } = paginationUtils(filteredCourses, currentPage, perPage);
  
  return (
    <div className="Courses">
      {paginatedData.map((course) => (
        <Link to={`/course/${course.id}`} key={course.id}>
          <Coursecard course={course} cheapestPrice={cheapestPrices[course.id]} />
        </Link>
      ))}
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />
    </div>
  );
}

export default Courses;
