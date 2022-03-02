import { createSlice } from "@reduxjs/toolkit";

const initialState = { isShowAuth: false, isShowOrder: false };

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state) {
      state.isShowAuth = true;
    },
    closeModal(state) {
      state.isShowAuth = false;
    },
    openProductModal(state) {
      state.isShowOrder = true;
    },
    closeProductModal(state) {
      state.isShowOrder = false;
    },
  },
});

export const { openModal, closeModal, openProductModal, closeProductModal } =
  modalSlice.actions;
export default modalSlice.reducer;
