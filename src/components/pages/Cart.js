import React, { useEffect } from "react";
import product1 from "../images/product-1.jpg";
import product2 from "../images/product-2.jpg";
import product3 from "../images/product-3.jpg";
import product4 from "../images/product-4.jpg";
import product5 from "../images/product-5.jpg";
import BreadCrumb from "../../function/BreadCrumb";
import $ from "jquery";
import "./Cart.css";
function Cart() {
  // const code = ["101", "102", "103"];
  // const couponCode = () => {
  //   const coupon = document.querySelectorAll("coupon");
  //   const inputValue = coupon[0];
  //   const zipCode = inputValue.value();
  //   let value = document.getElementsByTagName("span").value;
  //   code.map((item) => {
  //     if (zipCode == item && value > 0) {
  //       value = value - (value * 10) / 100;
  //     } else {
  //       if (value == 0) {
  //         alert("Please Choose Product You Want");
  //       } else {
  //         alert("Your Zip Code Is Wrong");
  //       }
  //     }
  //   });
  // };
  // useEffect(() => {
  //   setTimeout(couponCode, 1000);
  // });
  useEffect(() => {
    window.addEventListener("load", function () {
      $(".qty btn").on("click", function () {
        let $btn = $(this);
        let value = $btn.parent().find("input").val();
        let newValue;
        if ($btn.hasClass("btn-plus")) {
          newValue = value + 1;
        } else {
          if (value > 0) {
            newValue = value - 1;
          } else {
            newValue = 0;
          }
        }
        $btn.parent().find("input").val(newValue);
      });
    });
  });
  return (
    <>
      <BreadCrumb />
      <div className="cart-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="cart-page-inner">
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
                        <td>$99</td>
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
                        <td>$99</td>
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
                        <td>$99</td>
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
                        <td>$99</td>
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
                        <td>$99</td>
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
            <div className="col-lg-4">
              <div className="cart-page-inner">
                <div className="row">
                  <div className="col-md-12">
                    <div className="coupon">
                      <input type="text" placeholder="Coupon Code" />
                      <button>Apply Code</button>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="cart-summary">
                      <div className="cart-content">
                        <h1>Cart Summary</h1>
                        <p>
                          Sub Total <span>$99</span>
                        </p>
                        <p>
                          Shipping Cost <span>$1</span>
                        </p>
                        <h2>
                          Grand Total <span>$100</span>
                        </h2>
                      </div>
                      <div className="cart-btn">
                        <button>Update Cart</button>
                        <button>Check Out</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
