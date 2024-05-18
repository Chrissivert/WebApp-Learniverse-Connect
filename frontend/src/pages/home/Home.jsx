import React, { useEffect, useState, useContext } from "react";
import "./Home.css";
import "../../index.css";
import { Link } from "react-router-dom";
import FrontImage from '/home/front_image.png';
import PostImage from '../../components/crudTest/post/image/PostImage';
import GetImage from '../../components/crudTest/post/image/GetImage';
import Coursecard from '../../components/coursecard/Coursecard';
import { AuthContext } from '../admin/AuthProvider';
import { getFavoriteCoursesFromAUser } from "../../services/favorite-course";
import FavoriteCourses from "../../components/crudTest/read/favoriteCourses/GetFavoriteCourses";
import GetFavoriteCourses from "../../components/crudTest/read/favoriteCourses/GetFavoriteCourses";

export default function Home() {
  const { user, isAuthenticated } = useContext(AuthContext); // Access user and isAuthenticated from AuthContext
  console.log("User:", user);
  console.log("IsAuthenticated:", isAuthenticated);

  return (
    <div className="home-container">
      <div className="landingpage-banner-container">
        <img src={FrontImage} alt="front-image" className="image" />
        <div className="toCourses">
          <h2>Learniverse Connect</h2>
          <Link to={`/courses`} className="link">
            <p className="courseButton">Find your course →</p>
          </Link>
        </div>
      </div>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        laboriosam quidem repellendus eum animi cupiditate quibusdam rerum
        explicabo nihil maiores qui cum fugiat voluptas harum sit cumque enim,
        libero autem. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Illo provident hic aperiam sed veniam. Tempore, voluptatem! Possimus
        quaerat adipisci ipsa assumenda. Magnam eius dolor eaque fugiat,
        doloremque est voluptatum hic.
      </h2>
    </div>
  );
}