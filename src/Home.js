import React, {useState} from "react";
import {Link} from "react-router-dom";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import Menu from "./Components/Menu/Menu.js";

function Home(){
    const [selectedMenu, setSelectedMenu] = useState("menu");
    return(
        <>
        <Header />
        {/*hero section*/}
        <section className="hero-section">
            <div className="container hero">
                <div className="container-text hero">
                    <h1 className="heading">Beautiful food & <br />takeaway, <span>delivered</span><br/> to your door.</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                     <Link to='/order'><button type="button" className="button">Place Order</button></Link>
                     <p><img src="./star.svg" alt="star" />Trustpilot</p>
                     <p>4.8 out of 5 <span>Based on 2000+ reviews</span></p>
                </div>
                <div className="container-img hero">
                    <img src="./hero-image.png" alt="hands-on-burger-and-chips" />
                </div>
            </div>
        </section>

         {/*about section*/}
        <section className="about-section">
            <div className="container about">
                <div className="container-text about">
                    <h2 className="heading">The home of fresh <br/>products</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                     <Link to="/order"><button type="button" className="button">Learn About Us</button></Link>
                </div>
                <div className="container-img">
                    <img src="./about-image.png" alt="woman-eating-burger-and-chips" />
                </div>
            </div>
        </section>

         {/*how it works section*/}
        <section className="how-it-works-section">
            <h2  className="heading">How it works.</h2>
            <div className="how-it-works-container">
                <div className="how-it-works">
                    <img src="./burger-image.svg" alt="burger-image" />
                    <p>Adapt your menu items</p>
                    <p>Easily adapt your menu using <br/>
                    the webflow CMS and allow <br/>
                    customers to browse your <br/> items.</p>
                </div>
                <div className="how-it-works">
                    <img src="./order.svg" alt="order-online" />
                    <p>Accept online orders & takeouts</p>
                    <p>Let your customers order and <br/>
                    pay via the powerful <br/>
                    ecommerce system, or simple <br/>
                    let them call your store.</p>

                </div>
                <div className="how-it-works">
                    <img src="./home-delivery.svg" alt="home-delivery" />
                    <p>Manage delivery or takeouts</p>
                    <p>Manage your own logistics and <br/>
                    take orders simply through the <br/>
                    ecommerce system.</p>
                </div>
            </div>
        </section>

         {/*Our menu section*/}
        <section className="our-menu-section">
            <h2 className="heading">Browse our menu</h2>
            <p>Use our menu to place an order online, or <span>phone </span>our store to <br/>
            place a pickup order. Fast and fresh food.</p>
            <div className="menu-nav-btns">
               <button type="button" onClick={() => setSelectedMenu("burger")} className="button">Burgers</button>
               <button type="button" onClick={() => setSelectedMenu("slides")} className="button">Sides</button>
               <button type="button" onClick={() => setSelectedMenu("drinks")} className="button">Drinks</button>
            </div>
            
             {/*Menu component display section*/}
            <section className="home-menu-section">
               <Menu selectedMenu={selectedMenu}/>
            </section>
            <Link to="/order"><button type="button" className="button">See Full Screen</button></Link>
        </section>

         {/*order online section*/}
        <section className="order-online-section">
            <div className="container order-online">
                <div className="container-img">
                    <img src="./order-phone.png" alt="screen-showing-burger-order" />
                </div>
                <div className="container-text order">
                    <h2 className="heading">Order online with <br/>
                     our simple <br/> checkout.</h2>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br/>
                     industry. Lorem Ipsum has been the industry's standard dummy text <br/>
                     ever since the 1500.</p>
                     <Link to="/faq"><button type="button" className="button">See Our FAQ</button></Link>
                </div>
            </div>
        </section>
        
         {/*contact section*/}
        <section className="contact-section">
            <div className="container contact">
            <div className="container-text contact">
                    <h2 className="heading">
                        Call our store and <br/>
                        takeaway when it <br/>suits you best.</h2>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br/>
                     industry. Lorem Ipsum has been the industry's standard dummy text <br/>
                     ever since the 1500.</p>
                     <Link to="/contact"><button type="button" className="button">Ph. +61 233 2333</button></Link>
                </div>
                <div className="container-img">
                    <img src="./restaurant-image.png" alt="restaurant-image" />
                </div>
            
            </div>
        </section>

         {/*support section*/}
        <section className="support-section">
            <div className="support-container">
               <div className="support-img">
                   <img src="./dining-image.png" alt="table-filled-with-burger-and-chips"/>
               </div>
               <div className="support-text">
                  <h3><span>Support </span>good food <br/> and local business.</h3>
                  <Link to="/order"><button type="button" className="button">Order Now</button></Link>
               </div>
            </div>
        </section>
        <Footer /> 
        </>
    );
}

export default Home;