import React from "react";
import "./Coursecard.css";

function Coursecard({ course }) {
  // Destructure cheapestPrice from course object
  const { cheapestPrice } = course;
  // Round the cheapestPrice to zero decimals
  const roundedCheapestPrice = cheapestPrice ? cheapestPrice.toFixed(0) : null;
  return (
    <div className="course-card">
      <h2>{course.title}</h2>
      <p>Credits: {course.credit}</p>
      {roundedCheapestPrice && <p>Cheapest Price: {roundedCheapestPrice}</p>}
    </div>
  );
}

export default Coursecard;
