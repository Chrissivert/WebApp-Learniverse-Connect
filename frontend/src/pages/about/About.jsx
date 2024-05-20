import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import '../../index.css';


// import { CartContext } from '../../pages/cart/CartContext.jsx';

export default function About() {


  // return (
  // <div className='about-container'>
  {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
  {/* <a href='/'>Home</a> */ }
  // <h1>About</h1>
  // </div>
  // );

  return (
    <div className="about-container">
      <h1>About us and our products</h1>
      <img src="/logo/learniverse_connect_logo.svg  " alt="Logo" className="logo"></img>
      <hr />
      <p>
        Welcome to Learniverse Connect, your premier destination for unlocking a world of knowledge and skills
        through our dynamic online course marketplace. At Learniverse, we believe that learning knows no
        bounds, and our platform is designed to empower individuals like you to embark on a journey of lifelong
        learning. As a marketplace, we bring together a diverse array of courses from passionate and expert
        third-party providers, ensuring that you have access to a comprehensive range of subjects and skills to
        fuel your personal and professional growth.
      </p>
      <p>
        Our commitment to quality is unwavering, and we meticulously curate our course offerings to guarantee
        a premium learning experience. Whether you're a budding entrepreneur looking to master the
        intricacies of business strategy or someone seeking to delve into the realms of creative arts, Learniverse
        Connect is your trusted companion on the path to success. Join our vibrant community of learners,
        connect with top-notch instructors, and explore a rich tapestry of knowledge that awaits you. At
        Learniverse, we envision a world where learning is not just a destination but a continuous, enriching
        journey, and we invite you to be a part of this transformative experience. Embrace the future of
        education with Learniverse Connect - where knowledge meets opportunity.
      </p>
      <p>
        At Learniverse Connect, we pride ourselves on offering courses that not only equip you with valuable
        knowledge and skills but also pave the way for tangible recognition through certifications. Upon
        successfully completing any course on our platform, you gain the opportunity to take the corresponding
        certification exam, validating your newfound expertise. We understand the importance of certifications
        in today's competitive landscape, and that's why we stand behind our courses with a robust money-back
        guarantee. If, for any reason, you don't pass the certification exam after diligently completing the
        course, we ensure a hassle-free refund, underscoring our commitment to your success and confidence
        in the quality of our educational offerings. Your journey with Learniverse is not just about learning; it's
        about achieving and celebrating your milestones with the assurance that your investment in education is
        backed by our unwavering support.
      </p>
      <p>
        While our courses predominantly take place in the virtual realm, we take pride in providing a unique
        blend of online learning and real-time engagement. Each course is facilitated by a dedicated physical
        instructor who not only guides you through the material but also ensures an interactive and dynamic
        learning experience. To further enrich your educational journey, we offer workshop sessions, adding a
        hands-on dimension to the online courses. While these courses are organized at specific dates to
        accommodate the workshop sessions, we understand the importance of flexibility. Rest assured, our
        commitment to your convenience is paramount, and the courses are strategically repeated several times
        a year, offering ample opportunities for you to participate and thrive in your learning pursuits.
      </p>
      <div className="cta">
        <a href='/courses'>
          <button className="searchBtn">Search For Courses</button>
        </a>
      </div>
    </div>
  );
}
