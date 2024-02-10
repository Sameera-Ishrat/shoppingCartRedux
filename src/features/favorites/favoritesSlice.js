import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  isClicked: {},
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const id = action.payload;
      state.favorites.push(action.payload);
      state.isClicked[id] = false; // Initialize isClicked to false for each new product
    },
    removeFavorite: (state, action) => {
      const { id } = action.payload;
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== id
      );
      delete state.isClicked[id]; // Remove isClicked state for the removed product
    },
    toggleClicked: (state, action) => {
      const productId = action.payload.id; // Log the state for debugging
      state.isClicked[productId] = !state.isClicked[productId];
      console.log("Updated isClickedMap:", state.isClicked);
    },
  },
});
export default favoriteSlice.reducer;
export const { addToFavorites, removeFavorite, toggleClicked } =
  favoriteSlice.actions;
