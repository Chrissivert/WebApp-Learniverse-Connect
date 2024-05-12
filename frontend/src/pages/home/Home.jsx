import React, { useEffect, useState, useContext } from 'react';
import './Home.css';
import '../../index.css';
import { Link } from "react-router-dom";
import FrontImage from '/home/front_image.png';
import PostImage from '../../components/crudTest/post/image/PostImage';
import GetImage from '../../components/crudTest/post/image/GetImage';
import Coursecard from '../../components/coursecard/Coursecard';
import DataFetcher from '../../components/fetcher/Datafetcher';
import { AuthContext } from '../admin/AuthProvider';


export default function Home() {
  const [favoriteCourses, setFavoriteCourses] = useState([]);

  const { user, isAuthenticated } = useContext(AuthContext); // Access user and isAuthenticated from AuthContext

  console.log("User:", user);
  console.log("IsAuthenticated:", isAuthenticated);


  const fetchFavoriteCourses = async () => {
    try {
      const userId = 4; // Replace with the actual user ID
      const favoriteCourses = await DataFetcher.fetchFavoriteCourses(userId);
      console.log("Favorite Courses:", favoriteCourses); // <-- Added console log here
      setFavoriteCourses(favoriteCourses);
    } catch (error) {
      console.error('Error fetching favorite courses:', error);
    }
  };

  useEffect(() => {
    fetchFavoriteCourses();
  }, []);

  return (
    <div className='home-container'>
      <img src={FrontImage} alt='front-image' className='image' />
      <div className='toCourses'>
        <h2>Learniverse Connect</h2>
        <Link to={`/courses`} className='link'>
          <p className="courseButton">Find your course  →</p>
        </Link>
      </div>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laboriosam
        quidem repellendus eum animi cupiditate quibusdam rerum explicabo nihil maiores
        qui cum fugiat voluptas harum sit cumque enim, libero autem. Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Illo provident hic aperiam sed veniam.
        Tempore, voluptatem! Possimus quaerat adipisci ipsa assumenda. Magnam eius
        dolor eaque fugiat, doloremque est voluptatum hic.</h2>

      {/* Displaying favorite courses */}
      <div className="favorite-courses">
        <h2>Your Favorite Courses</h2>
        {favoriteCourses.map(favoriteCourse => (
          <Link to={`/course/${favoriteCourse.course.id}`} key={favoriteCourse.course.id}>
            <Coursecard course={favoriteCourse.course} />
          </Link>
        ))}
      </div>
      
      <PostImage />
      <GetImage imageId={6} width={300} />
    </div>
  );
}
