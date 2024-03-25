import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import './Courses.css';
import { Link, useParams } from "react-router-dom";
import Coursecard from "../../components/coursecard/Coursecard.jsx";

function Courses({ filters }) {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [cheapestPrices, setCheapestPrices] = useState({});

  const { id } = useParams();

  useEffect(() => {
    loadCourses();
    fetchCheapestPrices();
  }, []);

  useEffect(() => {
    filterCourses();
  }, [filters, courses, cheapestPrices]);

  const loadCourses = async () => {
    try {
      const result = await axios.get("http://localhost:8080/courses");
      setCourses(result.data);
    } catch (error) {
      console.error("Error loading courses:", error);
    }
  };

  const fetchCheapestPrices = async () => {
    try {
      const result = await axios.get("http://localhost:8080/cheapest-course-prices");
      const prices = result.data;
      const pricesMap = prices.reduce((acc, current) => {
        acc[current.courseId] = current.price;
        return acc;
      }, {});
      setCheapestPrices(pricesMap);
    } catch (error) {
      console.error("Error fetching cheapest prices:", error);
    }
  };

  const filterCourses = () => {
    let filtered = Object.values(courses);

    if (filters.searchQuery) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
      );
    }

    if (filters.minPrice !== undefined && filters.maxPrice !== undefined) {
      filtered = filtered.filter(course =>
        cheapestPrices[course.id] >= filters.minPrice && cheapestPrices[course.id] <= filters.maxPrice
      );
    }

    setFilteredCourses(filtered);
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
