import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { ChevronDown, ChevronUp } from "../icons";
import { addItem } from "../features/products/productSlice";
import { Link } from "react-router-dom";
import Home from "./Home";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log(useParams(), "useParams");

  const dispatch = useDispatch();

  const { products, amount } = useSelector((state) => state.product);

  console.log(products, "My products");

  const selectedProduct = products.find(
    (product) => product.id === parseInt(productId)
  ); // remember to convert it to a number

  //   if (!selectedProduct) {
  //     return <h1>No products found</h1>;
  //   }
  console.log(selectedProduct,"selected products")
  if (!selectedProduct) {
    // Check if the products array is empty
    // if (products.length === 0) {
    //   return <div className="center">No matching product found</div>; // or render a different component/message
    // }
    return <div className="center">No matching product found</div>;
  }

  const { id, title, price, description, image } = selectedProduct;
  console.log(title, "TITLE");
  return (
    <div className="product-details-container">
      <img src={image} alt={title} />
      <div>
        <h1 className="product-title">{title}</h1>
        <h3 className="product-description">{description}</h3>
        <p className="price">${price}</p>
        <button
          className="btn btn-add"
          onClick={() => dispatch(addItem({ id }))}
        >
          Add to cart
        </button>
        <Link to="/">Products</Link>
      </div>
    </div>
  );
};

export default ProductDetails;
