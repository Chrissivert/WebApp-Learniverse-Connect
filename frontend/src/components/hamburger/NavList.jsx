import Button from "../button/Button";
import './navList.css';

export default function NavList() {
  return (
    <ul className="navList">
      <li><Button text='Home' src='/' /></li>
      <li><Button text='About' src='/about' /></li>
      <li><Button text='Courses' src='/courses' /></li>
      <li><Button text='Test [404]' src='*' /></li>
      <li><Button text='Profile' src='/profile' /></li>
      <li><Button text='Login' src='/login' /></li>
      <li><Button text='Register' src='/register' /></li>
      <li><Button text='Admin' src='/admin' /></li>
    </ul>
  );
}