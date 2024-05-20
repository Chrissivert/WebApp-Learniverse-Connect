import { useState, useEffect } from "react";
import { getFavoriteCoursesFromAUser } from "../../../../services/favorite-course";
import { Link } from "react-router-dom";
import Coursecard from "../../../coursecard/Coursecard";
import useCoursesPageLogic from "../../../../pages/courses/coursesPageLogic";

export default function GetFavoriteCourses({ userId }) {
  const { courses } = useCoursesPageLogic();
  const [favoriteCourses, setFavoriteCourses] = useState([]);

  async function fetchFavoriteCourses() {
    const response = await getFavoriteCoursesFromAUser(userId);
    setFavoriteCourses(response.data);
  }

  useEffect(() => {
    fetchFavoriteCourses();
  }, []);

  useEffect(() => {
    console.log("Courses:", courses);
  }, [courses]);

  useEffect(() => {
    console.log("Favorite Courses:", favoriteCourses);
  }, [favoriteCourses]);

  return (
    <div className="favorite-courses">
      <h2>Your Favorite Courses</h2>
      {favoriteCourses.map((favoriteCourse) => {
        // Find the corresponding course from 'courses' using its id
        const course = courses.find(course => course.id === favoriteCourse.course.id);
        return (
          <Link
            to={`/course/${favoriteCourse.course.id}`}
            key={favoriteCourse.course.id}
          >
            <Coursecard course={course} />
          </Link>
        );
      })}
    </div>
  );
}
