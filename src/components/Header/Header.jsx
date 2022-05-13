import { Link } from "react-router-dom";
import Logo from '../Logo/Logo';
import './Header.css';

function Header() {
  return (
    <nav className="Header">
      <Link to="/">
        <img className="Logo" src="./logo.svg" alt="Logo" />
      </Link>
      <Link to="#">
        <span className="Header-Nav">Setting</span>
      </Link>
    </nav>
  );
}

export default Header;
