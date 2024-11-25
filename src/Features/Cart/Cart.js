import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { removeFromCart, totalPrice } from "./CartSlice";
import { Link } from "react-router-dom";
import './Cart.css'

function Cart(){

    const cartItems =useSelector((state) => state.cart.items);
    const total = useSelector((state) => state.cart.totalPrice);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(totalPrice()); 
    }, [cartItems, dispatch]);




    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart({ id }));
        dispatch(totalPrice());

      }; 

   
    const handleCloseCart = () => {
        navigate("/order"); 
      };


  
      
    
      
     

    return(
        <>
        <section className="cart-header">
            <div>
                <h2>Your Order</h2>
                <p onClick={handleCloseCart}>X</p>
            </div>
            <hr />
        </section>

        <section className="cart-body">
            {cartItems.length === 0 ? (
                <div>
                    <p>We couldn't find any items in your cart.</p>
                    <Link to="/order"><button type="button" className="button">Start an Order</button></Link>
                </div>
                 
            ): (

                cartItems.map((item) =>(
                    <div key={item.id} className="cart-grid">
                        <img src={item.img} alt="some-img"/>
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price.toFixed(2)}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                        <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                    
                  </div>

                  
                ) 
            )

            )}
                
          
        </section>

        {cartItems.length > 0 && (
                    <div className="cart-total">
                        <h3>Total Price: ${total.toFixed(2)}</h3>
                        <Link to="/checkout"><button>Checkout</button></Link>
                    </div>
                )}
        </>
    )
}
export default Cart;