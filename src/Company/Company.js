import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Company.css';

function Company(){
    return(
        <>
        <Header />
        <section className="company-hero">
            <h2>Our company focuses <br/>on <span>food and people.</span></h2>

        </section>

        <section>
            <div className="container">
                <div className="container-text">
                    <h2 className="heading">The home of fresh <br />products</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                     Lorem Ipsum has been the industry's standard dummy text ever since the <br/>
                      1500.</p>
                      <Link to="/order"><button type="button" className="button">Learn About Us</button></Link>
                </div>

                
                <div className="container-img">
                    <img src="./company-image.png" alt="man-making-burger" />
                </div>
            </div>
        </section>

        <section className="company-dining-section">
            <div className="company-dining-background">
            <img src="./company-dining-image.png" alt="table-filled-with-burger-and-chips" />

            <div className="company-dining-overlay">
                <div>
                    <p>62</p>
                    <p>Fiesty Menu Items</p>
                </div>
                <div>
                    <p>139</p>
                    <p>Fiesty Menu Items</p>
                </div>
                <div>
                    <p>34</p>
                    <p>Fiesty Menu Items</p>
                </div>
                <div>
                    <p>57</p>
                    <p>Fiesty Menu Items</p>
                </div>

            </div>
            </div>
        </section>
        <Footer />
        
        </>
    );
}

export default Company;