import React, { useState, useEffect } from "react";
import "./Coursecard.css";
import { loadImage } from "../../functions/ImageLoader"; 
import CourseCardSkeleton from "./CourseCardSkeleton"; 

function Coursecard({ course }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true); 
  
  // useEffect(() => {
  //   loadImage(course.title)
  //     .then(url => {
  //       setImageUrl(url);
  //       setLoading(false); // Set loading to false after image is loaded
  //     })
  //     .catch(error => {
  //       console.error("Error loading image:", error);
  //       setLoading(false); // Set loading to false even if there's an error
  //     });
  // }, [course]);

  // Set loading to true initially and display skeleton
  useEffect(() => {
    setLoading(true);
  }, []);

  if (!loading) {
    return <CourseCardSkeleton />;
  }

  const { cheapestPrice, cheapestPriceCurrency } = course;
  const roundedCheapestPrice = cheapestPrice ? cheapestPrice.toFixed(0) : null;

  return (
    <div className="course-card">
      <div className="image-section" style={{backgroundImage: `url(${imageUrl})`}}>
      </div>
      <div className="text-section">
        <h2> {course.title}</h2>
        <p>Credits: {course.credit}</p>
        {roundedCheapestPrice && <p className="cheapest-price">Cheapest Price: {roundedCheapestPrice} {cheapestPriceCurrency}</p>}
      </div>
    </div>
  );
}

export default Coursecard;
