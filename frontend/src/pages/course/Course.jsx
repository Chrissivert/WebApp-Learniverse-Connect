import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Course() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/course/${id}`);
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching course:", error);
        setError(error.response ? error.response.data : "Failed to fetch course details");
      }
    };

    fetchCourse();

    return () => {
    };
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Course">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <p>Start Date: {course.startDate}</p>
      <p>Related Certification: {course.relatedCertification}</p>
    </div>
  );
}

export default Course;
