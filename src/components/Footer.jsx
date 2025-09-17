import React from "react";
import '../styles/Footer.css'; // Optional: Import CSS for styling

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} CA Rajesh Kandoi Associates. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
