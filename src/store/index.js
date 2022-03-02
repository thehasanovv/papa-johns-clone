import { configureStore } from "@reduxjs/toolkit";
import toggleTheme from "./themeSlice";
import modalSlice from "./showModalSlice";

export const store = configureStore({
  reducer: {
    theme: toggleTheme,
    modal: modalSlice,
  },
});
