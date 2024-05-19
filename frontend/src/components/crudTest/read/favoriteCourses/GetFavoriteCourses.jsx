import { useState, useEffect } from "react";
import { getFavoriteCoursesFromAUser } from "../../../../services/favorite-course";
import { Link } from "react-router-dom";
import Coursecard from "../../../coursecard/Coursecard";

export default function GetFavoriteCourses({ userId }) {
  const [favoriteCourses, setFavoriteCourses] = useState([]);

  async function fetchFavoriteCourses() {
    const response = await getFavoriteCoursesFromAUser(userId);
    setFavoriteCourses(response.data);
  }

  useEffect(() => {
    fetchFavoriteCourses();
  }, []);

  return (
    <div className="favorite-courses">
      <h2>Your Favorite Courses</h2>
      {favoriteCourses.map((favoriteCourse) => (
        <Link
          to={`/course/${favoriteCourse.course.id}`}
          key={favoriteCourse.course.id}
        >
          <Coursecard course={favoriteCourse.course} />
        </Link>
      ))}
    </div>
  );
}
