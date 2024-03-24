import './Courses.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Coursecard from "../../components/coursecard/Coursecard.jsx";
import Course from "../course/Course.jsx";
import SearchBar from '../../components/searchBar/SearchBar.jsx';

function Courses({ searchQuery }) {

  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadCourses();
  }, []);

  useEffect(() => {
    filterCourses();
  }, [searchQuery, courses]);

  const loadCourses = async () => {
    try {
      const result = await axios.get("http://localhost:8080/courses");
      setCourses(result.data);
    } catch (error) {
      console.error("Error loading courses:", error);
    }
  };

  const filterCourses = () => {
    if (!searchQuery) {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  };

  return(
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
