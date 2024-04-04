import React from 'react';
import './Home.css';
import FrontImage from '/home/front_image.png';

export default function Home() {

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
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laboriosam 
        quidem repellendus eum animi cupiditate quibusdam rerum explicabo nihil maiores
         qui cum fugiat voluptas harum sit cumque enim, libero autem. Lorem, ipsum dolor 
         sit amet consectetur adipisicing elit. Illo provident hic aperiam sed veniam. 
         Tempore, voluptatem! Possimus quaerat adipisci ipsa assumenda. Magnam eius 
         dolor eaque fugiat, doloremque est voluptatum hic.</h2>    
    </div>
  );
}