import { createSlice } from "@reduxjs/toolkit";

// Try to load cart from localStorage, or start with an empty array
const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // action.payload should be a product object
      const item = state.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      // action.payload should be the product id
      const index = state.findIndex((i) => i.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decreaseQuantity: (state, action) => {
      // action.payload should be the product id
      const item = state.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item) {
        // Remove item if quantity is 1
        const index = state.findIndex((i) => i.id === action.payload);
        state.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: (state) => {
      state.length = 0;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    addCart: (state, action) => {
      // action.payload should be a product object
      const item = state.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart, addCart } = cartSlice.actions;
export default cartSlice.reducer;