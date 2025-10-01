import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // Add item logic
    },
    removeFromCart(state, action) {
      // Remove item logic
    },
    // ...other reducers
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;