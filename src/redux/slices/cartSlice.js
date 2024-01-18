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
            return state.filter( (product) => product.item.id !== action.payload);
        },
        increment: (state,action) => {
            //action will receive the id of the product whose count is to be incremented
            const newState = state.map(
                (product) => {
                    if(product.item.id === action.payload) {
                        return {...product, count: product.count+1}
                    }
                    else {
                        return product
                    }
                }
            )
            console.log(newState);
            return newState;
        },
        decrement: (state, action) => {
            const newState = state.map(
                (product) => {
                    if(product.item.id === action.payload) {
                        return {
                            ...product,
                            count: product.count - 1,
                        }
                    }
                    else {
                        return product
                    }
                }
            )
            return newState;
        }
    }
});

export const { addToCart, removeItem, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;