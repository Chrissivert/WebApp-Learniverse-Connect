import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Course.css";
import { CartContext } from "../cart/CartContext";

function Course() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const { addToCart } = useContext(CartContext); // Use CartContext

  const handleAddToCart = () => {
    addToCart(course);
  };
  

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/course/${id}`);
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    fetchCourse();

    return () => {
      setCourse(null);};
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
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Course;
