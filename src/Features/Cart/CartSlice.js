import {createSlice} from '@reduxjs/toolkit';



const CartSlice = createSlice({
    name:'cart',
    initialState:{
        items: [],
        totalPrice: 0
    },
    
    reducers:{
        addToCart: (state,action) =>{
            const itemInCart = state.items.find(item => item.id === action.payload.id)
            if(itemInCart){
                itemInCart.quantity += 1
            }else{
                state.items.push({
                    ...action.payload, quantity: 1
                })
            }
        },

        substractFromCart: (state, action) => {
            const itemInCart = state.items.find(item => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity -= 1;
                if (itemInCart.quantity <= 0) {
                    state.items = state.items.filter(item => item.id !== action.payload.id);
                }
            }
        },
        

        removeFromCart: (state, action) =>{
            state.items = state.items.filter(item => item.id !== action.payload.id)
        },

        totalPrice: (state) =>{
            const total = state.items.reduce((sum, item) => sum + item.quantity * item.price, 0)
            state.totalPrice = total;


        }

    }

});


export const {addToCart, removeFromCart, substractFromCart, totalPrice} = CartSlice.actions;
export default CartSlice.reducer;