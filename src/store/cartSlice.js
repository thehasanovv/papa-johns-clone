import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
  isShowCartModal: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      const price = state.cartTotalPrice + newItem.totalPrice;
      state.cartTotalPrice = +price.toFixed(2);
      state.cartTotalQuantity = state.cartTotalQuantity + newItem.quantity;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.totalPrice,
          name: newItem.name,
          image: newItem.image,
        });
      } else {
        const price =
          existingItem.totalPrice + newItem.price * newItem.quantity;
        existingItem.quantity = existingItem.quantity + newItem.quantity;
        existingItem.totalPrice = +price.toFixed(2);
      }
    },

    removeItemFromCart(state, action) {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      const price = state.cartTotalPrice - existingItem.price;
      state.cartTotalPrice = +price.toFixed(2);
      state.cartTotalQuantity--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        const price = existingItem.totalPrice - existingItem.price;
        existingItem.quantity--;
        existingItem.totalPrice = +price.toFixed(2);
      }
    },

    deleteItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.cartTotalQuantity = state.cartTotalQuantity - existingItem.quantity;
      state.items = state.items.filter((item) => item.id !== id);
      state.cartTotalPrice =
        state.cartTotalPrice - existingItem.price * existingItem.quantity;
    },

    openCartModal(state) {
      state.isShowCartModal = true;
    },

    closeCartModal(state) {
      state.isShowCartModal = false;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
  openCartModal,
  closeCartModal,
} = cartSlice.actions;

export default cartSlice.reducer;
