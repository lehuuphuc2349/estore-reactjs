import React from "react";
import slider1 from "./images/slider-1.jpg";
import slider2 from "./images/slider-2.jpg";
import slider3 from "./images/slider-3.jpg";
function SliderStart() {
  return (
    <div className="slider">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="navbar bg-light">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="fa fa-home">Home</i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="fa fa-shopping-bag">Best Selling</i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="fa fa-plus-square">New Arrivals</i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="fa fa-female">Fashion & Beauty</i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="fa fa-child">Kid & Babies Clothes</i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="fa fa-tshirt">Men & Women Clothes</i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="fa fa-mobile-alt">Gadgets & Accessories</i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="fa fa-microchip">Electronics & Accessories</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="header-slider normal-slider">
              <img src={slider1} alt="" />
              <div className="header-slider-caption">
                <p>This is my shopping webstie</p>
                <a href="" className="btn">
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderStart;
