import React, { useState, useEffect } from "react";
import "./Coursecard.css";
import CourseCardSkeleton from "./CourseCardSkeleton";
import GetImage from "../crudTest/post/image/GetImage";

export default function Coursecard({ course, favorited, onFavoriteToggle }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  console.log(favorited + "dawdadwa")

  const handleToggleFavorite = () => {
    onFavoriteToggle(course.id); // Call the parent function to toggle favorite status
  };

  if (loading) {
    return <CourseCardSkeleton />;
  }

  return (
    <div className="course-card">
      <div className="favorite-icon" onClick={handleToggleFavorite}>
        {favorited ? "★" : "☆"} {/* Use the favorited prop to determine the star icon */}
      </div>
      <div className="image-section">
        <GetImage imageId={course.imageId} />
      </div>
      <div className="info-section">
        <h2>{course.title}</h2>
        <p>Start Date: {course.startDate}</p>
        {Math.ceil(course.cheapestPrice) === Math.ceil(course.mostExpensivePrice) ? (
          <p>
            Price: {Math.ceil(course.cheapestPrice)} {course.cheapestCurrency}
          </p>
        ) : (
          <p>
            Price Range: {Math.ceil(course.cheapestPrice)} {course.cheapestCurrency} - {Math.ceil(course.mostExpensivePrice)} {course.cheapestCurrency}
          </p>
        )}
      </div>
    </div>
  );
}
