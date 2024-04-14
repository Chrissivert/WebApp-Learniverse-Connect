import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";  
import { useParams } from "react-router-dom";
import "./Course.css";
import '../../index.css';
import { CartContext } from "../cart/CartProvider";

function Course() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [providers, setProviders] = useState([]);
  const { addToCart } = useContext(CartContext); // Use CartContext

  const handleAddToCart = () => {
    addToCart(course);
  };

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/courses/${id}`);
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    const fetchProviders = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/course/providers/${id}`);
        setProviders(response.data);
      } catch (error) {
        console.error("Error fetching providers:", error);
      }
    };

    fetchCourse();
    fetchProviders();

    return () => {
      setCourse(null);
      setProviders([]);
    };
  }, [id]);

  if (!course || !providers) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Course">
      <div className="head">
        <Link to={`/courses`}>
          <button className="goBackButton">← Courses</button>
        </Link>
        <h2 className="title">{course.title}</h2>
      </div>
      <p>{course.description}</p>
      <p>Start Date: {course.startDate}</p>
      <p>Related Certification: {course.relatedCertification}</p>
      <h3>Providers:</h3>
      <ul>
        {providers.map(provider => (
          <li key={provider.providerId}>
            {provider.providerName} - Price: {provider.price} {provider.currency}
          </li>
        ))}
      </ul>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Course;
