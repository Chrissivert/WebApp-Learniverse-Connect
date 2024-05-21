import { Link } from 'react-router-dom';
import './Logo.css';
import LogoImage from '/logo/white_icon.png';

export default function Logo({ home_src = false }) {
  return (
    <div className='logo-container'>
      <Link to={home_src ? '/' : null} className='logo-link' aria-label="Home">
        <img src={LogoImage} alt='Logo' className='logo' id='image' />
      </Link>
    </div>
  );
}
