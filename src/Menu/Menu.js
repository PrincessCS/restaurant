import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { addToCart, substractFromCart } from '../Features/Cart/CartSlice';
import "./Menu.css"

const Card = ({id, img, name, price, cartValue, addToCart, substractCart}) =>{
    return(
        <div className="burger_grid">
            <img src={img} alt={name} />

            <div className="burger_details">
            <div className='burger_price'>
                <h2>{name}</h2> 
                <p>${price}</p>
            </div>

            <div className="burger_info">
                <p>Lorem Ipsum is simply dummy text of the <br /> 
                   printing and typesetting industry.</p>
            </div>

            <div className="cart">
                 {cartValue === 0 ? (
                    <div>
                         <input value={cartValue} readOnly  />
                         <button onClick={addToCart}>Add To Cart</button>
                    </div>
                   

                 ):(

                    <div> 
                        <input value={cartValue} readOnly />
                        <button onClick={addToCart}>+</button>
                        <button onClick={substractCart}>-</button>
                    </div>
              
                 )}
                 
            </div>

            </div>

            

        </div>
    )
}



const Menu = ({selectedMenu}) =>{

    const dispatch = useDispatch();
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : Array(12).fill(0);
    });

   
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    
    const handleAddToCart = (menu)=>{
        dispatch(addToCart(menu))
        const updatedCart = [...cart];
        updatedCart[menu.id] += 1;
        setCart(updatedCart);

    }

    const handleSubstractFromCart = (menu) => {
        dispatch(substractFromCart(menu));
        const updatedCart = [...cart];
        if (updatedCart[menu.id] > 0) {
            updatedCart[menu.id] -= 1;
            setCart(updatedCart);
           
        }
    };
    
   
        
    




    const menus = [
        {id: 0, img: "/burger_dreams.png", name: "Burger Dreams", price: 9.20, category: "burger"},
        {id: 1, img: "/burger_waldo.png", name: "Burger Waldo", price: 10.00, category: "burger"},
        {id: 2, img: "/burger_call.png", name: "Burger Cali", price: 8.00, category: "burger"},
        {id: 3, img: "/burger_bacon_buddy.png", name: "Burger Bacon Buddy", price: 9.99, category: "burger"},
        {id: 4, img: "/burger_spicy.png", name: "Burger Spicy", price: 9.20, category: "burger"},
        {id: 5, img: "/burger_classic.png", name: "Burger Classic", price: 8.00, category: "burger"},
        {id: 6, img: "/fig-lime.png", name: "Drink Fig & Lime", price: 9.20, category: "drinks"},
        {id: 7, img: "/liquor.png", name: "Drink Liquor", price: 10.00, category: "drinks"},
        {id: 8, img: "/lime-drink.png", name: "Drink Lime", price: 3.00, category: "drinks"},
        {id: 9, img: "/cola.png", name: "Drink Cola", price: 3.00, category: "drinks"},
        {id: 10, img: "/burger_dreams.png", name: "Salad Caesar", price: 9.20, category: "slides"},
        {id: 11, img: "/burger_waldo.png", name: "Beans Slow Cooked", price: 10.00, category: "slides"},
        {id: 12, img: "/burger_call.png", name: "Fries Cheese", price: 8.00, category: "slides"},
        {id: 13, img: "/burger_bacon_buddy.png", name: "Fries Rustic", price: 9.99, category: "slides"},


    ]

    const filteredMenus = selectedMenu === 'menu' ? menus : menus.filter(menu => menu.category === selectedMenu);

    
        return(
            <div className='burger_container'>
            {filteredMenus.map((menu) => (
                <Card
                    key={menu.id}
                    img={menu.img}
                    name={menu.name}
                    price={menu.price.toFixed(2)}
                    cartValue={cart[menu.id]}
                    addToCart={() => handleAddToCart(menu)}
                    substractCart={()=> handleSubstractFromCart(menu)}
                    
                />
            ))}
        </div>
        )
    }



export default Menu;


