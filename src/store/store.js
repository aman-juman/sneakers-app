import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import cartReducer from "../features/cartSlice";
import productImageCurrentReducer from "../features/productImageCurrent";


export const store = configureStore(({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        imageIndex: productImageCurrentReducer
    },
}));
