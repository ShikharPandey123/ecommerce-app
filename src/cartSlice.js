import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState:{
    items:[],
    totalPrice:0
  },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    increaseQty: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.quantity++;
    },
    decreaseQty: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;