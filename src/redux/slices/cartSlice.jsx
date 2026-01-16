import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existing = state.cartList.find(p => p.id === item.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.cartList.push({ ...item, quantity: 1 });
            }
        },

        removeFromCart: (state, action) => {
            state.cartList = state.cartList.filter(
                item => item.id !== action.payload
            );
        },

        increaseQty: (state, action) => {
            const item = state.cartList.find(p => p.id === action.payload);
            if (item) item.quantity += 1;
        },

        decreaseQty: (state, action) => {
            const item = state.cartList.find(p => p.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },

        clearCart: (state) => {
            state.cartList = [];
        }
    }
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
