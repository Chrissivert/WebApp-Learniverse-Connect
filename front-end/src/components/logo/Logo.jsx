import { Link } from 'react-router-dom';
import './logo.css';
import logoImage from '../../../public/learniverse_connect_icon2.svg';

const Logo = () => {
  return (
    <Link to="/">
      <img src={logoImage} alt="Logo" className="logo" />
    </Link>
  );
};

export default Logo;
