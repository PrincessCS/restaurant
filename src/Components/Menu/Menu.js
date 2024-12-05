import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, substractFromCart } from "../../Features/Cart/CartSlice";
import "./Menu.css"; 

// Card Component: displays individual menu items with their details
const Card = ({ id, img, name, price, cartValue, addToCart, subtractCart }) => {
    return (
        <div className="burger_grid"> {/* Card container */}
            <img src={img} alt={name} /> 
            <div className="burger_details"> 
                <div className="burger_price"> 
                    <h3>{name}</h3>
                    <p>${price}</p>
                </div>
                <div className="burger_info"> 
                    <p>
                        Lorem Ipsum is simply dummy text of the <br />
                        printing and typesetting industry.
                    </p>
                </div>
                <div className="cart">
                    {cartValue === 0 ? ( 
                        // If cart is empty, display cart quantity and add to cart button
                        <div>
                            <input value={cartValue} readOnly /> 
                            <button onClick={addToCart}>Add To Cart</button> 
                        </div>
                    ) : (
                        // If the item is already in the cart, display cart quantity and increment and decrement buttons
                        <div>
                            <input value={cartValue} readOnly /> 
                            <button onClick={addToCart}>+</button> {/* Increment button */}
                            <button onClick={subtractCart}>-</button> {/* Decrement button */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Menu Component: Displays a list of filtered menu items
const Menu = ({ selectedMenu, displayedProducts }) => {
    const dispatch = useDispatch(); // Get dispatch function to send actions

    // Accessing cart state from Redux store
    const cart = useSelector((state) => state.cart.items);

    // Getting the quantity of an item in the cart based on id
    const getCartValue = (id) => {
        const item = cart.find((cartItem) => cartItem.id === id);
        return item ? item.quantity : 0;
    };

    // Dispatch an action to add an item to the cart
    const handleAddToCart = (menu) => {
        dispatch(addToCart(menu));
    };

    // Dispatch an action to subtract an item from the cart
    const handleSubtractFromCart = (menu) => {
        dispatch(substractFromCart(menu));
    };

    // Array of menu items with their details
    const menus = [
        { id: 0, img: "/burger_dreams.png", name: "Burger Dreams", price: 9.2, category: "burger" },
        { id: 1, img: "/burger_waldo.png", name: "Burger Waldo", price: 10.0, category: "burger" },
        { id: 2, img: "/burger_call.png", name: "Burger Cali", price: 8.0, category: "burger" },
        { id: 3, img: "/burger_bacon_buddy.png", name: "Burger Bacon Buddy", price: 9.99, category: "burger" },
        { id: 4, img: "/burger_spicy.png", name: "Burger Spicy", price: 9.2, category: "burger" },
        { id: 5, img: "/burger_classic.png", name: "Burger Classic", price: 8.0, category: "burger" },
        { id: 6, img: "/fig-lime.png", name: "Drink Fig & Lime", price: 9.2, category: "drinks" },
        { id: 7, img: "/liquor.png", name: "Drink Liquor", price: 10.0, category: "drinks" },
        { id: 8, img: "/lime-drink.png", name: "Drink Lime", price: 3.0, category: "drinks" },
        { id: 9, img: "/cola.png", name: "Drink Cola", price: 3.0, category: "drinks" },
        { id: 10, img: "/burger_dreams.png", name: "Salad Caesar", price: 9.2, category: "slides" },
        { id: 11, img: "/burger_waldo.png", name: "Beans Slow Cooked", price: 10.0, category: "slides" },
        { id: 12, img: "/burger_call.png", name: "Fries Cheese", price: 8.0, category: "slides" },
        { id: 13, img: "/burger_bacon_buddy.png", name: "Fries Rustic", price: 9.99, category: "slides" },
    ];

    // Filter and slice menus based on selected category and the limit of the display
    const filteredMenus =
        selectedMenu === "menu"
            ? menus.slice(0, displayedProducts) // Showing first 'displayedProducts' from all menus
            : menus
                  .filter((menu) => menu.category === selectedMenu)
                  .slice(0, displayedProducts); // Show first 'displayedProducts' from the filtered category

    return (
        <div className="burger_container"> {/* Container for all menu items */}
            {filteredMenus.map((menu) => (
                <Card
                    key={menu.id} // Unique key for each menu item
                    img={menu.img}
                    name={menu.name}
                    price={menu.price.toFixed(2)} // price is rounded to 2 decimal places
                    cartValue={getCartValue(menu.id)} // current quantity in the cart
                    addToCart={() => handleAddToCart(menu)} // Increment
                    subtractCart={() => handleSubtractFromCart(menu)} // Decrement
                />
            ))}
        </div>
    );
};

export default Menu;
