import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import './HomePage.css'

const Footer = () => {
  return (
    <footer>
    <div className="footer-content">
        <div className="logo">things</div>
        <nav className="nav-links">
          <ul>
            <li>
              <Link className="footer-button" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="footer-button" to={"/products"}>
                Products
              </Link>
            </li>
          </ul>
        </nav>
    </div>
      <p>&copy; 2023 things. All rights reserved.</p>
  </footer>
  )
}

export default Footer