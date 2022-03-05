import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  isShowAuth: false,
  isShowProductModal: false,
  item: [],
};

const productSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openProductModal(state, action) {
      const item = action.payload;
      state.isShowProductModal = true;
      state.item.push({
        id: item.id,
        price: item.price,
        quantity: 1,
        name: item.name,
        image: item.image,
        totalPrice: item.price,
      });
      console.log(current(state));
    },
    closeProductModal(state) {
      state.isShowProductModal = false;
      state.item = [];
    },

    addQuantity(state) {
      const existingItem = [...state.item];
      existingItem[0].quantity++;
      existingItem[0].totalPrice =
        existingItem[0].totalPrice + existingItem[0].price;
      console.log(current(state));
    },

    removeQuantity(state) {
      const existingItem = [...state.item];
      if (existingItem[0].quantity === 1) {
        return;
      }
      existingItem[0].quantity--;
      existingItem[0].totalPrice =
        existingItem[0].totalPrice - existingItem[0].price;
    },
  },
});

export const {
  openProductModal,
  closeProductModal,
  addQuantity,
  removeQuantity,
} = productSlice.actions;

export default productSlice.reducer;
