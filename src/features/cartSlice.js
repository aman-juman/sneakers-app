import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    total: 0,
    totalQuantity: 0,
    products: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductCart: (state, action) =>{
            const {title, price, discount, quantity} = action.payload;
            const candidate = !!(state.products.find(i=> i.title === title));
            if(candidate){
                state.totalQuantity = state.totalQuantity + quantity;
                state.total = state.total + (price * discount/100 * quantity);
                state.products[0].quantity = state.products[0].quantity + quantity;
            } else{
                const item = {
                    title: title,
                    price: (price * discount)/100,
                    quantity: quantity,
                };
                state.products.push(item);
                state.totalQuantity = quantity;
                state.total = quantity * item.price;
            }
        },
        removeProductCart: (state, action) =>{
            const {title, price, discount, quantity} = action.payload;
            const candidate = !!(state.products.find(i=> i.title === title));
            if(candidate){
                state.totalQuantity = state.totalQuantity - quantity;
                state.total = state.total - (price * discount)/100;
                state.products = state.products.filter(i => i.title !== title)
            }
        },
    }
});

export const {addProductCart, removeProductCart} = cartSlice.actions;
export default cartSlice.reducer;

