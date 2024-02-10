import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import {removeFavorite} from "../features/favorites/favoritesSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  console.log(favorites, "favorites");

  const deleteFavorite = (id) => {
    dispatch(removeFavorite({ id }));
  };

  if(favorites.length === 0) {
    return (
        <p className="center">There are no items in your Favourites</p>
    )
  }
  return (
    <div className="center" style={{ margin: "1rem auto" }}>
      <ul>
        {favorites.map((favorite, index) => (
         
            <li key={index} className="favorites-item">
              <Card>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div className="product-image">
                    <img src={favorite.image} alt={favorite.title} />
                  </div>
                  <h2>{favorite.title}</h2>
                </div>

                <h4 style={{ margin: "1rem 0" }}>{favorite.description}</h4>
                <h3 className="price">${favorite.price}</h3>
                <button className="btn" onClick={() => deleteFavorite(favorite.id)}>
                  Delete
                </button>
              </Card>
            </li>
        
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
