import React from 'react';
import { useNavigate } from 'react-router-dom';
import './aboutUsPage.css';

function AboutUsPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/search'); // Redirecting users to the search page
  };

  return (
    <div className="about-container"> {/* Add className="about-container" here */}
      <h1>About Learniverse</h1>
      <img src="/front-end/public/learniverse_connect_icon2.svg" alt="Logo" className="logo" />
      <hr />
      <p>Learniverse Connect is an online course marketplace dedicated to facilitating lifelong 
        learning. We provide a diverse selection of courses from third-party providers, ensuring 
        access to a broad range of subjects and skills for personal and professional development.
      </p>
      <p>Our platform is committed to quality, with curated course offerings designed to deliver 
        a premium learning experience. Whether you're interested in business strategy or creative 
        arts, Learniverse Connect offers a reliable resource for advancing your knowledge and expertise.
      </p>
      <p>Join our community of learners and explore the opportunities for growth and enrichment 
        available through our platform. Discover the convenience of online learning with Learniverse 
        Connect.
      </p>
      <div className="cta">
        <button className="btn-primary" onClick={handleButtonClick}>Search For Courses</button>
      </div>
    </div>
  );
}

export default AboutUsPage;
