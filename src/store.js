import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import modalReducer from "./features/modal/modalSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    modal : modalReducer
  },
});
