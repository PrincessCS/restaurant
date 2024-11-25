import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Order.css";
import Menu from "../Menu/Menu";

function Order() {
    const [selectedMenu, setSelectedMenu] = useState("menu");



    return (
        <>
            <Header />

            <section className="order-hero">
                <h2>
                    Get your food <span>delivered</span>, <br /> or <span>pick-up</span> in store.
                </h2>
            </section>

            <section>
                <button onClick={() => setSelectedMenu("menu")} className="menu-btn">Full Menu</button>
                <button onClick={() => setSelectedMenu("burger")} className="menu-btn">Burgers</button>
                <button onClick={() => setSelectedMenu("slides")} className="menu-btn">Slides</button>
                <button onClick={() => setSelectedMenu("drinks")} className="menu-btn">Drinks</button>
            </section>

            <Menu selectedMenu={selectedMenu}/>

            <button className="menu-btn">Next</button>

            <Footer />
        </>
    );
}

export default Order;
