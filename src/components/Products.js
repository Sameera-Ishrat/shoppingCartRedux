import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { searchTerm } from "../features/search/searchSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  const { searchTerm } = useSelector((state) => state.search);

  console.log(products, "PRODUCTS FROM THE PAGE");

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-container">
      {/* {products.map((product) => {
        return <ProductItem key={product.id} {...product} />;
      })} */}
      {filteredProducts.length === 0 ? (
        <div className="search-message">Your Search did not match any products</div>
      ) : (
        filteredProducts.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))
      )}
    </div>
  );
};

export default Products;
