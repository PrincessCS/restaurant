import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './Features/Cart/CartSlice';

const store = configureStore({
    reducer:{
        cart: cartReducer
    }
});

export default store;