import React, { useState, useCallback, useEffect, useRef } from "react";
import { Link} from 'react-router-dom';
import useClickOutside from "./useClickOutside";

function HamburgNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [clicksOutside, setClicksOutside] = useState(0);
  const navbarRef = useRef(null);

  const handleClickOutside = event => {
    setClicksOutside(clicksOutside + 1);
  };

  useClickOutside(navbarRef, handleClickOutside, isOpen);

  useEffect(() => {
    if (clicksOutside > 0) {
      setIsOpen(false);
      setClicksOutside(0);
    }
  }, [clicksOutside]);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-container">
        <div className="navbar-menu" onClick={() => setIsOpen(!isOpen)}>
          <i className="fa fa-bars" />
        </div>
        <div className={`navbar-sidebar ${isOpen ? "show" : ""}`} onClick={() => setIsOpen(false)}>
          <ul className="navbar-list">
            <Link style={{textDecoration: 'none'}} className="link" to="/profile"><li className="navbar-item">Profile</li></Link>
            <li className="navbar-item">Orders</li>
            <li className="navbar-item">Settings</li>
            <Link style={{textDecoration: 'none'}} className="link" to="/cookReg"><li className="navbar-item">Become a Cook</li></Link>
            <li className="navbar-item">Contact</li>
            <Link style={{textDecoration: 'none'}} className="link" to="/"><li className="navbar-item">Logout</li></Link>
          </ul>
        </div>
        <div className="navbar-profile">
            <img id="navProfile" alt="profile" src="./images/man.png"/>
        </div>
        <div className="navbar-logo">
        <Link style={{textDecoration: 'none'}} className="link" to="/cookdashboard"><img id="navLogo" alt="FindaCook logo" src="./images/logo-new-edit-01.png"/></Link>
        </div>
        <form id="navSearch">
            <input type="search" placeholder="Search..." />
            <button type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default HamburgNavbar;
