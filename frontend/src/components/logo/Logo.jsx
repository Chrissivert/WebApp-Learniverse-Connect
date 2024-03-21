import './Logo.css';
import LogoImage from '/logo/learniverse_connect_logo.svg';

export default function Logo({home_src = false}) {
  return (
    <div className='logo-container'>
      <a href={home_src ? '/' : null}>
        <img src={LogoImage} alt='Logo' className='logo' id='image'/>
      </a>
    </div>
  );
}