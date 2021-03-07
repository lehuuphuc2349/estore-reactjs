import React from "react";
import "./BottomBar.css";
import logo from "./images/logo.png";
function BottomBar() {
  return (
    <div className="bottom-bar">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-3">
            <div className="logo">
              <a href="">
                <img src={logo} alt="" />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="search">
              <input type="text" placeholder="Search" />
              <button>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="user">
              <a href="" className="btn wishlist">
                <i className="fa fa-heart"></i>
                <span>(0)</span>
              </a>
              <a href="" className="btn cart">
                <i className="fa fa-shopping-cart"></i>
                <span>(0)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
