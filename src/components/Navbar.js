import React from "react";
import { CartIcon } from "../icons";
import { useSelector,useDispatch } from "react-redux";
import {toggleCartVisibility} from "../features/modal/modalSlice";
import { Link } from "react-router-dom";


const Navbar = () => {

  const dispatch = useDispatch();

  const { amount } = useSelector((state) => state.product);
  const {isCartVisible} = useSelector((state) => state.modal);

  console.log('Amount:', amount); // Ensure that amount is a number
  return (
    <nav className="navbar">
     {/* <a href="/" > <h1 className="logo">Redux Store</h1></a> */}
<Link to="/"className="logo">
<h1>Redux Store</h1>
</Link>
      <div className="cart" onClick = {() => dispatch(toggleCartVisibility())} >
        <CartIcon />
        <div className="badge">{amount}</div>
      </div>
     
    </nav>
  );
};

export default Navbar;
