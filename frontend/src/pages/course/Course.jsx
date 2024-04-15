import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";  
import { useParams } from "react-router-dom";
import "./Course.css";
import '../../index.css';
import { CartContext } from "../cart/CartProvider";
import { useCurrencyContext } from "../../components/currencySelector/TargetCurrencyContext";
import DataFetcher from "../../components/fetcher/Datafetcher";

function Course() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState(null); // State to store the selected provider
  const [showWarning, setShowWarning] = useState(false); // State to control the warning message
  const { addToCart } = useContext(CartContext);
  const { targetCurrency } = useCurrencyContext(); 

  const handleSelectProvider = (provider) => {
    setSelectedProvider(provider);
    setShowWarning(false); // Hide the warning when a provider is selected
  };

  const handleAddToCart = () => {
    if (selectedProvider) {
      addToCart(selectedProvider);
    } else {
      setShowWarning(true); // Show the warning if no provider is selected
    }
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
    <label htmlFor={provider.providerId} className="providerLabel">
      <input
        type="radio"
        id={provider.providerId}
        name="provider"
        value={provider}
        checked={selectedProvider === provider}
        onChange={() => handleSelectProvider(provider)}
      />
      {provider.providerName} - Price: {Math.ceil(provider.price)} {provider.currency}
    </label>
  </li>
))}
      </ul>
      {showWarning && <div className="warning">Please select a provider before adding to cart.</div>}
      <button className="addToCartButton" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Course;
