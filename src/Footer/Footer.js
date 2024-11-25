import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

function Footer(){
    return(
        <>

<footer>
            <div className="footer-container">
                <div className="footer-left">
                    <img src="./logo.svg" alt="logo" />
                    <p>Takeaway & Delivery template <br/> for small - medium businesses.</p>
                </div>

                <div className="footer-right">
                    <div>
                        <p>Company</p>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/order">Order</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>   
                        
                    </div>

                    <div>
                        <p>Template</p>
                        <ul>
                            <li><a href="#">Style Guide</a></li>
                            <li><a href="#">Changelop</a></li>
                            <li><a href="#">License</a></li>
                            <li><a href="#">Webflow University</a></li>
                        </ul>   
                    </div>

                    <div>
                        <p>Flowbase</p>
                        <ul>
                            <li><a href="#">More Cloneables</a></li>
                        </ul>
                    </div>
                </div>

            </div>


            <div className="footer-bottom">
               <div className="footer-bottom-left">
                  <p>Built by <a href="#">Flowbase</a> . Powered by <a href="#">Webflow</a></p>
               </div>

               <div className="footer-bottom-right">
                <img src="./instagram.svg" alt="instagram" />
                <img src="./twitter.svg" alt="twitter" />
                <img src="./youtube.svg" alt="youtube" />
               </div>
            </div>
            
        </footer>

        </>
    );
}

export default Footer;