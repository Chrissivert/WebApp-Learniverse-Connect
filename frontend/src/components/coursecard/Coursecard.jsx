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

  const { cheapestPrice, cheapestPriceCurrency } = course;
  const roundedCheapestPrice = cheapestPrice ? cheapestPrice.toFixed(0) : null;

  // Log roundedCheapestPrice and course
  useEffect(() => {
    console.log("roundedCheapestPrice:", roundedCheapestPrice);
    console.log("course:", course);
    console.log("imageUrl:", imageUrl);
    console.log("title:", course.title);
    console.log("credit:", course.credit);
    console.log("cheapestPrice:", cheapestPrice);
    console.log("cheapestPriceCurrency:", cheapestPriceCurrency);
  }, [roundedCheapestPrice, course, imageUrl]);

  return (
    <div className="course-card">
      <div className="image-section" style={{backgroundImage: `url(${imageUrl})`}}>
      </div>
      <div className="text-section">
        <h2>Title: {course.title}</h2>
        <p>Credits: {course.credit}</p>
        {roundedCheapestPrice && <p className="cheapest-price">Cheapest Price: {roundedCheapestPrice} {cheapestPriceCurrency}</p>}
      </div>
    </div>
  );
}

export default Coursecard;