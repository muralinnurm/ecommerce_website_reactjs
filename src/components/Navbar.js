import React from 'react';
import './Navbar.css';
// Importing images and icons
import logo from "../images/logo.png";
import userAvatar from "../images/icons/profile.png";
import shoppingCart from "../images/icons/shopping-cart.png";
// router-dom thing

const Navbar = () => {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12 d-flex align-items-center">
              <p>Dont Miss Our 20% off hot offer &nbsp;<a href="/">shop now</a></p>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 d-flex justify-content-end">
              <div className="top-select-box mx-3">
                <i class="far fa-money-bill-wave"></i>
                <select>
                  <option value="usd">USD</option>
                  <option value="bdt">BDT</option>
                  <option value="eur">EUR</option>
                  <option value="inr">INR</option>
                </select>
              </div>
              <div className="top-select-box">
                <i class="far fa-map"></i>
                <select>
                  <option value="eng">ENG</option>
                  <option value="bng">BNG</option>
                  <option value="hin">HIN</option>
                  <option value="spn">SPN</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="LOGO" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Cart</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Checkout</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">My Account</a>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav navbar-nav-2">
              <li className="nav-item">
                <a className="nav-link d-flex user-avatar" aria-current="page" href="/">Login / Register <img src={userAvatar} alt="User Avatar" className='mx-2' /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link shoping-cart" aria-current="page" href="/"><img src={shoppingCart} alt="Cart Icon" /><span className='cart-count'>10</span></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
