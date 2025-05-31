import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {},
    totalCount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      if (!state.items[product.id]) {
        state.items[product.id] = { ...product, quantity: 1 };
        state.totalCount += 1;
        state.totalPrice += product.price;
      }
    },
    increaseQuantity(state, action) {
      const product = state.items[action.payload];
      if (product) {
        product.quantity += 1;
        state.totalCount += 1;
        state.totalPrice += product.price;
      }
    },
    decreaseQuantity(state, action) {
      const product = state.items[action.payload];
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.totalCount -= 1;
        state.totalPrice -= product.price;
      }
    },
    deleteItem(state, action) {
      const product = state.items[action.payload];
      if (product) {
        state.totalCount -= product.quantity;
        state.totalPrice -= product.quantity * product.price;
        delete state.items[action.payload];
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
