import React, { useEffect, useState } from "react";
import axios from "axios";
import './Courses.css';
import { Link, useParams } from "react-router-dom";
import Coursecard from "../../components/coursecard/Coursecard.jsx";

function Courses({ filters }) {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [cheapestPrices, setCheapestPrices] = useState({});
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const { id } = useParams();

  useEffect(() => {
    loadCourses();
    fetchCheapestPrices();
  }, []);

  useEffect(() => {
    filterCourses();
  }, [filters, courses, cheapestPrices, sortBy, sortOrder]);

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

    // Sort the filtered courses based on the selected attribute and sort order
    if (sortBy === 'title') {
      filtered.sort((courseA, courseB) => {
        return courseA.title.localeCompare(courseB.title);
      });
    } else if (sortBy) {
      filtered.sort((courseA, courseB) => {
        const valueA = getValueByAttribute(courseA, sortBy);
        const valueB = getValueByAttribute(courseB, sortBy);
        if (sortOrder === 'asc') {
          return valueA - valueB;
        } else {
          return valueB - valueA;
        }
      });
    }
  
    setFilteredCourses(filtered);
  };

  const getValueByAttribute = (course, attribute) => {
    switch (attribute) {
      case 'price':
        return cheapestPrices[course.id];
      case 'credits':
        return course.credit;
      // Add cases for other attributes as needed
      default:
        return null;
    }
  };

  const handleSortChange = (event) => {
    const selectedAttribute = event.target.value;
    setSortBy(selectedAttribute);
    setSortOrder('asc'); // Reset sort order to ascending when changing attribute
  };

  const handleSortOrderChange = () => {
    setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="Courses">
      <div>
        <label htmlFor="sortSelect">Sort by:</label>
        <select id="sortSelect" onChange={handleSortChange}>
          <option value="">-- Select an attribute --</option>
          <option value="title">Title</option>
          <option value="price">Price</option>
          <option value="credits">Credits</option>
          {/* Add more options for other attributes */}
        </select>
        {(sortBy === 'price' || sortBy === 'credits') && (
          <button onClick={handleSortOrderChange}>
            {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
          </button>
        )}
      </div>
      {filteredCourses.map((course) => (
        <Link to={`/course/${course.id}`} key={course.id}>
          <Coursecard course={course} cheapestPrice={cheapestPrices[course.id]} />
        </Link>
      ))}
    </div>
  );
}

export default Courses;
