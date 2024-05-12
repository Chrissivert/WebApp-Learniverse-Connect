import React from "react";
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
      <div className="image-section">
        <GetImage imageId={course.id}/>
      </div>
      <div className="info-section">
        <h2>{course.title}</h2>
        <p>Start Date: {course.startDate}</p>
      </div>
    </div>
  )
}