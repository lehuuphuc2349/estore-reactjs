import React, { useEffect } from "react";
import BreadCrumb from "../../function/BreadCrumb";
import product1 from "../images/product-1.jpg";
import product2 from "../images/product-2.jpg";
import product3 from "../images/product-3.jpg";
import product4 from "../images/product-4.jpg";
import product5 from "../images/product-5.jpg";
import $ from "jquery";
import "./WishList.css";
function WishList() {
  useEffect(() => {
    window.addEventListener("load", function () {
      const btn = document.querySelectorAll(".qty button");
      btn.forEach((item) => {
        item.addEventListener("click", function () {
          var btnActive = $(this);
          var value = btnActive.parent().find("input").val();
          if (btnActive.hasClass("btn-plus")) {
            var newValue = parseFloat(value) + 1;
          } else {
            if (value > 0) {
              var newValue = value - 1;
            } else {
              newValue = 0;
            }
          }
          btnActive.parent().find("input").val(newValue);
        });
      });
    });
  });
  return (
    <>
      <BreadCrumb />
      <div className="wishlist-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="table-reponsive">
                <table className="table table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody className="align-middle">
                    <tr>
                      <td>
                        <div className="img">
                          <a href="">
                            <img src={product1} alt="" />
                          </a>
                          <p>Product Name</p>
                        </div>
                      </td>
                      <td>$99</td>
                      <td>
                        <div class="qty">
                          <button class="btn-minus">
                            <i class="fa fa-minus"></i>
                          </button>
                          <input type="text" value="1" />
                          <button class="btn-plus">
                            <i class="fa fa-plus"></i>
                          </button>
                        </div>
                      </td>
                      <td>
                        <button class="btn-cart">Add to Cart</button>
                      </td>

                      <td>
                        <button>
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="img">
                          <a href="">
                            <img src={product2} alt="" />
                          </a>
                          <p>Product Name</p>
                        </div>
                      </td>
                      <td>$99</td>
                      <td>
                        <div class="qty">
                          <button class="btn-minus">
                            <i class="fa fa-minus"></i>
                          </button>
                          <input type="text" value="1" />
                          <button class="btn-plus">
                            <i class="fa fa-plus"></i>
                          </button>
                        </div>
                      </td>
                      <td>
                        <button class="btn-cart">Add to Cart</button>
                      </td>

                      <td>
                        <button>
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="img">
                          <a href="">
                            <img src={product3} alt="" />
                          </a>
                          <p>Product Name</p>
                        </div>
                      </td>
                      <td>$99</td>
                      <td>
                        <div class="qty">
                          <button class="btn-minus">
                            <i class="fa fa-minus"></i>
                          </button>
                          <input type="text" value="1" />
                          <button class="btn-plus">
                            <i class="fa fa-plus"></i>
                          </button>
                        </div>
                      </td>
                      <td>
                        <button class="btn-cart">Add to Cart</button>
                      </td>

                      <td>
                        <button>
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="img">
                          <a href="">
                            <img src={product4} alt="" />
                          </a>
                          <p>Product Name</p>
                        </div>
                      </td>
                      <td>$99</td>
                      <td>
                        <div class="qty">
                          <button class="btn-minus">
                            <i class="fa fa-minus"></i>
                          </button>
                          <input type="text" value="1" />
                          <button class="btn-plus">
                            <i class="fa fa-plus"></i>
                          </button>
                        </div>
                      </td>
                      <td>
                        <button class="btn-cart">Add to Cart</button>
                      </td>

                      <td>
                        <button>
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="img">
                          <a href="">
                            <img src={product5} alt="" />
                          </a>
                          <p>Product Name</p>
                        </div>
                      </td>
                      <td>$99</td>
                      <td>
                        <div class="qty">
                          <button class="btn-minus">
                            <i class="fa fa-minus"></i>
                          </button>
                          <input type="text" value="1" />
                          <button class="btn-plus">
                            <i class="fa fa-plus"></i>
                          </button>
                        </div>
                      </td>
                      <td>
                        <button class="btn-cart">Add to Cart</button>
                      </td>
                      <td>
                        <button>
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishList;
