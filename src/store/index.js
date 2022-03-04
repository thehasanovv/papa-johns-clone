import { configureStore } from "@reduxjs/toolkit";
import toggleTheme from "./themeSlice";
import productSlice from "./showProductSlice";
import showAuthSlice from "./showAuthSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    theme: toggleTheme,
    product: productSlice,
    auth: showAuthSlice,
    cart: cartSlice,
  },
});
