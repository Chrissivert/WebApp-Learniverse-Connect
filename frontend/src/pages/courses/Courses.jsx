import React, { useEffect, useState } from "react";
import axios from "axios";
import './Courses.css';
import { Link } from "react-router-dom";
import Coursecard from "../../components/coursecard/Coursecard.jsx";

function Courses({ filters }) {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [cheapestPrices, setCheapestPrices] = useState({});

  useEffect(() => {
    loadCourses();
    fetchCheapestPrices();
  }, []);

  useEffect(() => {
    filterAndSortCourses();
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
      const pricesMap = result.data.reduce((acc, current) => {
        acc[current.courseId] = current.price;
        return acc;
      }, {});
      setCheapestPrices(pricesMap);
    } catch (error) {
      console.error("Error fetching cheapest prices:", error);
    }
  };

  const filterAndSortCourses = () => {
    let filtered = courses.filter(course =>
      course.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
      cheapestPrices[course.id] >= filters.minPrice &&
      cheapestPrices[course.id] <= filters.maxPrice
    );
  
    if (filters.sortBy) {
      filtered.sort((a, b) => {
        const valueA = getValueByAttribute(a, filters.sortBy);
        const valueB = getValueByAttribute(b, filters.sortBy);
        if (filters.sortOrder === 'asc') {
          return valueA > valueB ? 1 : -1;
        } else {
          return valueB > valueA ? 1 : -1; // Changed comparison to sort in descending order
        }
      });
    }
  
    setFilteredCourses(filtered);
  };

  const getValueByAttribute = (course, attribute) => {
    if (attribute === 'price') {
      return cheapestPrices[course.id] || 0;
    } else if (attribute === 'credits') {
      return course.credit || 0;
    }
    return 0;
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
