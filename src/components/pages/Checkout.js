import React, { useEffect, useState } from "react";
import BreadCrumb from "../../function/BreadCrumb";
import $ from "jquery";
import "./Checkout.css";
function Checkout() {
  const slideShippAddress = () => {
    const checkbox = document.querySelector("#shipto");
    let shippingAddress = document.querySelector(".shipping-address");
    if (checkbox.checked == true) {
      shippingAddress.style.display = "block";
    } else {
      shippingAddress.style.display = "none";
    }
  };
  useEffect(() => {
    window.addEventListener("load", function () {
      $(".checkout .payment-method .custom-control-input").change(function () {
        if ($(this).prop("checked")) {
          let checkbox_id = $(this).attr("id");
          $(".checkout .payment-method .payment-content").slideUp();
          $("#" + checkbox_id + "-show").slideDown();
        }
      });
    });
  });

  return (
    <>
      <BreadCrumb />
      <div className="checkout">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="checkout-inner">
                <div className="billing-address">
                  <h2>Billing Address</h2>
                  <div className="row">
                    <div className="col-md-6">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Mobile Number</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-md-12">
                      <label>Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholderc="Address"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Country</label>
                      <select className="custom-select">
                        <option selected>Viet Nam</option>
                        <option>United States</option>
                        <option value="">China</option>
                        <option value="">Japan</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label>City</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="City"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>State</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="State"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Zip Code</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="Zip Code"
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="newaccount"
                        />
                        <label
                          className="custom-control-label"
                          for="newaccount"
                        >
                          Create an account
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="shipto"
                          onClick={slideShippAddress}
                        />
                        <label className="custom-control-label" for="shipto">
                          Ship to diffrent Address
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shipping-address">
                  <h2>Billing Address</h2>
                  <div className="row">
                    <div className="col-md-6">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Mobile Number</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-md-12">
                      <label>Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholderc="Address"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Country</label>
                      <select className="custom-select">
                        <option selected>Viet Nam</option>
                        <option>United States</option>
                        <option value="">China</option>
                        <option value="">Japan</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label>City</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="City"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>State</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="State"
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Zip Code</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="Zip Code"
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="newaccount"
                        />
                        <label
                          className="custom-control-label"
                          for="newaccount"
                        >
                          Create an account
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="Shipto"
                        />
                        <label className="custom-control-label" for="Shipto">
                          Ship to diffrent Address
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="checkout-inner">
                <div className="checkout-summary">
                  <h1>Cart ToTal</h1>
                  <p>
                    Product Name <span>$99</span>
                  </p>
                  <p className="sub-total">
                    Sub Total <span>$99</span>
                  </p>
                  <p className="shop-cost">
                    Shipping Cost <span>$1</span>
                  </p>
                  <h2>
                    Grand Total <span>$100</span>
                  </h2>
                </div>
                <div className="checkout-payment">
                  <div className="payment-methods">
                    <h1>Payment Method</h1>
                    <div className="payment-method">
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="payment-1"
                          name="payment"
                        />
                        <label className="custom-control-label" for="payment-1">
                          Paypal
                        </label>
                      </div>
                      <div className="payment-content" id="payment-1-show">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cras tincidunt orci ac eros volutpat maximus
                          lacinia quis diam.
                        </p>
                      </div>
                    </div>
                    <div className="payment-method">
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="payment-2"
                          name="payment"
                        />
                        <label className="custom-control-label" for="payment-2">
                          Payoneer
                        </label>
                      </div>
                      <div className="payment-content" id="payment-2-show">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cras tincidunt orci ac eros volutpat maximus
                          lacinia quis diam.
                        </p>
                      </div>
                    </div>
                    <div className="payment-method">
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="payment-3"
                          name="payment"
                        />
                        <label className="custom-control-label" for="payment-3">
                          Check Payment
                        </label>
                      </div>
                      <div className="payment-content" id="payment-3-show">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cras tincidunt orci ac eros volutpat maximus
                          lacinia quis diam.
                        </p>
                      </div>
                    </div>
                    <div className="payment-method">
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="payment-4"
                          name="payment"
                        />
                        <label className="custom-control-label" for="payment-4">
                          Direct Bank Transfer
                        </label>
                      </div>
                      <div className="payment-content" id="payment-4-show">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cras tincidunt orci ac eros volutpat maximus
                          lacinia quis diam.
                        </p>
                      </div>
                    </div>
                    <div className="payment-method">
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="payment-5"
                          name="payment"
                        />
                        <label className="custom-control-label" for="payment-5">
                          Cash on Delivery
                        </label>
                      </div>
                      <div className="payment-content" id="payment-5-show">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cras tincidunt orci ac eros volutpat maximus
                          lacinia quis diam.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="checkout-btn">
                    <button>Place Order</button>
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

export default Checkout;
