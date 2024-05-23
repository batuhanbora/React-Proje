import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.showHideCart);
  const cartProducts = useSelector((state) => state.addToCart).products;

  //usecontext veya reduxtan alinan verileri cardlar icine maple

  return (
    <div className={cart ? "open" : "close"}>
      <div className="shopping-cart">
      {cartProducts.map((product, index) => (
        <div className="item">
          <div className="buttons">
            <span className="delete-btn"></span>
          </div>

          <div className="image">
            <img src={product.thumbnail} alt="" />
          </div>

          <div className="description">
            <span>{product.title}</span>
          </div>

          <div className="quantity">
            <button className="plus-btn" type="button" name="button">
              +
            </button>
            <input type="text" name="name" value={product.amount} />
            <button className="minus-btn" type="button" name="button">
              -
            </button>
          </div>

          <div className="total-price">{product.price * product.amount}</div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
