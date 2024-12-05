import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

function Header() {
  const [displayNav, setNavDisplay] = useState(false); // State for menu visibility on smaller screens
  const cartQuantity = useSelector((state) => state.cart.items);

  const toggleNav = () => {
    setNavDisplay((prev) => !prev); // Toggle menu visibility on smaller screens
  };

  return (
    <>
      <header>
        <p>
          We're open and available for take away & delivery.
          <Link to="/order">Order Now</Link>
        </p>
      </header>

      {/* Desktop Navigation */}
      <nav>
        <div className="logo">
          <img src="./logo.svg" alt="logo" />
        </div>
        <div className="nav-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/order">Order</Link></li>
            <li><Link to="/company">Company</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/signup">Sign Up/Login</Link></li>
            <li>
              <Link to="/cart">
                <img src="./cart.svg" className="cart-icon" alt="cart" />
                <sup>{cartQuantity.length}</sup>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="nav-mobile">
        <div className="logo">
          <img src="./logo.svg" alt="logo" />
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/cart">
                <img src="./cart.svg" className="cart-icon" alt="cart" />
                <sup>{cartQuantity.length}</sup>
              </Link>
            </li>
            <li>
            <img
                src="./menu-icon.svg"
                alt="menu-icon"
                onClick={toggleNav}
                className="menu-icon"
              />  
            </li>
          </ul>
        </div>
      </nav>

      {/* Collapsible Menu */}
      {displayNav && (
        <div className={`mobile-menu ${displayNav ? "show" : ""}`}>
             <img
                src="./close-icon.svg"
                alt="close-icon"
                onClick={toggleNav}
                className="close-icon"
              />
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/order">Order</Link></li>
            <li><Link to="/company">Company</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/signup">Sign Up/Login</Link></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
