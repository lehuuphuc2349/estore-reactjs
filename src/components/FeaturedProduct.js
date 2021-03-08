import React from "react";
import product1 from "./images/product-1.jpg";
import product2 from "./images/product-2.jpg";
import product3 from "./images/product-3.jpg";
import product4 from "./images/product-4.jpg";
import product5 from "./images/product-5.jpg";
import "./FeaturedProduct.css";
import "./Product.css";
function FeaturedProduct() {
  return (
    <div className="featured-product product">
      <div className="container-fluid">
        <div className="section-header">
          <h1>Featured Product</h1>
        </div>
        <div className="row align-items-center product-slider product-slider4">
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-title">
                <a href="#">Product Name</a>
                <div className="ratting">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
              </div>
              <div className="product-image">
                <a href="#">
                  <img src={product1} alt="" />
                </a>
                <div className="product-action">
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
              <div className="product-price">
                <h3>
                  <span>$</span>99
                </h3>
                <a href="" className="btn">
                  <i className="fa fa-shopping-cart"></i>Buy now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-title">
                <a href="#">Product Name</a>
                <div className="ratting">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
              </div>
              <div className="product-image">
                <a href="#">
                  <img src={product2} alt="" />
                </a>
                <div className="product-action">
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
              <div className="product-price">
                <h3>
                  <span>$</span>99
                </h3>
                <a href="" className="btn">
                  <i className="fa fa-shopping-cart"></i>Buy now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-title">
                <a href="#">Product Name</a>
                <div className="ratting">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
              </div>
              <div className="product-image">
                <a href="#">
                  <img src={product3} alt="" />
                </a>
                <div className="product-action">
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
              <div className="product-price">
                <h3>
                  <span>$</span>99
                </h3>
                <a href="" className="btn">
                  <i className="fa fa-shopping-cart"></i>Buy now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-title">
                <a href="#">Product Name</a>
                <div className="ratting">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
              </div>
              <div className="product-image">
                <a href="#">
                  <img src={product4} alt="" />
                </a>
                <div className="product-action">
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
              <div className="product-price">
                <h3>
                  <span>$</span>99
                </h3>
                <a href="" className="btn">
                  <i className="fa fa-shopping-cart"></i>Buy now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-title">
                <a href="#">Product Name</a>
                <div className="ratting">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
              </div>
              <div className="product-image">
                <a href="#">
                  <img src={product5} alt="" />
                </a>
                <div className="product-action">
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
              <div className="product-price">
                <h3>
                  <span>$</span>99
                </h3>
                <a href="" className="btn">
                  <i className="fa fa-shopping-cart"></i>Buy now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
