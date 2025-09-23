import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/RKA-name-logo.png";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="CA Rajesh Kandoi Associates" />
        </Link>
      </div>

      <div className="menu-toggle" onClick={handleMenuToggle}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>

      <ul className={menuOpen ? "navbar-links active" : "navbar-links"}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
        <li><Link to="/compliance-calendar" onClick={closeMenu}>Compliance Calendar</Link></li>
        <li><Link to="/careers" onClick={closeMenu}>Careers</Link></li>
        <li><Link to="/blogs" onClick={closeMenu}>Blogs</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
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