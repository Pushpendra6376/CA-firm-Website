import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/RKA-name-logo.png";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref to detect clicks outside the dropdown

  // Toggles the main hamburger menu
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false); // Close dropdown when opening/closing main menu
  };

  // Toggles the "More" dropdown
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Closes all menus, used when a link is clicked
  const closeAllMenus = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  // Effect to close the dropdown if user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeAllMenus}>
          <img src={logo} alt="CA Rajesh Kandoi Associates" />
        </Link>
      </div>

      {/* Hamburger menu icon */}
      <div className="menu-toggle" onClick={handleMenuToggle}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>

      {/* A new wrapper for nav links and the phone number */}
      <div className="navbar-content">
        <ul className={menuOpen ? "navbar-links active" : "navbar-links"}>
          <li><Link to="/" onClick={closeAllMenus}>Home</Link></li>
          <li><Link to="/services" onClick={closeAllMenus}>Services</Link></li>
          <li><Link to="/compliance-calendar" onClick={closeAllMenus}>Compliance Calendar</Link></li>
          <li><Link to="/careers" onClick={closeAllMenus}>Careers</Link></li>

          {/* This 'li' contains the "More" button and its dropdown menu */}
          <li className="dropdown-container" ref={dropdownRef}>
            <a href="#!" className="more-btn" onClick={handleDropdownToggle}>More</a>
            
            <ul className={dropdownOpen ? "dropdown-menu active" : "dropdown-menu"}>
              <li><Link to="/blogs" onClick={closeAllMenus}>Blogs</Link></li>
              <li><Link to="/about" onClick={closeAllMenus}>About</Link></li>
              <li><Link to="/contact" onClick={closeAllMenus}>Contact Us</Link></li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Phone number moved outside the list for separate styling */}
      <div className="navbar-phone">
        <a href="tel:+918690972052">+91 8690972052</a>
      </div>
    </nav>
  );
}

export default Navbar;