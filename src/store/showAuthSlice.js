import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowAuthModal: false,
};

const authSlice = createSlice({
  name: "AuthModal",
  initialState,
  reducers: {
    openAuthModal(state) {
      state.isShowAuthModal = true;
    },
    closeAuthModal(state) {
      state.isShowAuthModal = false;
    },
  },
});

export const { openAuthModal, closeAuthModal } = authSlice.actions;
export default authSlice.reducer;
