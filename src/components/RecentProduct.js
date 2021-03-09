import React from "react";
import product7 from "./images/product-7.jpg";
import product8 from "./images/product-8.jpg";
import product9 from "./images/product-9.jpg";
import product10 from "./images/product-10.jpg";
function RecentProduct() {
  const styleRecent = {
    position: "relative",
    padding: "30px 0",
  };
  return (
    <div style={styleRecent} class="recent-product product">
      <div class="container-fluid">
        <div class="section-header">
          <h1>Recent Product</h1>
        </div>
        <div class="row align-items-center product-slider product-slider-4">
          <div class="col-lg-3">
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
                <a href="product-detail.html">
                  <img src={product10} alt="Product Image" />
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
          <div class="col-lg-3">
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
                <a href="product-detail.html">
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
          <div class="col-lg-3">
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
                <a href="product-detail.html">
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
          <div class="col-lg-3">
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
                <a href="product-detail.html">
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
        </div>
      </div>
    </div>
  );
}

export default RecentProduct;
