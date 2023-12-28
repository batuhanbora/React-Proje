import React from 'react'
import "./Navbar.css";
import { useSelector } from 'react-redux';

const Cart = () => {

  const cart = useSelector(state => state.cart)

  return (
    <div className={cart ? "open" : "close"}>
          <p>asdfasdfasd</p>
          <p>asdfasdfasd</p>
          <p>asdfasdfasd</p>
          <p>asdfasdfasd</p>
          <p>asdfasdfasd</p>
          <p>asdfasdfasd</p>
          <p>asdfasdfasd</p>
        </div>
  )
}

export default Cart