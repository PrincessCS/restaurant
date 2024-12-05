import React, { useState } from "react"; 
import Header from "../Header/Header"; 
import Footer from "../Footer/Footer";
import './Faq.css';

function Faq() {
    // State to manage faq item
    const [faqContent, setFaqContent] = useState(null);

    // Function to toggle the faq item based on index
    const handleFaqToggle = (index) => {
        setFaqContent(faqContent === index ? null : index); // Toggling between showing and hiding faq content
    };

    // Array of faq items with their titles and content
    const faqItems = [
        { title: 'Do You Offer Any Vegan Options?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' },
        { title: 'Do You Offer Any Gluten Free Options?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' },
        { title: 'Can I Clone These Sections?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' },
        { title: 'Why is Webflow So Amazing?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' },
        { title: 'Do We Need To Write A Business Plan?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' }
    ];

    return (
        <>
            <Header /> 
            {/* faq hero section */}
            <section className="faq-hero">
                <h2>Frequently Asked<br /><span>Questions</span></h2>
            </section>
            <section className="faq-navigation">
                <div className="faq-nav-btns">
                    <button type="button" className="faq-btn">Our Food</button> 
                    <button type="button" className="faq-btn">Our Delivery</button> 
                    <button type="button" className="faq-btn">Our Company</button> 
                </div>
            </section>
            
            {/* faq section */}
            <section className="faq-section">
                <div className="faq-container">
                    {faqItems.map((faqItem, index) => ( // Mapping through the faq items to display
                        <div key={index} className="faq-item">
                            <ul className="faq-title" onClick={() => handleFaqToggle(index)}>
                                <li className="title">{faqItem.title}</li> 
                                {/* Toggle icon depending on the state */}
                                <span>
                                    {faqContent === index ? (
                                        <img src="./remove-circle.svg" alt="close icon" /> 
                                    ) : (
                                        <img src="./add-circle.svg" alt="open icon" /> 
                                    )}
                                </span>
                            </ul>
                            <hr />
                            {/* Conditionally rendering faq content */}
                            {faqContent === index && (
                                <div className="faq-content">
                                    <p>{faqItem.content}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Faq;
