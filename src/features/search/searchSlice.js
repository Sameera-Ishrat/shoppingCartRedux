import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});
export default searchSlice.reducer;
export const { setSearchTerm} = searchSlice.actions;
