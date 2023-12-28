import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
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
              <Link className="navbar-button" to={"/products"}>
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </div>
  );
};

export default Navbar;
