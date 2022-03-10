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
        existingItem.quantity = existingItem.quantity + newItem.quantity;
        existingItem.totalPrice =
          existingItem.totalPrice + newItem.price * newItem.quantity;
      }
    },

    removeItemFromCart(state, action) {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.cartTotalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },

    deleteItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.cartTotalQuantity = state.cartTotalQuantity - existingItem.quantity;
      state.items = state.items.filter((item) => item.id !== id);
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
