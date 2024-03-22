import './Course.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Coursecard from "../../components/coursecard/Coursecard.jsx";

function Course({}) {

  const [courses, setCourses] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const result = await axios.get("http://localhost:8080/courses");
    setCourses(result.data);
  };

  return(
    <div className="Courses">
        {courses.map((course, index) => (
            <Coursecard key={index} course={course} />
        ))}
      </div>
  );
}

export default Course;