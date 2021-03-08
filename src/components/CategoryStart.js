import React from "react";
import category1 from "./images/category-3.jpg";
import category2 from "./images/category-4.jpg";
import category3 from "./images/category-5.jpg";
import category4 from "./images/category-6.jpg";
import category5 from "./images/category-7.jpg";
import category6 from "./images/category-8.jpg";
import "./CategoryStart.css";
function CategoryStart() {
  return (
    <div className="category">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="category-item ch-400">
              <img src={category1} alt="" />
              <a href="" className="category-name">
                <p>Lorem ipsum dolor sit amet consectetur elit</p>
              </a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="category-item ch-250">
              <img src={category2} />
              <a class="category-name" href="">
                <p>Some text goes here that describes the image</p>
              </a>
            </div>
            <div class="category-item ch-150">
              <img src={category3} />
              <a class="category-name" href="">
                <p>Some text goes here that describes the image</p>
              </a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="category-item ch-150">
              <img src={category4} />
              <a class="category-name" href="">
                <p>Some text goes here that describes the image</p>
              </a>
            </div>
            <div class="category-item ch-250">
              <img src={category5} />
              <a class="category-name" href="">
                <p>Some text goes here that describes the image</p>
              </a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="category-item ch-400">
              <img src={category6} />
              <a class="category-name" href="">
                <p>Some text goes here that describes the image</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryStart;
