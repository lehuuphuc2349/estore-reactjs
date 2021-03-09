import React from "react";
import review1 from "./images/review-1.jpg";
import review2 from "./images/review-2.jpg";
import review3 from "./images/review-3.jpg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./Review.css";
function Review() {
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="review">
      <div className="container-fluid">
        <div className="row review-slider normal-slider ">
          <div className="col-md-6">
            <div className="review-slider-item">
              <div className="review-img">
                <img src={review1} alt="" />
              </div>
              <div className="review-text">
                <h2>Customer Name</h2>
                <h3>Profession</h3>
                <div className="ratting">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="review-slider-item">
              <div className="review-img">
                <img src={review2} alt="" />
              </div>
              <div className="review-text">
                <h2>Customer Name</h2>
                <h3>Profession</h3>
                <div className="ratting">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-md-3">
            <div className="review-slider-item">
              <div className="review-img">
                <img src={review3} alt="" />
              </div>
              <div className="review-text">
                <h2>Customer Name</h2>
                <h3>Profession</h3>
                <div className="ratting">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Review;
