import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import modalReducer from "./features/modal/modalSlice";
import searchReducer from "./features/search/searchSlice";
import favoriteReducer from "./features/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    modal: modalReducer,
    search: searchReducer,
    favorites: favoriteReducer,
  },
});
