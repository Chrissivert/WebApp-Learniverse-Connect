import React, { useState, useEffect } from "react";
import "./Coursecard.css";
import { loadImage } from "../../functions/ImageLoader"; // Adjusted the import path

function Coursecard({ course }) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    loadImage(course.title)
      .then(url => setImageUrl(url))
      .catch(error => console.error("Error loading image:", error));
  }, [course.title]);

  const { cheapestPrice } = course;
  const roundedCheapestPrice = cheapestPrice ? cheapestPrice.toFixed(0) : null;

  return (
    <div className="course-card">
      <div className="image-section" style={{backgroundImage: `url(${imageUrl})`}}>
        {/* Background image */}
      </div>
      <div className="text-section">
        <h2>{course.title}</h2>
        <p>Credits: {course.credit}</p>
        {roundedCheapestPrice && <p className="cheapest-price">Cheapest Price: {roundedCheapestPrice} NOK</p>}
      </div>
    </div>
  );
}

export default Coursecard;
