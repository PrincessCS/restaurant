import { createSlice } from "@reduxjs/toolkit";

// function to save state to localStorage
const saveToLocalStorage = (state) => {
    localStorage.setItem("cart", JSON.stringify(state));
};

// Retrieving cart from localStorage
const getInitialCartState = () => {
    try {
        const savedCart = localStorage.getItem("cart");
        const parsedCart = savedCart ? JSON.parse(savedCart) : null;
        return parsedCart && parsedCart.items && parsedCart.totalPrice >= 0
            ? parsedCart
            : { items: [], totalPrice: 0 };
    } catch (error) {
        console.error("Error reading cart from localStorage:", error);
        return { items: [], totalPrice: 0 };
    }
};

const CartSlice = createSlice({
    name: "cart",
    initialState: getInitialCartState(),
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity += 1;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
            saveToLocalStorage(state);
        },

        substractFromCart: (state, action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity -= 1;
                if (itemInCart.quantity <= 0) {
                    state.items = state.items.filter((item) => item.id !== action.payload.id);
                }
            }
            saveToLocalStorage(state);
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
            saveToLocalStorage(state);
        },
    },
});

export const { addToCart, removeFromCart, substractFromCart } = CartSlice.actions;
export default CartSlice.reducer;
