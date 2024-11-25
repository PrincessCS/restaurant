import React,{useState} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Faq.css';

function Faq(){

    const [faqContent, setFaqContent] = useState(null);

    const handleFaqToggle = (index) => {
        setFaqContent(faqContent === index ? null : index);
      };

    const faqItems = [
        {title: 'Do You Offer Any Vegan Options?', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'},
        {title: 'Do You Offer Any Gluten Free Options?', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'},
        {title: 'Can I Clone These Sections?', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'},
        {title: 'Why is Webflow So Amazing?', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'},
        {title: 'Do We Need To Write A Business Plan?', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}
    ];


    return(
        <>
        <Header />
        <section className="faq-hero">
            <h2>Frequently Asked<br/><span>Questions</span></h2>
        </section>

        <section className="faq-navigation">
        <div className="faq-nav-btns">
               <button type="button" className="faq-btn">Our Food</button>
               <button type="button" className="faq-btn">Our Delivery</button>
               <button type="button" className="faq-btn">Our Company</button>
            </div>
        </section>

        <section className="faq-section">
            <div className="faq-container">
                {faqItems.map((faqItem, index) =>(
                    <div key={index} className="faq-item">
                        <ul className="faq-title" onClick={()=> handleFaqToggle(index)}>
                            <li>{faqItem.title}</li>
                            <span>{faqContent === index ? '-' : '+'}</span>
                        </ul>
                        <hr/>
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