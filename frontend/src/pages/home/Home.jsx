import React, { useEffect, useState } from 'react';
import './Home.css';
import '../../index.css';
import { Link } from "react-router-dom";
import FrontImage from '/home/front_image.png';
import PostImage from '../../components/crudTest/post/image/PostImage';
import PostUser from '../../components/crudTest/post/user/PostUser';
import PostCourse from '../../components/crudTest/post/course/PostCourse';
import Coursecard from '../../components/coursecard/Coursecard';
import DataFetcher from '../../components/fetcher/Datafetcher';
import GetImage from '../../components/crudTest/post/image/GetImage';


export default function Home() {
  const [favoriteCourses, setFavoriteCourses] = useState([]);

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
      <img src={FrontImage} alt='front-image' className='image'/>
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
        {favoriteCourses.map(course => (
          <Link to={`/courses/${course.id}`} key={course.id}>
            <Coursecard course={course}/>
          </Link>
        ))}
      </div>

      {/* Other content */}
      <div>
        <PostImage/>
        <GetImage imageId={6}/>
      </div>
    </div>
  );
}
