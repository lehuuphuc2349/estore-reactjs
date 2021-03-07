import React from "react";
import slider1 from "./images/slider-1.jpg";
import slider2 from "./images/slider-2.jpg";
import slider3 from "./images/slider-3.jpg";
import category1 from "./images/category-1.jpg";
import category2 from "./images/category-2.jpg";
import "./SliderStart.css";
function SliderStart() {
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <nav className="navbar bg-light">
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
            </nav>
          </div>
          <div className="col-md-6">
            <div className="header-slider normal-slider">
              <div class="header-slider-item">
                <img src={slider1} alt="" />
                <div className="header-slider-caption">
                  <p>This is my shopping webstie</p>
                  <a href="" className="btn">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                </div>
              </div>
              <div class="header-slider-item">
                <img src={slider2} alt="" />
                <div className="header-slider-caption">
                  <p>This is my shopping webstie</p>
                  <a href="" className="btn">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                </div>
              </div>
              <div class="header-slider-item">
                <img src={slider3} alt="" />
                <div className="header-slider-caption">
                  <p>This is my shopping webstie</p>
                  <a href="" className="btn">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="header-img">
              <div className="img-item">
                <img src={category1} alt="" />
                <a href="" className="img-text">
                  <p>This is my shopping website</p>
                </a>
              </div>
              <div className="header-img">
                <div className="img-item">
                  <img src={category2} alt="" />
                  <a href="" className="img-text">
                    <p>This is my shopping website</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderStart;
