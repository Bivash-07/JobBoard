import React from "react";
import { Link } from "react-router-dom";
import "./NavBeforeLog.css";
import { HashLink } from 'react-router-hash-link';
import L1 from "../../assets/images/logo.png";




function scrollWithOffset(el) {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -100; // Adjust this to control the offset
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}


function NavBeforeLog({ isLoggedIn, onSignOut }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* <Link to="/">Joboard:)</Link> */}
        <HashLink to="#slider-container" scroll={scrollWithOffset} className="logo-link">
          <div className="logo-container">
            <img src={L1} alt="logo" className="logo-image" />
          </div>
        </HashLink>

      </div>
      <div className="navbar-links">
        <Link to="/" scroll={scrollWithOffset}>Home</Link>
        {/* <HashLink to="#slider-container" scroll={scrollWithOffset}>Home</HashLink> */}
        <HashLink to="#Categories" scroll={scrollWithOffset}>Offerings</HashLink>
        <HashLink to="#Testimonial" scroll={scrollWithOffset}>Testimonials</HashLink>
        <HashLink to="#Footer" scroll={scrollWithOffset}>Contact Us</HashLink>
      </div>
      <div className="navbar-auth">
        {!isLoggedIn ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <button onClick={onSignOut}>SignOut</button>
        )}
      </div>
    </nav>
  );
}

export default NavBeforeLog;
