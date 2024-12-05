import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./CartSlice"; //Redux actions
import { Link } from "react-router-dom";
import './Cart.css';

function Cart() {
    // Accessing the cart items from the Redux store
    const cartItems = useSelector((state) => state.cart.items || []);
    
    // Calculate total price dynamically
    const total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

    const dispatch = useDispatch(); // Dispatching Redux actions
    const navigate = useNavigate(); // Navigation between routes

    // Function to handle removing an item from the cart
    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart({ id })); // Dispatching the action to remove an item
    };

    // Function to close the cart and navigate to the order page
    const handleCloseCart = () => {
        navigate("/order");
    };

    const handleCheckout = () => {
        localStorage.removeItem("cart");
       
    };

    return (
        <>
            {/* Cart Header Section */}
            <section className="cart-header">
                <div>
                    <h2>Your Order</h2>
                    {/* Close button to exit the cart */}
                    <p onClick={handleCloseCart}>X</p>
                </div>
                <hr />
            </section>

            {/* Cart Body Section */}
            <section className="cart-body">
                {/* Checking if cart is empty */}
                {cartItems.length === 0 ? (
                    <div>
                        <p>We couldn't find any items in your cart.</p>
                        {/* Link to order page if cart is empty*/}
                        <Link to="/order">
                            <button type="button" className="button">Start an Order</button>
                        </Link>
                    </div>
                ) : (
                    // Mapping through cart items to display each item's details
                    cartItems.map((item) => (
                        <div key={item.id} className="cart-grid">
                            <img src={item.img} alt="Item" />
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p> {/* Calculating total price for an item */}
                            {/* Button to remove an item from cart */}
                            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                        </div>
                    ))
                )}
            </section>

            {/* Checking if there is an item in the cart */}
            {cartItems.length > 0 && (
                <div className="cart-total">
                    {/* The total price of all the items in the cart */}
                    <h3>Total Price: ${total.toFixed(2)}</h3>
                    {/* Button to go to the checkout page */}
                    <Link to="/checkout">
                        <button onClick={handleCheckout}>Checkout</button>
                    </Link>
                </div>
            )}
        </>
    );
}

export default Cart;
