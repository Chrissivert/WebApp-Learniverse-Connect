import './Courses.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Coursecard from "../../components/coursecard/Coursecard.jsx";

function Courses({ filters }) {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadCourses();
  }, []);

  useEffect(() => {
    filterCourses();
  }, [filters, courses]); // Update useEffect dependency array to include filters

  const loadCourses = async () => {
    try {
      const result = await axios.get("http://localhost:8080/courses");
      setCourses(result.data);
    } catch (error) {
      console.error("Error loading courses:", error);
    }
  };

  const filterCourses = () => {
    let filtered = courses;

    if (filters.searchQuery) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
      );
    }

    if (filters.minPrice !== undefined && filters.maxPrice !== undefined) {
      filtered = filtered.filter(course =>
        course.credit >= filters.minPrice && course.credit <= filters.maxPrice
      );
    }

    // Add more filters as needed

    setFilteredCourses(filtered);
  };

  return (
    <div className="Courses">
      {filteredCourses.map((course, index) => (
        <Link to={`/course/${course.id}`} key={course.id}>
          <Coursecard key={index} course={course}/>
        </Link>
      ))}
    </div>
  );
}

export default Courses;
