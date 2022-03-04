import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0, isShowCartModal: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {},
    removeItemFromCart(state, action) {},
    openCartModal(state) {},
    closeCartModal(state) {},
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
