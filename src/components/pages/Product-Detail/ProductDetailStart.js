import React from "react";
import product1 from "../../images/product-1.jpg";
import product2 from "../../images/product-2.jpg";
import product3 from "../../images/product-3.jpg";
import product4 from "../../images/product-4.jpg";
import product5 from "../../images/product-5.jpg";
import product6 from "../../images/product-6.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductDetailStart.css";
function ProductDetailStart() {
  const sliderSingle = {
    infinite: true,
    autoplay: true,
    dots: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // asNavFor: ".product-slider-single-nav",
  };
  const sliderSingleNav = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    centerMode: true,
    focusOnSelect: true,
    // asNavFor: ".product-slider-single",
  };
  const related = {
    autoplay: true,
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="product-detail">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div className="product-detail-top">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <div className="product-slider-single normal-slider">
                    <Slider {...sliderSingle}>
                      <img src={product1} alt="" />
                      <img src={product2} alt="" />
                      <img src={product3} alt="" />
                      <img src={product4} alt="" />
                      <img src={product5} alt="" />
                      <img src={product6} alt="" />
                    </Slider>
                  </div>
                  <div className="product-slider-single-nav normal-slider">
                    <Slider {...sliderSingleNav}>
                      <div className="slider-nav-img">
                        <img src={product1} alt="" />
                      </div>
                      <div className="slider-nav-img">
                        <img src={product2} alt="" />
                      </div>
                      <div className="slider-nav-img">
                        <img src={product3} alt="" />
                      </div>
                      <div className="slider-nav-img">
                        <img src={product4} alt="" />
                      </div>
                      <div className="slider-nav-img">
                        <img src={product5} alt="" />
                      </div>
                      <div className="slider-nav-img">
                        <img src={product6} alt="" />
                      </div>
                    </Slider>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="product-content">
                    <div className="title">
                      <h2>Product Name</h2>
                      <div className="ratting">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="price">
                        <h4>Price:</h4>
                        <p>
                          $99 <span>$149</span>
                        </p>
                      </div>
                      <div className="quantity">
                        <h4>Quantity: </h4>
                        <div className="qty">
                          <button className="btn-minus">
                            <i className="fa fa-minus"></i>
                          </button>
                          <input type="text" value="1" />
                          <button className="btn-plus">
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="p-size">
                        <h4>Size:</h4>
                        <div className="btn-group btn-group-sm">
                          <button className="btn">S</button>
                          <button className="btn">M</button>
                          <button className="btn">L</button>
                          <button className="btn">XL</button>
                        </div>
                      </div>
                      <div className="p-color">
                        <h4>Color:</h4>
                        <div className="btn-group btn-group-sm">
                          <button className="btn">White</button>
                          <button className="btn">Black</button>
                          <button className="btn">Blue</button>
                        </div>
                      </div>
                      <div className="action">
                        <a href="" className="btn">
                          <i className="fa fa-shopping-cart"> Add to Cart</i>
                        </a>
                        <a href="" className="btn">
                          <i className="fa fa-shopping-bag"> Buy Now</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* description */}
            <div className="row product-detail-bottom">
              <div className="col-lg-12">
                <ul className="nav nav-pills nav-justified">
                  <li className="nav-item">
                    <a
                      href=""
                      className="nav-link active"
                      data-toggle="pill"
                      href="#description"
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href=""
                      className="nav-link "
                      data-toggle="pill"
                      href="#specification"
                    >
                      Specification
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href=""
                      className="nav-link "
                      data-toggle="pill"
                      href="#reviews"
                    >
                      Reviews (1)
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="description" className="container tab-pane active">
                    <h4>Product description</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In condimentum quam ac mi viverra dictum. In efficitur
                      ipsum diam, at dignissim lorem tempor in. Vivamus tempor
                      hendrerit finibus. Nulla tristique viverra nisl, sit amet
                      bibendum ante suscipit non. Praesent in faucibus tellus,
                      sed gravida lacus. Vivamus eu diam eros. Aliquam et sapien
                      eget arcu rhoncus scelerisque. Suspendisse sit amet neque
                      neque. Praesent suscipit et magna eu iaculis. Donec arcu
                      libero, commodo ac est a, malesuada finibus dolor. Aenean
                      in ex eu velit semper fermentum. In leo dui, aliquet sit
                      amet eleifend sit amet, varius in turpis. Maecenas
                      fermentum ut ligula at consectetur. Nullam et tortor leo.
                    </p>
                  </div>
                  <div id="specification" className="container tab-pane fade">
                    <h4>Product specification</h4>
                    <ul>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                  </div>
                  <div id="reviews" className="container tab-pane fade">
                    <div className="reviews-submitted">
                      <div className="reviewer">
                        StarkLee - <span>01 Jan 2021</span>
                      </div>
                      <div className="ratting">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam.
                      </p>
                    </div>
                    <div className="reviews-submit">
                      <h4>Give your Review:</h4>
                      <div className="ratting">
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <div className="row form">
                        <div className="col-sm-6">
                          <input type="text" placeholder="Name" />
                        </div>
                        <div className="col-sm-6">
                          <input type="email" placeholder="Email" />
                        </div>
                        <div className="col-sm-12">
                          <textarea placeholder="Review"></textarea>
                        </div>
                        <div className="col-sm-12">
                          <button>Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end description */}
            {/* Related Product */}
            <div class="product">
              <div class="section-header">
                <h1>Related Products</h1>
              </div>
              <div class="row align-items-center product-slider product-slider-4">
                <div class="col-lg-4">
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
                <div class="col-lg-4">
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
                <div class="col-lg-4">
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
              </div>
            </div>
            {/* End Related Product */}
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

export default ProductDetailStart;
