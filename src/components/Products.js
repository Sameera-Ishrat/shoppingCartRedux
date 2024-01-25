import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const Products = () => {
  const dispatch = useDispatch();
  const  {products}  = useSelector((state) => state.product);
  console.log(products,"PRODUCTS FROM THE PAGE")
  //const {id,title,image,rating,price,description,category} = products;
  return <div className="products-container">
        {products.map((product) => (
            <ProductItem  key={product.id} {...product}/>
        ))}
  </div>;
};

export default Products;
