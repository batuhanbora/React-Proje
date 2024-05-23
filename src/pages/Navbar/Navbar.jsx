import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showHideCart } from "../../redux/actions";
import Cart from "./Cart";

const Navbar = () => {

  const cart = useSelector(state => state.showHideCart )
  const dispatch = useDispatch()

  const handleCart = () =>{
    dispatch(showHideCart)
    console.log('tiklandi');
    console.log(cart.showHideCart);
  }

  return (
    <div>
      <div className="navbar">
        <div className="logo">things</div>
        <nav className="nav-links">
          <ul>
            <li>
              <Link className="navbar-button" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="navbar-button" to={"/products"}>
                Products
              </Link>
            </li>
            <li>
              <div className="cart" onClick={handleCart}>
              <span>🛒</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`navbar-cart-${cart.showHideCart ? 'open' : 'close'}`}>
        <Cart/>
      </div>
      </div>
  );
};

export default Navbar;
