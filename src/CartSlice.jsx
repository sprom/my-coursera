import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [] // each item: { id, name, price, image, quantity }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);
      if (!existing) {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const {
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  clearCart
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectTotalCount = (state) =>
  state.cart.items.reduce((s, it) => s + it.quantity, 0);
export const selectTotalAmount = (state) =>
  state.cart.items.reduce((s, it) => s + it.quantity * it.price, 0);

export default cartSlice.reducer;
