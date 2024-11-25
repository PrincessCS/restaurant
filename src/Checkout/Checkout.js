import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { totalPrice } from "../Features/Cart/CartSlice";
import './Checkout.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Checkout(){
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();


  useEffect(() => {
      dispatch(totalPrice()); 
  }, [cartItems, dispatch]);

  const deliveryFee = 50;
  
    return(
        <>
          <Header />
          <h1>Checkout</h1>
          <section className="checkout-section">
             
             <div className="checkout-container">
              <div className="checkout">
                <h2>Payment & Delivery</h2>
                <div className="delivery-option">
                <input type="checkbox"/>Delivery
                <input type="checkbox"/>Pick Up
                </div>
               
                
               <div className="delivery-address">
                <h2>Delivery Address</h2>
                <form>
                  <label htmlFor="first-name">First Name
                  <input type="text" id="first-name" />
                  </label>

                  <label htmlFor="last-name">Last Name
                  <input type="text" id="last-name" />
                  </label>

                  <label htmlFor="address">Address
                  <input type="text" id="address" />
                  </label>

                  <label htmlFor="zip-code">Zip Code
                  <input type="text" id="zip-code" />
                  </label>   
                </form>
               </div>

               <div className="payment-method">
                <p>All transactions are secure and encrypted</p>
                <input type="checkbox"/>Paystack
                <input type="checkbox"/>flutterwave
               </div>
               
              </div>


              <div className="order-summary">
                <h2>Order Summary</h2>
                {cartItems.map((items)=>(
                  <div key={items.id}>
                    <img src={items.img} />
                    <p>{items.name}</p>
                    <p>Price: ${items.price.toFixed(2)}</p>
                    <p>Quantity: {items.quantity}</p>
                    <p>Total: ${(items.price * items.quantity).toFixed(2)}</p>

                  </div>
                ))}
                <p>Subtotal: {total}</p>
                <p>VAT (7.5%):</p>
                <p>Delivery Fee: ${deliveryFee.toFixed(2)}</p>
                <hr/>
                <h3>Total:${(total + deliveryFee).toFixed(2)}</h3>
              </div>

             </div>


          </section>
        
          <Footer />

          
        </>
    )
}

export default Checkout;
