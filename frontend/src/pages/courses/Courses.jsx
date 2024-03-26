import React, { useEffect, useState } from "react";
import './Courses.css';
import { Link } from "react-router-dom";
import Coursecard from "../../components/coursecard/Coursecard.jsx";
import { filterAndSortCourses } from "./CoursesUtils.jsx";
import CoursesFetch from "./CoursesFetch.jsx";

function Courses({ filters }) {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [cheapestPrices, setCheapestPrices] = useState({});

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
    const pricesMap = await CoursesFetch.fetchCheapestPrices();
    setCheapestPrices(pricesMap);
  };

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
