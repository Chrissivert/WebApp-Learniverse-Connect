import React, { useState, useEffect } from "react";
import "./Coursecard.css";
import { loadImage } from "../../functions/ImageLoader"; 
import CourseCardSkeleton from "./CourseCardSkeleton"; 
import GetImage from "../crudTest/post/image/GetImage";

export default function Coursecard({ course }) {
  // const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true); 
  const { cheapestPrice, cheapestPriceCurrency } = course;
  const roundedCheapestPrice = cheapestPrice ? cheapestPrice.toFixed(0) : null;

  console.log(course.title + "course")

  
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
    setLoading(false);
  }, []);

  if (loading) {
    return <CourseCardSkeleton />;
  }
  return (
    <div className="course-card">
      <div className="image-section">
        <GetImage imageId={course.imageId}/>
      </div>
      <div className="info-section">
        <h2>{course.title}</h2>
        <p>Start Date: {course.startDate}</p>
        {roundedCheapestPrice && <p className="cheapest-price">Prices from: {roundedCheapestPrice} {course.currency}</p>}
        {/* <p>Credits: {course.credit}</p> */}
      </div>
    </div>
  )
}