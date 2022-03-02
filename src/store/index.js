import { configureStore } from "@reduxjs/toolkit";
import toggleTheme from "./themeSlice";

export const store = configureStore({
  reducer: {
    theme: toggleTheme,
  },
});
