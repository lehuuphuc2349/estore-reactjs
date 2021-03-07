import React from "react";
import slider1 from "./images/slider-1.jpg";
import slider2 from "./images/slider-2.jpg";
import slider3 from "./images/slider-3.jpg";
import category1 from "./images/category-1.jpg";
import category2 from "./images/category-2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderStart.css";

function SliderStart() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <nav className="navbar bg-light">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="fa fa-home"></i>Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="fa fa-shopping-bag"></i>Best Selling
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="fa fa-plus-square"></i>New Arrivals
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="fa fa-female"></i>Fashion & Beauty
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="fa fa-child"></i>Kid & Babies Clothes
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="fa fa-tshirt"></i>Men & Women Clothes
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="fa fa-mobile-alt"></i>Gadgets & Accessories
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="fa fa-microchip"></i>Electronics & Accessories
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-6">
            <div className="header-slider normal-slider">
              <Slider {...settings}>
                <div class="header-slider-item">
                  <img src={slider1} alt="" />
                  <div className="header-slider-caption">
                    <p>This is my shopping webstie</p>
                    <a href="" className="btn">
                      <i className="fa fa-shopping-cart"></i>Shop now
                    </a>
                  </div>
                </div>
                <div class="header-slider-item">
                  <img src={slider2} alt="" />
                  <div className="header-slider-caption">
                    <p>This is my shopping webstie</p>
                    <a href="" className="btn">
                      <i className="fa fa-shopping-cart"></i>Shop now
                    </a>
                  </div>
                </div>
                <div class="header-slider-item">
                  <img src={slider3} alt="" />
                  <div className="header-slider-caption">
                    <p>This is my shopping webstie</p>
                    <a href="" className="btn">
                      <i className="fa fa-shopping-cart"></i>Shop now
                    </a>
                  </div>
                </div>
              </Slider>
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
