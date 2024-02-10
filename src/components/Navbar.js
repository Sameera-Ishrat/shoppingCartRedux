import React from "react";
import { CartIcon, FavoritesIcon } from "../icons";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartVisibility } from "../features/modal/modalSlice";
import { Link } from "react-router-dom";
import {setSearchTerm} from "../features/search/searchSlice";
//import debounce from 'lodash.debounce';

const Navbar = () => {
  const dispatch = useDispatch();
const {searchTerm} = useSelector((state) => state.search);


  const { amount } = useSelector((state) => state.product);
  const { isCartVisible } = useSelector((state) => state.modal);

  console.log("Amount:", amount); // Ensure that amount is a number
  

  // create debounce

  const debounce = (cb,d) => {
    let timer;
    return(...arg) => {
      if(timer) clearTimeout(timer);
      timer = setTimeout(() =>{
cb(...arg);
      },d)
    }
  }


  const handleSearchInputChange = debounce((value) => {
    console.log("Input Value:", value);
    dispatch(setSearchTerm(value));
  }, 50);
  
  return (
    <nav className="navbar">
      {/* <a href="/" > <h1 className="logo">Redux Store</h1></a> */}
      <Link to="/" className="logo">
        <h1>Redux Store</h1>
      </Link>
      <input
        type="search"
        className="search-input"
        placeholder="Search here..."
        value={searchTerm}
        onChange={(e) => handleSearchInputChange(e.target.value)}
      />
     <Link to="/favorites"><FavoritesIcon /></Link> 
      <div className="cart" onClick={() => dispatch(toggleCartVisibility())}>
        <CartIcon />
       {amount > 0 && <div className="badge">{amount}</div> } 
      </div>
    </nav>
  );
};

export default Navbar;
