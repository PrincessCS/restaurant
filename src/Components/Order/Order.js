import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Order.css";
import Menu from "../Menu/Menu";

function Order() {
    const [selectedMenu, setSelectedMenu] = useState("menu");
    const [displayedProducts, setDisplayedProducts] = useState(4); // Number of products displayed initially
    const [showNext, setShowNext] = useState(true);
    const [showPrevious, setShowPrevious] = useState(false); // state to manage the display of previous button

    const totalProducts = 10; // The total number of products available

    const handleNext = () => {
        setDisplayedProducts(prevDisplayedProducts => {
            const newDisplayedProducts = prevDisplayedProducts + 4;
            setShowPrevious(true); // showing the previous button once the next button is clicked

            // Hiding next button when all products are displayed
            if (newDisplayedProducts >= totalProducts) {
                setShowNext(false);
            }
            return newDisplayedProducts;
        });
    };

    const handlePrevious = () => {
        setDisplayedProducts(prevDisplayedProducts => {
            const newDisplayedProducts = prevDisplayedProducts - 4;
            if (newDisplayedProducts <= 4) {
                setShowPrevious(false); 
            }
            setShowNext(true);
            return newDisplayedProducts;
        });
    };

    return (
        <>
            <Header />
            <section className="order-hero">
                <h2>
                    Get your food <span>delivered</span>, <br /> or <span>pick-up</span> in store.
                </h2>
            </section>

            <section className="order-section-btns">
                <button onClick={() => setSelectedMenu("menu")} className="menu-btn">Full Menu</button>
                <button onClick={() => setSelectedMenu("burger")} className="menu-btn">Burgers</button>
                <button onClick={() => setSelectedMenu("slides")} className="menu-btn">Sides</button>
                <button onClick={() => setSelectedMenu("drinks")} className="menu-btn">Drinks</button>
            </section>

            <section className="order-menu-section"> 
               <Menu selectedMenu={selectedMenu} displayedProducts={displayedProducts} />
            </section>
            {selectedMenu === "menu" && ( // Show buttons only if selectedMenu is 'menu'
                <div className="pagination-buttons">
                    {showPrevious && (
                        <button className="menu-btn" onClick={handlePrevious}>Previous</button>
                    )}
                    {showNext && (
                        <button className="menu-btn" onClick={handleNext}>Next</button>
                    )}
                </div>
            )}
            <Footer />
        </>
    );
}

export default Order;
