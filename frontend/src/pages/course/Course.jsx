import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "./Course.css";
import "../../index.css";
import { CartContext } from "../cart/CartProvider";
import { useCurrencyContext } from "../../components/currencySelector/TargetCurrencyContext";
import DataFetcher from "../../components/fetcher/Datafetcher";

function Course() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [courseAdded, setCourseAdded] = useState(false);
  const { cart, addToCart } = useContext(CartContext);
  const { targetCurrency } = useCurrencyContext();

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
      // setProviders([]);
    };
  }, [id, targetCurrency]);

  useEffect(() => {
    const alreadyInCart = cart.some(item => item.course.course.id === course?.id);
  
    if (alreadyInCart) {
      setCourseAdded(true); 
    }
  }, [cart, course]);
  
  const handleAddToCart = () => {
    if (courseAdded) {
      console.log("Navigate to cart page");
    } else {
      console.log(selectedProvider)
      if (selectedProvider === null) {
        console.log("inside of warning statement");
        setShowWarning(true); // Show warning if no provider selected
        setShowSuccessMessage(false);
      } else {
        const alreadyInCart = cart.some(item => item.course.id === course?.id);
  
        if (alreadyInCart) {
          setShowSuccessMessage(true);
        } else {
          addToCart({ course, selectedProvider });
          setShowSuccessMessage(true);
          setCourseAdded(true);
        }
      }
    }
  };
  
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
        {providers.map((provider) => (
          <li key={provider.providerId}>
            <label
              htmlFor={provider.providerId}
              className={`providerLabel ${courseAdded ? "disabled" : ""}`}
            >
              <input
                type="radio"
                id={provider.providerId}
                name="provider"
                value={provider}
                checked={selectedProvider === provider}
                onChange={() => setSelectedProvider(provider)}
                disabled={courseAdded}
                aria-labelledby={`provider-label-${provider.providerId}`}
              />
              {provider.providerName} - Price:{" "}
              {Math.ceil(provider.price)} {provider.currency}
            </label>
          </li>
        ))}
      </ul>
      {showWarning && (
      <div className="warning" role="alert">
        Please select a provider before adding to cart.
        </div>
      )}

      {showSuccessMessage && (
        <div className="success-message" role="alert">
          Course successfully added to cart!
        </div>
      )}
      <button className="addToCartButton" onClick={handleAddToCart} disabled={!selectedProvider || courseAdded}>
        {courseAdded ? "Already Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default Course;
