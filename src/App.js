import { useEffect } from "react";
import Products from "./components/Products";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotal,
  fetchProducts,
} from "./features/products/productSlice";
import "./index.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Home from "./components/Home";
import Modal from "./components/Modal";
import SharedComponent from "./components/SharedComponent";
import Error from "./components/Error";

function App() {
  const dispatch = useDispatch();
  const { isLoading, products } = useSelector((state) => state.product);
  const { isCartVisible } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [dispatch, products]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SharedComponent />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      {isCartVisible && <Modal />}
    </div>
  );
}

export default App;
