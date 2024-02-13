import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/products/productSlice";
import { Link } from "react-router-dom";
import { addToFavorites,removeFavorite,toggleClicked } from "../features/favorites/favoritesSlice";
import {FavoritesIcon} from "../icons";

// const ProductItem = ({ id, title, image, price, description,amount ,product}) => {
  const ProductItem = (product) => {  
const dispatch = useDispatch();
  const isClicked = useSelector((state) => state.favorites.isClicked[product.id] || false)

const handleFavorites = () => {
  dispatch(toggleClicked({id:product.id}));
  if (isClicked) {
    // If already in favorites, remove it
    dispatch(removeFavorite(product));
  } else {
    // If not in favorites, add it
    dispatch(addToFavorites(product));
  }

}

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
   
      <div className="product-description">
       <Link to={`/products/${product.id}`}><h3>{product.title}</h3></Link> 
        <h4>${product.price}</h4>
      </div>
    {/* <button onClick={handleFavorites} className={`fav-btn ${isClicked ? 'active' :''} `}> <FavoritesIcon /></button> */}
    <button className="fav-btn" onClick={handleFavorites}>
        <FavoritesIcon style={{ fill: isClicked ? 'red' : 'transparent' }} />
      </button>
    </div>
  );
};

export default ProductItem;
