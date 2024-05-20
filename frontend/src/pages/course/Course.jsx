import React, { useEffect, useState, useContext, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import "./Course.css";
import "../../index.css";
import { CartContext } from "../cart/CartProvider";
import { useCurrencyContext } from "../../components/currencySelector/TargetCurrencyContext";
import { getOneCourseFromServer } from "../../services/course-service";
import {
  addFavoriteCourseToServer,
  deleteFavoriteCourseOnServer,
} from "../../services/favorite-course";
import { getAllProvidersForACourse } from "../../services/course-provider";
import NotFound from "../error/notFound/404";

function Course() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [courseAdded, setCourseAdded] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const { cart, addToCart } = useContext(CartContext);
  const { targetCurrency } = useCurrencyContext();
  const addToCartButtonRef = useRef(null); // Ref for the add to cart button

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseData = await getOneCourseFromServer(id);
        const providerData = await getAllProvidersForACourse(
          id,
          targetCurrency
        );
        setCourse(courseData.data);
        setProviders(providerData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, targetCurrency]);

  useEffect(() => {
    const alreadyInCart = cart.some(
      (item) => item.course.course.id === course?.id
    );
    setCourseAdded(alreadyInCart);
  }, [cart, course]);

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      const favoritesArray = JSON.parse(favorites);
      setFavorited(favoritesArray.includes(id));
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedProvider) {
      setShowWarning(true);
      setShowSuccessMessage(false);
    } else if (!courseAdded) {
      addToCart({ course, selectedProvider });
      setShowSuccessMessage(true);
      setCourseAdded(true);
    }
  };

  const handleToggleFavorite = async () => {
    const userId = localStorage.getItem("ActiveUserId");
    try {
      let favorites = localStorage.getItem("favorites");
      if (!favorites) favorites = "[]";
      let favoritesArray = JSON.parse(favorites);
      if (!favorited) {
        await addFavoriteCourseToServer(userId, id);
        favoritesArray.push(id);
        localStorage.setItem("favorites", JSON.stringify(favoritesArray));
        setFavorited(true);
      } else {
        await deleteFavoriteCourseOnServer(userId, id);
        favoritesArray = favoritesArray.filter((favId) => favId !== id);
        localStorage.setItem("favorites", JSON.stringify(favoritesArray));
        setFavorited(false);
      }
    } catch (error) {
      console.error("Failed to update favorites:", error);
    }
  };

  const handleProviderSelection = (provider) => {
    setSelectedProvider(provider);
  };

  const handleKeyPress = (e, provider) => {
    if (e.key === "Enter") {
      handleProviderSelection(provider);
    }
  };

  useEffect(() => {
    // For debugging purpose, check if button is focusable
    if (addToCartButtonRef.current) {
      console.log("Add to Cart button:", addToCartButtonRef.current);
    }
  }, []);

  if (!course || !providers.length) {
    return <NotFound/>
  }

  return (
    <div className="Course">
      <div className="head">
        <Link to={`/courses`}>
          <button className="goBackButton">← Courses</button>
        </Link>
        <h2 className="title">{course.title}</h2>
        <button
          className={`favoriteButton ${favorited ? "favorited" : ""}`}
          onClick={handleToggleFavorite}
          onKeyDown={(e) => handleKeyPress(e, selectedProvider)}
          tabIndex={0} // Ensure button is focusable
        >
          {favorited ? "★ Remove from Favorites" : "☆ Add to Favorites"}
        </button>
      </div>
      <p>{course.description}</p>
      <p>Start Date: {course.startDate}</p>
      <p>Related Certification: {course.relatedCertification}</p>
      <h3>Providers:</h3>
      <ul>
        {providers.map((provider) => (
          <li key={provider.providerId}>
            <label
              className={`providerLabel ${courseAdded ? "disabled" : ""}`}
              tabIndex={0} // Ensure label is focusable
              onKeyDown={(e) => handleKeyPress(e, provider)}
            >
              <input
                type="radio"
                name="provider"
                checked={selectedProvider === provider}
                onChange={() => handleProviderSelection(provider)}
                disabled={courseAdded}
              />
              {provider.providerName} - Price: {Math.ceil(provider.price)}{" "}
              {provider.currency}
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
      <button
        className="addToCartButton"
        onClick={handleAddToCart}
        disabled={!selectedProvider || courseAdded}
        onKeyDown={(e) => handleKeyPress(e, selectedProvider)}
        tabIndex={0} // Ensure button is focusable
        ref={addToCartButtonRef} // Attach ref to the button
      >
        {courseAdded ? "Already Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default Course;