import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Checkout.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Checkout(){
  //Getting cart items from the redux store
  const cartItems = useSelector((state) => state.cart.items);
  // Calculating price of total items in cart
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = 5;  // Fixed delivery fee
  const dispatch = useDispatch();

  useEffect(() => {
  }, [cartItems, dispatch]);

  return (
    <>
      <Header />
      <h1>Checkout</h1>
      <section className="checkout-section">
        <div className="checkout-container">
          <div className="order-summary">
            <h2>Order Summary</h2>
            {cartItems.map((item) => (
              <div key={item.id}>
                <img src={item.img} />
                <p>{item.name}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <p>Subtotal: ${total.toFixed(2)}</p>
            <p>VAT (7.5%): ${(total * 0.075).toFixed(2)}</p>
            <p>Delivery Fee: ${deliveryFee.toFixed(2)}</p>
            <hr/>
            <h3>Total: ${(total + deliveryFee).toFixed(2)}</h3>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Checkout;
