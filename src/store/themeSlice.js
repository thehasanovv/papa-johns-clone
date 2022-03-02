import { createSlice } from "@reduxjs/toolkit";

const initialState = { isDarkMode: true };

const toggleTheme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggle } = toggleTheme.actions;
export default toggleTheme.reducer;
