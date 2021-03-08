import React from "react";
import brand1 from "./images/brand-1.png";
import brand2 from "./images/brand-2.png";
import brand3 from "./images/brand-3.png";
import brand4 from "./images/brand-4.png";
import brand5 from "./images/brand-5.png";
import brand6 from "./images/brand-6.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Brand.css";
function Brand() {
  const settings = {
    speed: 7000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: false,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="brand">
      <div className="container-fluid">
        <div className="brand-slider">
          <Slider {...settings}>
            <div class="brand-item">
              <img src={brand1} alt="" />
            </div>
            <div class="brand-item">
              <img src={brand2} alt="" />
            </div>
            <div class="brand-item">
              <img src={brand3} alt="" />
            </div>
            <div class="brand-item">
              <img src={brand4} alt="" />
            </div>
            <div class="brand-item">
              <img src={brand5} alt="" />
            </div>
            <div class="brand-item">
              <img src={brand6} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Brand;
