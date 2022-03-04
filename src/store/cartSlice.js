import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0, isShowCartModal: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {},
    removeItemFromCart(state, action) {},
    deleteItemFromCart(state, action) {},
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
