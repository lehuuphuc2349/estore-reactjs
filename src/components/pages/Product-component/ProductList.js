import React from "react";
import product1 from "../../images/product-1.jpg";
import product2 from "../../images/product-2.jpg";
import product3 from "../../images/product-3.jpg";
import product4 from "../../images/product-4.jpg";
import product5 from "../../images/product-5.jpg";
import product6 from "../../images/product-6.jpg";
import product7 from "../../images/product-7.jpg";
import product8 from "../../images/product-8.jpg";
import product9 from "../../images/product-9.jpg";

import "./ProductList.css";
function ProductList() {
  return (
    <div className="product-view">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {/* TOP */}
              <div className="col-md-12">
                <div className="product-view-top">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="product-search">
                        <input type="email" />
                        <button>
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-short">
                        <div className="dropdown">
                          <div
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Product Short
                          </div>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a href="#" className="dropdown-item">
                              Newest
                            </a>
                            <a href="#" className="dropdown-item">
                              Popular
                            </a>
                            <a href="#" className="dropdown-item">
                              Most Sale
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-price-range">
                        <div className="dropdown">
                          <div
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Product Price Range
                          </div>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a href="#" className="dropdown-item">
                              $0 to $50
                            </a>
                            <a href="#" className="dropdown-item">
                              $51 to $100
                            </a>
                            <a href="#" className="dropdown-item">
                              $101 to $150
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END TOP */}

              {/* PRODUCT LIST */}
              <div className="col-md-4">
                <div class="product-item">
                  <div class="product-title">
                    <a href="#">Product Name</a>
                    <div class="ratting">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                  <div class="product-image">
                    <a href="">
                      <img src={product1} alt="Product Image" />
                    </a>
                    <div class="product-action">
                      <a href="#">
                        <i class="fa fa-cart-plus"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-search"></i>
                      </a>
                    </div>
                  </div>
                  <div class="product-price">
                    <h3>
                      <span>$</span>99
                    </h3>
                    <a class="btn" href="">
                      <i class="fa fa-shopping-cart"></i>Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="product-item">
                  <div class="product-title">
                    <a href="#">Product Name</a>
                    <div class="ratting">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                  <div class="product-image">
                    <a href="">
                      <img src={product2} alt="Product Image" />
                    </a>
                    <div class="product-action">
                      <a href="#">
                        <i class="fa fa-cart-plus"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-search"></i>
                      </a>
                    </div>
                  </div>
                  <div class="product-price">
                    <h3>
                      <span>$</span>99
                    </h3>
                    <a class="btn" href="">
                      <i class="fa fa-shopping-cart"></i>Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="product-item">
                  <div class="product-title">
                    <a href="#">Product Name</a>
                    <div class="ratting">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                  <div class="product-image">
                    <a href="">
                      <img src={product3} alt="Product Image" />
                    </a>
                    <div class="product-action">
                      <a href="#">
                        <i class="fa fa-cart-plus"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-search"></i>
                      </a>
                    </div>
                  </div>
                  <div class="product-price">
                    <h3>
                      <span>$</span>99
                    </h3>
                    <a class="btn" href="">
                      <i class="fa fa-shopping-cart"></i>Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="product-item">
                  <div class="product-title">
                    <a href="#">Product Name</a>
                    <div class="ratting">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                  <div class="product-image">
                    <a href="">
                      <img src={product4} alt="Product Image" />
                    </a>
                    <div class="product-action">
                      <a href="#">
                        <i class="fa fa-cart-plus"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-search"></i>
                      </a>
                    </div>
                  </div>
                  <div class="product-price">
                    <h3>
                      <span>$</span>99
                    </h3>
                    <a class="btn" href="">
                      <i class="fa fa-shopping-cart"></i>Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="product-item">
                  <div class="product-title">
                    <a href="#">Product Name</a>
                    <div class="ratting">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                  <div class="product-image">
                    <a href="">
                      <img src={product5} alt="Product Image" />
                    </a>
                    <div class="product-action">
                      <a href="#">
                        <i class="fa fa-cart-plus"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-search"></i>
                      </a>
                    </div>
                  </div>
                  <div class="product-price">
                    <h3>
                      <span>$</span>99
                    </h3>
                    <a class="btn" href="">
                      <i class="fa fa-shopping-cart"></i>Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="product-item">
                  <div class="product-title">
                    <a href="#">Product Name</a>
                    <div class="ratting">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                  <div class="product-image">
                    <a href="">
                      <img src={product6} alt="Product Image" />
                    </a>
                    <div class="product-action">
                      <a href="#">
                        <i class="fa fa-cart-plus"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-search"></i>
                      </a>
                    </div>
                  </div>
                  <div class="product-price">
                    <h3>
                      <span>$</span>99
                    </h3>
                    <a class="btn" href="">
                      <i class="fa fa-shopping-cart"></i>Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="product-item">
                  <div class="product-title">
                    <a href="#">Product Name</a>
                    <div class="ratting">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                  <div class="product-image">
                    <a href="">
                      <img src={product7} alt="Product Image" />
                    </a>
                    <div class="product-action">
                      <a href="#">
                        <i class="fa fa-cart-plus"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-search"></i>
                      </a>
                    </div>
                  </div>
                  <div class="product-price">
                    <h3>
                      <span>$</span>99
                    </h3>
                    <a class="btn" href="">
                      <i class="fa fa-shopping-cart"></i>Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="product-item">
                  <div class="product-title">
                    <a href="#">Product Name</a>
                    <div class="ratting">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                  <div class="product-image">
                    <a href="">
                      <img src={product8} alt="Product Image" />
                    </a>
                    <div class="product-action">
                      <a href="#">
                        <i class="fa fa-cart-plus"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-search"></i>
                      </a>
                    </div>
                  </div>
                  <div class="product-price">
                    <h3>
                      <span>$</span>99
                    </h3>
                    <a class="btn" href="">
                      <i class="fa fa-shopping-cart"></i>Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="product-item">
                  <div class="product-title">
                    <a href="#">Product Name</a>
                    <div class="ratting">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                  <div class="product-image">
                    <a href="">
                      <img src={product9} alt="Product Image" />
                    </a>
                    <div class="product-action">
                      <a href="#">
                        <i class="fa fa-cart-plus"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-search"></i>
                      </a>
                    </div>
                  </div>
                  <div class="product-price">
                    <h3>
                      <span>$</span>99
                    </h3>
                    <a class="btn" href="">
                      <i class="fa fa-shopping-cart"></i>Buy Now
                    </a>
                  </div>
                </div>
              </div>
              {/* END PRODUCT LIST */}
            </div>
            <div class="col-md-12">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">
                      Previous
                    </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* SIDE BAR */}
          <div className="col-lg-4 sidebar">
            <div className="sidebar-widget category">
              <h2 className="title">Category</h2>
              <nav className="navbar bg-light">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      <i className="fa fa-female"></i>Fashion & Beauty
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      <i className="fa fa-child"></i>Kids & Babies Clothes
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
                      <i className="fa fa-microchip "></i>Electronics &
                      Accessories
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="sidebar-widget widget-slider">
              <div class="sidebar-slider normal-slider">
                <div class="product-item">
                  <div class="product-title">
                    <a href="#">Product Name</a>
                    <div class="ratting">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                  <div class="product-image">
                    <a href="">
                      <img src={product1} alt="Product Image" />
                    </a>
                    <div class="product-action">
                      <a href="#">
                        <i class="fa fa-cart-plus"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-search"></i>
                      </a>
                    </div>
                  </div>
                  <div class="product-price">
                    <h3>
                      <span>$</span>99
                    </h3>
                    <a class="btn" href="">
                      <i class="fa fa-shopping-cart"></i>Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="sidebar-widget brands">
              <h2 class="title">Our Brands</h2>
              <ul>
                <li>
                  <a href="#">Nulla </a>
                  <span>(45)</span>
                </li>
                <li>
                  <a href="#">Curabitur </a>
                  <span>(34)</span>
                </li>
                <li>
                  <a href="#">Nunc </a>
                  <span>(67)</span>
                </li>
                <li>
                  <a href="#">Ullamcorper</a>
                  <span>(74)</span>
                </li>
                <li>
                  <a href="#">Fusce </a>
                  <span>(89)</span>
                </li>
                <li>
                  <a href="#">Sagittis</a>
                  <span>(28)</span>
                </li>
              </ul>
            </div>
            <div class="sidebar-widget tag">
              <h2 class="title">Tags Cloud</h2>
              <a href="#">Lorem ipsum</a>
              <a href="#">Vivamus</a>
              <a href="#">Phasellus</a>
              <a href="#">pulvinar</a>
              <a href="#">Curabitur</a>
              <a href="#">Fusce</a>
              <a href="#">Sem quis</a>
              <a href="#">Mollis metus</a>
              <a href="#">Sit amet</a>
              <a href="#">Vel posuere</a>
              <a href="#">orci luctus</a>
              <a href="#">Nam lorem</a>
            </div>
          </div>
          {/* END SIDE BAR */}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
