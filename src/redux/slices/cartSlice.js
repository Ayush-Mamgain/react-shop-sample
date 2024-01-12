import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    
    initialState: [],

    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
        removeItem: (state, action) => {
            // state = state.filter( (item) => item.id !== action.payload); --> it won't work because the state object would just be reassigned to another location and won't trigger UI update
            return state.filter( (item) => item.id !== action.payload);
        }
    }
});

export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;