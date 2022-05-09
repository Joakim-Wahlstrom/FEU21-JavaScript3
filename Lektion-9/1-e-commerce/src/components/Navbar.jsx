import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ShoppingCart from './shoppingCart/ShoppingCart'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const totalQuantity = useSelector(state => state.cartReducer.totalQuantity)

  return (
<nav className="navbar navbar-expand-md fixed-top navbar-light bg-info">
  <div className="container-fluid">
    <Link to="/" className='navbar-brand'>Shopshop</Link>
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
      </ul>
    </div>

    <div className="d-flex align-items-center">

      <div className="dropdown">
        <span
          className="text-reset me-3 dropdown-toggle hidden-arrow"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-shopping-cart"></i>
          {totalQuantity >= 1 && <span className="badge rounded-pill badge-notification bg-danger">{totalQuantity}</span>}
        </span>
        <ul
          className="dropdown-menu dropdown-menu-end shopping-cart"
          aria-labelledby="navbarDropdownMenuLink"
        >
            <ShoppingCart />
        </ul>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar