import React from 'react';
import {Link} from "react-router-dom"
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <img src='./404-page.jfif' alt='404-page-not-found'/>
      <h1>404</h1>
      <p>Oops! Page Not Found</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
}

export default Contact;