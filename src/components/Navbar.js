import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="nav">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md  bg-dark navbar-dark">
          <a href="#" className="navbar-brand">
            MENU
          </a>
          <button
            datatype="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav mr-auto">
              <a href="/" className="nav-item nav-link active">
                Home
              </a>
              <a href="/product" className="nav-item nav-link ">
                Products
              </a>
              <a href="/product-detail" className="nav-item nav-link ">
                Products Detail
              </a>
              <a href="" className="nav-item nav-link ">
                Cart
              </a>
              <a href="" className="nav-item nav-link ">
                Checkout
              </a>
              <a href="" className="nav-item nav-link ">
                My Account
              </a>
              <div className="nav-item dropdown">
                <a
                  href=""
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  More Pages
                </a>
                <div className="dropdown-menu">
                  <a href="" className="dropdown-item">
                    Wishlist
                  </a>
                  <a href="" className="dropdown-item">
                    Login and Register
                  </a>
                  <a href="" className="dropdown-item">
                    Contact US
                  </a>
                </div>
              </div>
            </div>
            <div className="navbar-nav ml-auto">
              <div className="nav-item dropdown">
                <a
                  href=""
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  User Account
                </a>
                <div className="dropdown-menu">
                  <div className="dropdown-item">Login</div>
                  <div className="dropdown-item">Register</div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
