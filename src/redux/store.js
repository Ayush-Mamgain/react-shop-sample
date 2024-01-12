import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/slices/cartSlice";

const store = configureStore({
    reducer: {
        //place the slices
        cart: cartReducer,
    }
});

export default store;