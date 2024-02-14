import { Link } from 'react-router-dom';
import './logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src="front-end\public\learnivserse_connect_icon.svg" alt="Logo" className="logo" />
      </Link>
    </div>
  );
};

export default Logo;
