import './Courses.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Coursecard from "../../components/coursecard/Coursecard.jsx";
import Course from "../course/Course.jsx";

function Courses({}) {

  const [courses, setCourses] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const result = await axios.get("http://localhost:8080/courses");
      setCourses(result.data);
    } catch (error) {
      console.error("Error loading courses:", error);
    }
  };

  return(
    <div className="Courses">
        {courses.map((course, index) => (
          <Link to={`/course/${course.id}`} key={course.id}>
            <Coursecard key = {index} course={course}/>
          </Link>
        ))}
      </div>
  );
}

export default Courses;