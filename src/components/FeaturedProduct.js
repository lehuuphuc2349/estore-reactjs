import React from "react";
import product1 from "./images/product-1.jpg";
import product2 from "./images/product-2.jpg";
import product3 from "./images/product-3.jpg";
import product4 from "./images/product-4.jpg";
import product5 from "./images/product-5.jpg";
import "./FeaturedProduct.css";
import "./Product.css";
function FeaturedProduct() {
  // const settings = {
  //   autoplay: true,
  //   infinite: true,
  //   dots: false,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 4,
  //       },
  //     },
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 576,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <div class="featured-product product">
      <div class="container-fluid">
        <div class="section-header">
          <h1>Featured Product</h1>
        </div>
        <div class="row product-slider product-slider-4">
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
          {/* <div class="col-lg-3">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
