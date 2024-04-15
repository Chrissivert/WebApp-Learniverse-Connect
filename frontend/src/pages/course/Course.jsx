import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";  
import { useParams } from "react-router-dom";
import "./Course.css";
import '../../index.css';
import { CartContext } from "../cart/CartProvider";
import { useCurrencyContext } from "../../components/currencySelector/TargetCurrencyContext"; // Import CurrencyContext
import DataFetcher from "../../components/fetcher/Datafetcher";

function Course() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [providers, setProviders] = useState([]);
  const { addToCart } = useContext(CartContext);
  const { targetCurrency } = useCurrencyContext(); 

  const handleAddToCart = () => {
    addToCart(course);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseData = await DataFetcher.fetchCourse(id);
        const providerData = await DataFetcher.fetchProviders(id, targetCurrency);
        setCourse(courseData);
        setProviders(providerData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      setCourse(null);
      setProviders([]);
    };
  }, [id, targetCurrency]); // Include targetCurrency in the dependency array

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
