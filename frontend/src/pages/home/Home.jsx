import React from 'react';
import "./Home.css";
import frontImage from '/home/front_image.png'
import findACourse from '/icons/home/find-a-course.png'
import createAnAccount from '/icons/home/create-an-account.png'
import readMoreAbout from '/icons/home/read-more-about.png'
import Button from '../../components/button/Button';
import PostImage from '../../components/crudTest/post/image/PostImage';


export default function Home() {
  return (
    <main>
      <section className="home-container">
        <div className='front-image'>
          <img className='image' src={frontImage} alt="Front Image" />
        </div>
        <section className='home-content'>
          <h1>Welcome to Learniverse Connect</h1>
          <p>Start Learning Today!</p>
          <div className='button-row'>
            <Button src={'/courses'} text={'Find a course →'} className={'home-row-button'} linkName={'button-link'} img={findACourse} imageName={'button-image'} alt={'Find a course'}/>
            <Button src={'/register'} text={'Create your account →'} className={'home-row-button'} linkName={'button-link'} img={createAnAccount} imageName={'button-image'} alt={'Create an account'}/>
            <Button src={'/about'} text={'Read more about us →'} className={'home-row-button'} linkName={'button-link'} img={readMoreAbout} imageName={'button-image'} alt={'Read more about us'}/>
            <PostImage></PostImage>
          </div>
        </section>
      </section>
    </main>
  );
}
