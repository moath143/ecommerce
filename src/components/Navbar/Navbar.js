import React from 'react'
import { useSelector } from 'react-redux';


function Navbar() {
  const cartData = useSelector(state => state.cartReducer)
    return (
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
              Ecommerce
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/additem">
                    Add Item
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/cart">
                    Cart : {cartData.cartItems.length}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
}

export default Navbar
