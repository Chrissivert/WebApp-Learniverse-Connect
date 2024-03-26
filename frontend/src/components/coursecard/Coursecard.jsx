import React from "react";
import "./Coursecard.css";

function Coursecard({ course, cheapestPrice }) {
  // Round the cheapestPrice to zero decimals
  const roundedCheapestPrice = cheapestPrice.toFixed(0);

  return (
    <div className="course-card">
      <h2>{course.title}</h2>
      <p>Credits: {course.credit}</p>
      {roundedCheapestPrice && <p>Cheapest Price: {roundedCheapestPrice}</p>}
    </div>
  );
}

export default Coursecard;
