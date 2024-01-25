import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartVisible: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleCartVisibility: (state, action) => {
      state.isCartVisible = !state.isCartVisible;
    },
    onCloseModal : (state, action) => {
   state.isCartVisible = false;
    }
  },
});
export default modalSlice.reducer;
export const { toggleCartVisibility,onCloseModal } = modalSlice.actions;
