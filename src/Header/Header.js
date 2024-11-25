import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css"



function Header(){

    const cartQuantity = useSelector((state) => state.cart.items);
    return(
        <>

        <header>
            <p>We're open and available for take away & delivery. <Link to="/order">Order Now</Link></p>
        </header>

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
                    <li><Link to="/cart"><img src="./cart.svg" alt="cart" /><sup>{cartQuantity.length}</sup></Link></li>
                </ul>
            </div>
        </nav>
        
        
        </>
    );
}

export default Header;