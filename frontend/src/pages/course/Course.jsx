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
  const [favorited, setFavorited] = useState(false);
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
  }, [id, targetCurrency]);

  useEffect(() => {
    const alreadyInCart = cart.some(item => item.course.id === course?.id);
    setCourseAdded(alreadyInCart);
  }, [cart, course]);

  useEffect(() => {
    const userId = '4'; // Replace with actual logic to retrieve user ID
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
    const userId = '4'; // Replace with actual logic to retrieve user ID
    try {
      let favorites = localStorage.getItem("favorites");
      if (!favorites) favorites = "[]";
      let favoritesArray = JSON.parse(favorites);
      if (!favorited) {
        await DataFetcher.addFavoriteCourse(userId, id);
        favoritesArray.push(id);
        localStorage.setItem("favorites", JSON.stringify(favoritesArray));
        setFavorited(true);
        console.log(`User ${userId} added course ${id} to favorites.`);
      } else {
        await DataFetcher.removeFavoriteCourse(userId, id);
        favoritesArray = favoritesArray.filter(favId => favId !== id);
        localStorage.setItem("favorites", JSON.stringify(favoritesArray));
        setFavorited(false);
        console.log(`User ${userId} removed course ${id} from favorites.`);
      }
    } catch (error) {
      console.error('Failed to update favorites:', error);
    }
  };

  if (!course || !providers.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Course">
      <div className="head">
        <Link to={`/courses`}>
          <button className="goBackButton">← Courses</button>
        </Link>
        <h2 className="title">{course.title}</h2>
        {/* Button for favoriting with dynamic text */}
        <button className={`favoriteButton ${favorited ? 'favorited' : ''}`} onClick={handleToggleFavorite}>
          {favorited ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
      <p>{course.description}</p>
      <p>Start Date: {course.startDate}</p>
      <p>Related Certification: {course.relatedCertification}</p>
      <h3>Providers:</h3>
      <ul>
        {providers.map((provider) => (
          <li key={provider.providerId}>
            <label>
              <input
                type="radio"
                name="provider"
                checked={selectedProvider === provider}
                onChange={() => setSelectedProvider(provider)}
                disabled={courseAdded}
              />
              {provider.providerName} - Price: {Math.ceil(provider.price)} {provider.currency}
            </label>
          </li>
        ))}
      </ul>
      {showWarning && <div className="warning" role="alert">Please select a provider before adding to cart.</div>}
      {showSuccessMessage && <div className="success-message" role="alert">Course successfully added to cart!</div>}
      <button className="addToCartButton" onClick={handleAddToCart} disabled={!selectedProvider || courseAdded}>
        {courseAdded ? "Already Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default Course;
