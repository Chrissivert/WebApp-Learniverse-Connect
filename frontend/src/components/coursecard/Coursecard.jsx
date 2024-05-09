import React, { useState, useEffect } from "react";
import "./Coursecard.css";
import CourseCardSkeleton from "./CourseCardSkeleton"; 

function Coursecard({ course }) {
  const [loading, setLoading] = useState(true); // Initially set to true

  useEffect(() => {
    // Check if course data exists
    if (course) {
      setLoading(false); // Set loading to false when course data is received
    }
  }, [course]); // Re-run whenever course data changes

  // Show skeleton until course data is received
  if (loading) {
    return <CourseCardSkeleton />;
  }

  // If course data is received, render course details
  if (!course) {
    return null; // If no course data, return nothing
  }

  const { cheapestPrice, cheapestPriceCurrency } = course;
  const roundedCheapestPrice = cheapestPrice ? cheapestPrice.toFixed(0) : null;

  return (
    <div className="course-card">
      <div className="text-section">
        <h2>{course.title}</h2>
        <p>Credits: {course.credit}</p>
        {roundedCheapestPrice && <p className="cheapest-price">Cheapest Price: {roundedCheapestPrice} {cheapestPriceCurrency}</p>}
      </div>
    </div>
  );
}

export default Coursecard;
