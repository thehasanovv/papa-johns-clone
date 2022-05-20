import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowAuthModal: false,
  sign: null,
};

const authSlice = createSlice({
  name: "AuthModal",
  initialState,
  reducers: {
    openAuthModal(state, action) {
      state.isShowAuthModal = true;
      state.sign = action.payload;
    },
    closeAuthModal(state) {
      state.isShowAuthModal = false;
      state.sign = null;
    },
    setSign(state, action) {
      state.sign = action.payload;
    },
  },
});

export const { openAuthModal, closeAuthModal, setSign } = authSlice.actions;
export default authSlice.reducer;
