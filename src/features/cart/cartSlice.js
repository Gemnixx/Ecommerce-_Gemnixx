import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action) => {
  const item = state.cartItems.find(
    (p) => p.id === action.payload
  );

  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    state.cartItems = state.cartItems.filter(
      (item) => item.id !== action.payload
    );
  }
},
    clearCart: (state) => {
    state.cartItems = [];
  },
  },
});

export const { addToCart, removeFromCart,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
