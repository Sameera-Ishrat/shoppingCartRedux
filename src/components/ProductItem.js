import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/products/productSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ id, title, image, price, description,amount }) => {
  const dispatch = useDispatch();
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
   
      <div className="product-description">
       <Link to={`/products/${id}`}><h3>{title}</h3></Link> 
        <h4>${price}</h4>
        {/* <button 
        onClick={() => dispatch((addItem({id})))}
        className="btn btn-product">Add to cart</button> */}
      </div>
    
    
    </div>
  );
};

export default ProductItem;
