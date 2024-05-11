import React, { useEffect, useState } from 'react';
import './Home.css';
import '../../index.css';
import { Link } from "react-router-dom";
import FrontImage from '/home/front_image.png';
import PostImage from '../../components/crudTest/post/image/PostImage';
import PostUser from '../../components/crudTest/post/user/PostUser';
import PostCourse from '../../components/crudTest/post/course/PostCourse';
import Coursecard from '../../components/coursecard/Coursecard';
import { sendApiGetRequest } from '../../services/api-requests';
// import { generateImageUrl, getImageFromServer } from '../../services/image-service';
import GetImage from '../../components/crudTest/post/image/GetImage';
import DataFetcher from '../../components/fetcher/Datafetcher';

export default function Home() {
  const [favoriteCourses, setFavoriteCourses] = useState([]);

  const fetchFavoriteCourses = async () => {
    try {
      const userId = 1; // Replace with the actual user ID
      const favoriteCourses = await DataFetcher.fetchFavoriteCourses(userId);
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
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
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

        {/* <PostImage/> 
        <PostCourse/> */}
        <div>
          {/* {images.map((image) => (
            <Link to={`/course/${image.id}`} key={image.id}>
              <Coursecard course={image}/>
            </Link>
          ))} */}

          <PostImage/>
          <GetImage imageId={6}/>
        </div>
    </div>
  );
}
