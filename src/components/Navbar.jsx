import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/RKA-name-logo.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="CA Rajesh Kandoi Associates" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li className="search-label">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
